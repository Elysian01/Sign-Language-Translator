addExample = ƒ(classId)

addExample = classId => {
     /**
      * Reads a frame from the webcam, feeds it through MobileNet, normalizes it
      */
     tf.tidy(() => {
          // Compute the logits vector from the current webcam frame.
          const logits = getNormalizedLogitsFromWebcam();
          // Reshape the logits so its a [1, 1000] matrix instead of a [1000] vector. This allows us to concatenate it
          // to the dataset.
          const logits2d = logits.expandDims(0);

          if (dataset[classId] == null) {
               // No matrix has been defined for the class yet, store a [1, 1000] matrix.
               dataset[classId] = tf.keep(logits2d);
          } else {
               // Concatenate the logits with the matrix for the class, creating an [N_prev + 1, 1000] matrix.
               const oldDataset = dataset[classId];
               dataset[classId] = tf.keep(dataset[classId].concat(logits2d, 0));
          }

          // Observable hack to update the dataset.
          const res = dataset;
          mutable dataset = res;
     });
}

predict = async ƒ()

predict = async () => {
     const similarities = tf.tidy(() => {
          // Get the logits from the webcam and reshape it to a matrix of [1, 1000].
          const logits = getNormalizedLogitsFromWebcam().expandDims(1);
          // Compte the matrix multiply of the dataset and the logits to compute similarities.
          // This is a vector of shape [N].
          return datasetConcatenated.matMul(logits);
     });

     const values = await similarities.data();
     // Compute the top k indices and values in our similarities vector.
     const top = topk(values, Math.min(totalExamples, K_demo));
     // Compute the winner.
     const topClass = calculateTopClass(top.indices, K_demo);
     similarities.dispose();
     return topClass;
}

topk = ƒ(values, k)

topk = (values, k) => {
     /**
      * Given an unsorted array of values, compute the top k indices and values.
      */
     const valuesAndIndices = [];
     for (let i = 0; i < values.length; i++) {
          valuesAndIndices.push({ value: values[i], index: i });
     }
     valuesAndIndices.sort((a, b) => {
          return b.value - a.value;
     });
     const topkValues = new Float32Array(k);
     const topkIndices = new Int32Array(k);
     for (let i = 0; i < k; i++) {
          topkValues[i] = valuesAndIndices[i].value;
          topkIndices[i] = valuesAndIndices[i].index;
     }
     return { values: topkValues, indices: topkIndices };
}

calculateTopClass = ƒ(topKIndices, kVal)

calculateTopClass = (topKIndices, kVal) => {
     /**
      * Computes the most likely class from a topk calculation.
      */

     let imageClass = -1;
     const confidences = {};

     if (topKIndices == null) {
          // No class predicted
          return { classIndex: imageClass, confidences };
     }

     const indicesForClasses = [];
     const topKCountsForClasses = [];
     for (const i in dataset) {
          topKCountsForClasses.push(0);
          let num = classExampleCount[i];
          if (+i > 0) {
               num += indicesForClasses[+i - 1];
          }
          indicesForClasses.push(num);
     }

     for (let i = 0; i < topKIndices.length; i++) {
          for (let classForEntry = 0; classForEntry < indicesForClasses.length;
               classForEntry++) {
               if (topKIndices[i] < indicesForClasses[classForEntry]) {
                    topKCountsForClasses[classForEntry]++;
                    break;
               }
          }
     }

     let topConfidence = 0;
     for (const i in dataset) {
          const probability = topKCountsForClasses[i] / kVal;
          if (probability > topConfidence) {
               topConfidence = probability;
               imageClass = +i;
          }
          confidences[i] = probability;
     }

     return { classIndex: imageClass, confidences };
}


getNormalizedLogitsFromWebcam = ƒ()

getNormalizedLogitsFromWebcam = () => {
     return tf.tidy(() => {
          // Make a prediction through mobilenet and flatten to a vector.
          const result = mobilenet.infer(tf.fromPixels(webcam2), 'conv_preds').flatten();

          // Normalize the result to unit length.
          return result.div(result.norm());
     });
}


