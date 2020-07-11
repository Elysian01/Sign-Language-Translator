// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Image Classification using Feature Extraction with MobileNet. Built with p5.js
This example uses a callback pattern to create the classifier
=== */

let featureExtractor;
let classifier;
let video;
let loss;
let A = 0;
let B = 0;
let C = 0;
let D = 0;
let E = 0;
let F = 0;
let G = 0;
let H = 0;
let L = 0;
let O = 0;
let P = 0;
let V = 0;
let W = 0;
let Ok = 0;
let Y = 0;
let Bad = 0;
let I_love_you = 0;
let Good = 0;
let That = 0;
let Hello = 0;
function setup() {
  noCanvas();
  // Create a video element
  
  video = createCapture(VIDEO);
  video.parent('videoContainer');
  video.size(64, 64);
  

  // Extract the already learned features from MobileNet
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  const knnClassifier = ml5.KNNClassifier();
  
  
  // Create a new classifier using those features and give the video we want to use
  const options = { numLabels: 21 };
  classifier = featureExtractor.classification(video, options);
  // Set up the UI buttons
  setupButtons();
}

// A function to be called when the model has been loaded
async function modelReady() {
  select('#modelStatus').html('MobileNet Loaded!');
   //If you want to load a pre-trained model at the start
   await classifier.load('model.json', function() {
     select('#modelStatus').html('Custom Model Loaded!');
   });
}

// Classify the current frame.
function classify() {
  classifier.classify(gotResults);
}

// A util function to create UI buttons
function setupButtons() {
  // When the Cat button is pressed, add the current frame
  // from the video with a label of "cat" to the classifier
  buttonA = select('#A');
  buttonA.mousePressed(function() {
    classifier.addImage('A');
    select('#A').html(A++);
  });

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonB = select('#B');
  buttonB.mousePressed(function() {
    classifier.addImage('B');
    select('#B').html(B++);
  });

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonC = select('#C');
  buttonC.mousePressed(function() {
    classifier.addImage('C');
    select('#C').html(C++);
  });
  buttonA = select('#D');
  buttonA.mousePressed(function() {
    classifier.addImage('D');
    select('#D').html(D++);
  });

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonB = select('#E');
  buttonB.mousePressed(function() {
    classifier.addImage('E');
    select('#E').html(E++);
  });
  buttonB = select('#F');
  buttonB.mousePressed(function() {
    classifier.addImage('F');
    select('#F').html(F++);
  });

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonC = select('#G');
  buttonC.mousePressed(function() {
    classifier.addImage('G');
    select('#G').html(G++);
  });
  buttonA = select('#H');
  buttonA.mousePressed(function() {
    classifier.addImage('H');
    select('#H').html(H++);
  });

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  
  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  
  buttonA = select('#L');
  buttonA.mousePressed(function() {
    classifier.addImage('L');
    select('#L').html(L++);
  });

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonB = select('#O');
  buttonB.mousePressed(function() {
    classifier.addImage('O');
    select('#O').html(O++);
  });

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonC = select('#P');
  buttonC.mousePressed(function() {
    classifier.addImage('P');
    select('#P').html(P++);
  });
  
  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonC = select('#V');
  buttonC.mousePressed(function() {
    classifier.addImage('V');
    select('#V').html(V++);
  });
 

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonB = select('#W');
  buttonB.mousePressed(function() {
    classifier.addImage('W');
    select('#W').html(W++);
  });

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonC = select('#Y');
  buttonC.mousePressed(function() {
    classifier.addImage('Y');
    select('#Y').html(Y++);
  });
   buttonC = select('#Ok');
  buttonC.mousePressed(function() {
    classifier.addImage('Ok');
    select('#Ok').html(Ok++);
  });
 

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonB = select('#Good');
  buttonB.mousePressed(function() {
    classifier.addImage('Good');
    select('#Good').html(Good++);
  });

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonC = select('#Bad');
  buttonC.mousePressed(function() {
    classifier.addImage('Bad');
    select('#Bad').html(Bad++);
  });
  

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonB = select('#I_love_you');
  buttonB.mousePressed(function() {
    classifier.addImage('I_love_you');
    select('#I_love_you').html(I_love_you++);
  });
   buttonC = select('#That');
  buttonC.mousePressed(function() {
    classifier.addImage('That');
    select('#That').html(That++);
  });
 

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonB = select('#Hello');
  buttonB.mousePressed(function() {
    classifier.addImage('Hello');
    select('#Hello').html(Hello++);
  });

  

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  

  // Train Button
  train = select('#train');
  train.mousePressed(function() {
    classifier.train(function(lossValue) {
      if (lossValue) {
        loss = lossValue;
        select('#loss').html('Loss: ' + loss);
      } else {
        select('#loss').html('Done Training! Final Loss: ' + loss);
      }
    });
  });

  // Predict Button
  buttonPredict = select('#buttonPredict');
  buttonPredict.mousePressed(classify);

  // Save model
  saveBtn = select('#save');
  saveBtn.mousePressed(function() {
    classifier.save();
  });

  // Load model
  loadBtn = select('#load');
  loadBtn.changed(function() {
    classifier.load(loadBtn.elt.files, function() {
      select('#modelStatus').html('Custom Model Loaded!');
    });
  });
}

// Show the results
function gotResults(err, results) {
  // Display any error
  if (err) {
    console.error(err);
  }
  if (results && results[0]) {
    select('#result').html(results[0].label);
    select('#confidence').html(results[0].confidence.toFixed(2) * 100 + '%');
    classify();
  }
}
