var classes = [] // list of classes

// const createKNNClassifier = async () => {
//      console.log('Loading KNN Classifier');
//      return await knnClassifier.create();
// };

// export const createMobileNetModel = async () => {
//      console.log('Loading Mobilenet Model');
//      return await mobilenet.load();
// };

// export const createWebcamInput = async () => {
//      console.log('Loading Webcam Input');
//      const webcamElement = await document.getElementById('webcam');
//      return await tf.data.webcam(webcamElement);
// };

const start = async () => {

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

     // const initializeElements = () => {
     //      // document.getElementById('class-a').addEventListener('click', () => addDatasetClass(0));
     //      // document.getElementById('class-b').addEventListener('click', () => addDatasetClass(1));
     //      // document.getElementById('class-c').addEventListener('click', () => addDatasetClass(2));

     // };

     // const addDatasetClass = async (classId) => {
     //      // Capture an image from the web camera.
     //      const img = await webcamInput.capture();

     //      const found = classes.some(el => el.id === classId);
     //      if (!found) classes.push({ id: classId, number: 0 });
     //      let classIndex = classes.findIndex(el => el.id === classId)
     //      currentCount = classes[classIndex].number
     //      currentCount += 1
     //      classes[classIndex].number = currentCount
     //      console.log(classes)
     //      // Get the intermediate activation of MobileNet 'conv_preds' and pass that
     //      // to the KNN classifier.
     //      const activation = mobilenetModel.infer(img, 'conv_preds');

     //      // Pass the intermediate activation to the classifier.
     //      knnClassifierModel.addExample(activation, classId);

     //      // Dispose the tensor to release the memory.
     //      img.dispose();
     // };

     // const imageClassificationWithTransferLearningOnWebcam = async () => {
     //      console.log("Machine Learning on the web is ready");
     //      while (true) {
     //           if (knnClassifierModel.getNumClasses() > 0) {
     //                const img = await webcamInput.capture();

     //                // Get the activation from mobilenet from the webcam.
     //                const activation = mobilenetModel.infer(img, 'conv_preds');
     //                // Get the most likely class and confidences from the classifier module.
     //                const result = await knnClassifierModel.predictClass(activation);

     //                const classes = ['A', 'B', 'C'];
     //                document.getElementById('console').innerText = `
     //    prediction: ${classes[result.label]}\n
     //    probability: ${result.confidences[result.label]}
     //  `;

     //                // Dispose the tensor to release the memory.
     //                img.dispose();
     //           }
     //           await tf.nextFrame();
     //      }
     // };
     // await initializeElements();
     // await imageClassificationWithTransferLearningOnWebcam();
};



window.onload = () => {
     start();
};