/*


dataset = Object {0: null, 1: null, 2: null}
topClass = Object {}
classExampleCount = Object {0: 0, 1: 0, 2: 0}
numexamples = ƒ(id)
totalExamples = 0
datasetConcatenated = null
concatWithNulls = ƒ(x1, x2)
createButton = ƒ(…)
colors = Object {betaArc: "silver", thetaArc: "#7bc4e5"}
datapoint = Object {x: 1.2, y: 1.1}
angle = ƒ(…)
datasets = Object {simple 2-class: Array(12), simple 3-class: Array(18)}
knnPlot = ƒ(points, k, generalize)
pointer = ƒ()
knn = ƒ(x, y, points, k)
drawChart = async ƒ(…)
im = ƒ(src)
ims = async ƒ(srcs)
"conv_preds"
mobilenet = e {intermediateModels: Object, path: "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_1.0_224/model.json", normalizationOffset: e, model: t, endpoints: Array(88)}
imagenetClasses = Object {0: "tench, Tinca tinca", 1: "goldfish, Carassius auratus", 2: "great white shark, white shark, man-eater, man-eating shark, Carcharodon carcharias", 3: "tiger shark, Galeocerdo cuvieri", 4: "hammerhead, hammerhead shark", 5: "electric ray, crampfish, numbfish, torpedo", 6: "stingray", 7: "cock", 8: "hen", 9: "ostrich, Struthio camelus", 10: "brambling, Fringilla montifringilla", 11: "goldfinch, Carduelis carduelis", 12: "house finch, linnet, Carpodacus mexicanus", 13: "junco, snowbird", 14: "indigo bunting, indigo finch, indigo bird, Passerina cyanea", 15: "robin, American robin, Turdus migratorius", 16: "bulbul", 17: "jay", 18: "magpie", 19: "chickadee", …}
imagenetClassIdx = Object {tench, Tinca tinca: 0, goldfish, Carassius auratus: 1, great white shark, white shark, man-eater, man-eating shark, Carcharodon carcharias: 2, tiger shark, Galeocerdo cuvieri: 3, hammerhead, hammerhead shark: 4, electric ray, crampfish, numbfish, torpedo: 5, stingray: 6, cock: 7, hen: 8, ostrich, Struthio camelus: 9, brambling, Fringilla montifringilla: 10, goldfinch, Carduelis carduelis: 11, house finch, linnet, Carpodacus mexicanus: 12, junco, snowbird: 13, indigo bunting, indigo finch, indigo bird, Passerina cyanea: 14, robin, American robin, Turdus migratorius: 15, bulbul: 16, jay: 17, magpie: 18, chickadee: 19, …}
tf = Object {Rank: Object, Reduction: Object, version: Object, setBackend: ƒ(e, t), getBackend: ƒ(), disposeVariables: ƒ(), memory: ƒ(), version_core: "0.12.17", nextFrame: ƒ(), environment: Object, io: Object, serialization: Object, test_util: Object, util: Object, webgl: Object, AdadeltaOptimizer: ƒ(t, r, n), AdagradOptimizer: ƒ(t, r), AdamOptimizer: ƒ(t, r, n, a), AdamaxOptimizer: ƒ(t, r, n, a, o), MomentumOptimizer: ƒ(t, r, n), …}
d3 = Object {event: null, format: ƒ(t), formatPrefix: ƒ(t, n), timeFormat: ƒ(t), timeParse: ƒ(t), utcFormat: ƒ(t), utcParse: ƒ(t), FormatSpecifier: ƒ(t), active: ƒ(t, n), arc: ƒ(), area: ƒ(), areaRadial: ƒ(), ascending: ƒ(t, n), autoType: ƒ(t), axisBottom: ƒ(t), axisLeft: ƒ(t), axisRight: ƒ(t), axisTop: ƒ(t), bisect: ƒ(n, e, r, i), bisectLeft: ƒ(n, e, r, i), …}
vegalite = ƒ(spec)
isMobile = false
import {checkbox, slider, select} from @jashkenas/inputs



*/
