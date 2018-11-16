let nose;
let leftEye;
let rightEye;
let leftEar;
let rightEar;
let leftShoulder;
let rightShoulder;
let leftElbow;
let rightElbow;
let leftWrist;
let rightWrist;
let leftHip;
let rightHip;
let leftKnee;
let rightKnee;
let leftAnkle;
let rightAnkle;


let dataSet = function()
{
  nose = this.nose = 0;
  leftEye = this.leftEye = 0;
  rightEye = this.rightEye = 0;
  leftEar = this.leftEar = 0;
  rightEar = this.rightEar = 0;
  leftShoulder = this.leftShoulder = 0;
  rightShoulder = this.rightShoulder = 0;
  leftElbow = this.leftElbow = 0;
  rightElbow = this.rightElbow = 0;
  leftWrist = this.leftWrist = 0;
  rightWrist = this.rightWrist = 0;
  leftHip = this.leftHip = 0;
  rightHip = this.rightHip = 0;
  leftKnee = this.leftKnee = 0;
  rightKnee = this.rightKnee = 0;
  leftAnkle = this.leftAnkle = 0;
  rightAnkle = this.rightAnkle = 0;
}
let data;
function loadConfidenceData()
{
  data = new dataSet();

  let gui = new dat.GUI();

  gui.domElement.id = 'gui';
  gui.width = 300;

  gui.add(data, 'nose', 0,1,0.000001).listen();
  gui.add(data, 'leftEye', 0,1,0.000001).listen();
  gui.add(data, 'rightEye', 0,1,0.000001).listen();
  gui.add(data, 'leftEar', 0,1,0.000001).listen();
  gui.add(data, 'rightEar', 0,1,0.000001).listen();
  gui.add(data, 'leftShoulder', 0,1,0.000001).listen();
  gui.add(data, 'rightShoulder', 0,1,0.000001).listen();
  gui.add(data, 'leftElbow', 0,1,0.000001).listen();
  gui.add(data, 'rightElbow', 0,1,0.000001).listen();
  gui.add(data, 'leftWrist', 0,1,0.000001).listen();
  gui.add(data, 'rightWrist', 0,1,0.000001).listen();
  gui.add(data, 'leftHip', 0,1,0.000001).listen();
  gui.add(data, 'rightHip', 0,1,0.000001).listen();
  gui.add(data, 'leftKnee', 0,1,0.000001).listen();
  gui.add(data, 'rightKnee', 0,1,0.000001).listen();
  gui.add(data, 'leftAnkle', 0,1,0.000001).listen();
  gui.add(data, 'rightAnkle', 0,1,0.000001).listen();
}

  let pose;
  // millisecond = millis();

  function grabVal(k)
  {
    pose = k;

    nose = pose.keypoints[0].score;
    leftEye = pose.keypoints[1].score;
    rightEye = pose.keypoints[2].score;
    leftEar = pose.keypoints[3].score;
    rightEar = pose.keypoints[4].score;
    leftShoulder = pose.keypoints[4].score;
    rightShoulder = pose.keypoints[6].score;
    leftElbow = pose.keypoints[7].score;
    rightElbow = pose.keypoints[8].score;
    leftWrist = pose.keypoints[9].score;
    rightWrist = pose.keypoints[10].score;
    leftHip = pose.keypoints[11].score;
    rightHip = pose.keypoints[12].score;
    leftKnee = pose.keypoints[13].score;
    rightKnee = pose.keypoints[14].score;
    leftAnkle = pose.keypoints[15].score;
    rightAnkle = pose.keypoints[16].score;
  }


let update = function() {

  data.nose = nose;
  data.leftEye = leftEye;
  data.rightEye = rightEye;
  data.leftEar = leftEar;
  data.rightEar = rightEar;
  data.leftShoulder = leftShoulder;
  data.rightShoulder = rightShoulder;
  data.leftElbow = leftElbow;
  data.rightElbow = rightElbow;
  data.leftWrist = leftWrist;
  data.rightWrist = rightWrist;
  data.leftHip = leftHip;
  data.rightHip = rightHip;
  data.leftKnee = leftKnee;
  data.rightKnee = rightKnee;
  data.leftAnkle = leftAnkle;
  data.rightAnkle = rightAnkle;

  requestAnimationFrame(update);
};
