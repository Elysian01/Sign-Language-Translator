export const createKNNClassifier = async () => {
     console.log('Loading KNN Classifier');
     return await knnClassifier.create();
};

export const createMobileNetModel = async () => {
     console.log('Loading Mobilenet Model');
     return await mobilenet.load();
};

export const createWebcamInput = async () => {
     console.log('Loading Webcam Input');
     const webcamElement = await document.getElementById('webcam');
     return await tf.data.webcam(webcamElement);
};