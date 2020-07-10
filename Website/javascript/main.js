var identity = 0;
var classes = []; // list of classes
// classes = [ {id:1 , name : "Hello" , count : 0}]

const start = async () => {
     const trainingCards = document.getElementById("training-cards")
     const predictions = document.getElementById("predictions")
     const confidence = document.getElementById("confidence")

     const createKNNClassifier = async () => {
          console.log('Loading KNN Classifier');
          return await knnClassifier.create();
     };
     const createMobileNetModel = async () => {
          console.log('Loading Mobilenet Model');
          return await mobilenet.load();
     };
     const createWebcamInput = async () => {
          console.log('Loading Webcam Input');
          const webcamElement = await document.getElementById('webcam');
          return await tf.data.webcam(webcamElement);
     };

     const mobilenetModel = await createMobileNetModel();
     const knnClassifierModel = await createKNNClassifier();
     const webcamInput = await createWebcamInput();

     const addClass = () => {
          // const inputClassName = document.getElementById("inputClassName").value

          Classname = inputClassName.value
          const found = classes.some(el => el.name === Classname);
          if (!found) {
               identity += 1
               classes.push({ id: identity, name: Classname, count: 0 });
          }


          trainingCards.innerHTML += '<div class="grey-bg"><div class="text-center"><h3>Class Name : <span>' + Classname + '</span></h3><h3>Images : <span id = "images-' + identity + '" >0</span></h3></div ><div><button class="dark btn-spread btn-shadow mr-5" id="' + identity + '">Add New Images <i class="fas fa-plus fa-1x"></i></button></div></div>'

          document.getElementById(identity.toString()).addEventListener('click', () => addDatasetClass(identity));
          inputClassName.value = ""
          console.log(classes)
     }


     const initializeElements = () => {
          const inputClassName = document.getElementById("inputClassName").value
          document.getElementById('add-button').addEventListener('click', () => addClass(inputClassName));

     };

     const addDatasetClass = async (classId) => {

          // Capture an image from the web camera.
          const img = await webcamInput.capture();

          // Get the intermediate activation of MobileNet 'conv_preds' and pass that
          // to the KNN classifier.
          const activation = mobilenetModel.infer(img, 'conv_preds');

          // Pass the intermediate activation to the classifier.
          knnClassifierModel.addExample(activation, classId);

          let classIndex = classes.findIndex(el => el.id === classId)
          currentCount = classes[classIndex].count
          currentCount += 1
          classes[classIndex].count = currentCount

          var temp_id = 'images-' + classId.toString()
          document.getElementById(temp_id).innerHTML = currentCount;

          // Dispose the tensor to release the memory.
          img.dispose();
     };



     const imageClassificationWithTransferLearningOnWebcam = async () => {
          console.log("Machine Learning on the web is ready");
          while (true) {
               if (knnClassifierModel.getNumClasses() > 0) {
                    const img = await webcamInput.capture();

                    // Get the activation from mobilenet from the webcam.
                    const activation = mobilenetModel.infer(img, 'conv_preds');
                    // Get the most likely class and confidences from the classifier module.
                    const result = await knnClassifierModel.predictClass(activation);

                    console.log(classes[result.label - 1].name)
                    predictions.innerHTML = classes[result.label - 1].name
                    console.log(result.confidences[result.label])

                    confidence.innerHTML = Math.floor(result.confidences[result.label] * 100)

                    // const classes = ['A', 'B', 'C'];
                    // document.getElementById('console').innerText = `
                    // prediction: ${classes[result.label]}\n
                    // probability: ${result.confidences[result.label]}`;

                    // Dispose the tensor to release the memory.
                    img.dispose();
               }
               await tf.nextFrame();
          }
     };

     await initializeElements();
     await imageClassificationWithTransferLearningOnWebcam();
};

window.onload = () => {
     start();
};
