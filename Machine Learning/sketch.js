let video;
let features;
let knn;
let canvas;
let input;
let ready = false;
let classes = [];
let resultP;

const CLASS_LIMIT = 8;
const INITIAL_LABEL = "I need data";
const CLASSNAME_BUTTON = "trainButton";
const CAMERA_CONTAINER_ID = "input";
const SNAPSHOTS_POSITION = 1;
const TAKE_SNAP_TEXT = "Take example"

function setup() {
  input = select("#" + CAMERA_CONTAINER_ID);

  video = createCapture(VIDEO, loadCanvas);
  video.hide();

  features = ml5.featureExtractor("MobileNet", video);
  knn = ml5.KNNClassifier();

  resultP = createP(INITIAL_LABEL);
  resultP.id("result");

  resultP.parent(CAMERA_CONTAINER_ID);

  select("#colorClass").value('#' + (Math.random() * 0xFFFFFF << 0).toString(16));
}

function loadCanvas() {
  canvas = createCanvas(video.width, video.height);
  canvas.parent(CAMERA_CONTAINER_ID);
  resizeCamera();
}

function goClassify() {
  const logits = features.infer(video);
  knn.classify(logits, function (error, result) {
    if (error) {
      console.error(error);
    } else {
      resultP.html(result.label);
      updateBar(result);
      goClassify();
    }
  })
}

function updateBar(result) {
  let results = result.confidencesByLabel;
  for (let item in results) {
    select("#" + item).style("width", results[item].toFixed(3) * 100 + "%")
  }
}

function draw() {
  image(video, 0, 0, width, height);

  if (knn.getNumLabels() >= 2 && !ready) {
    goClassify();
    ready = true;
  }
}

function addClass(name, color = "yellow") {
  if (exist(name) || classes.length >= CLASS_LIMIT || name == "") return;

  let classDiv = createDiv();
  classDiv.class("class");

  let loadDiv = createDiv();
  loadDiv.id(name);
  loadDiv.class("confidence");
  loadDiv.style("background-color", color);

  let trainButton = createButton("<div>TRAIN \"" + name + "\"</div>");
  trainButton.class(CLASSNAME_BUTTON);
  trainButton.style("background-color", color);

  trainButton.mousePressed(() => {
    knn.addExample(features.infer(video), name);
  });

  let imgDiv = createDiv(TAKE_SNAP_TEXT);
  imgDiv.class("snapshots");

  imgDiv.mousePressed(() => {
    imgDiv.html("");
    imgDiv.child(capture());
    imgDiv.mousePressed(() => null);
  });

  classDiv.child(loadDiv);
  classDiv.child(imgDiv);
  classDiv.child(trainButton);

  classDiv.parent(select("#class-cont"));

  classes.push({
    label: name,
    dom: classDiv
  });

}

function exist(name) {
  for (let i = 0; i < classes.length; i++)
    if (classes[i].label == name) return true;
  return false;
}

function onAddClass() {
  addClass(select("#inputClassName").value(), select("#colorClass").value());
  select("#inputClassName").value("");
  select("#colorClass").value('#' + (Math.random() * 0xFFFFFF << 0).toString(16));
}

function capture() {
  let img = new Image();
  img.src = canvas.elt.toDataURL();
  return img;
}

function resizeCamera() {
  var aspectRatio = video.width / video.height;
  if (input.elt.clientWidth > input.elt.clientHeight)
    resizeCanvas(input.elt.clientHeight, input.elt.clientHeight / aspectRatio);
  else
    resizeCanvas(input.elt.clientWidth, input.elt.clientWidth / aspectRatio);
}

function windowResized() {
  resizeCamera();
}
