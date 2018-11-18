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
let poseScore;

let pose;

let dataSet = function()
{
  poseScore = this.poseScore = 0;
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
  gui.autoPlace = false;
  gui.domElement.id = 'gui';
  gui.width = 320;

  var s1 = gui.addFolder("Subject #1");
  s1.add(data, 'poseScore', 0,1,0.000001).listen();
  let kp1 = gui.addFolder("Keypoints Confidence Score");
  kp1.add(data, 'nose', 0,1,0.000001).listen();
  kp1.add(data, 'leftEye', 0,1,0.000001).listen();
  kp1.add(data, 'rightEye', 0,1,0.000001).listen();
  kp1.add(data, 'leftEar', 0,1,0.000001).listen();
  kp1.add(data, 'rightEar', 0,1,0.000001).listen();
  kp1.add(data, 'leftShoulder', 0,1,0.000001).listen();
  kp1.add(data, 'rightShoulder', 0,1,0.000001).listen();
  kp1.add(data, 'leftElbow', 0,1,0.000001).listen();
  kp1.add(data, 'rightElbow', 0,1,0.000001).listen();
  kp1.add(data, 'leftWrist', 0,1,0.000001).listen();
  kp1.add(data, 'rightWrist', 0,1,0.000001).listen();
  kp1.add(data, 'leftHip', 0,1,0.000001).listen();
  kp1.add(data, 'rightHip', 0,1,0.000001).listen();
  kp1.add(data, 'leftKnee', 0,1,0.000001).listen();
  kp1.add(data, 'rightKnee', 0,1,0.000001).listen();
  kp1.add(data, 'leftAnkle', 0,1,0.000001).listen();
  kp1.add(data, 'rightAnkle', 0,1,0.000001).listen();
  kp1.open();
  s1.open();
}

function grabVal(k,j)
{
  pose = k;

  for(let i = 0; i <1; i++)
  {
    poseScore = pose[i].pose.score;

    if(poseNet.flipHorizontal)
    {
      nose = pose[i].pose.keypoints[0].score;
      leftEye = pose[i].pose.keypoints[2].score;
      rightEye = pose[i].pose.keypoints[1].score;
      leftEar = pose[i].pose.keypoints[4].score;
      rightEar = pose[i].pose.keypoints[3].score;
      leftShoulder = pose[i].pose.keypoints[6].score;
      rightShoulder = pose[i].pose.keypoints[5].score;
      leftElbow = pose[i].pose.keypoints[8].score;
      rightElbow = pose[i].pose.keypoints[7].score;
      leftWrist = pose[i].pose.keypoints[10].score;
      rightWrist = pose[i].pose.keypoints[9].score;
      leftHip = pose[i].pose.keypoints[12].score;
      rightHip = pose[i].pose.keypoints[11].score;
      leftKnee = pose[i].pose.keypoints[14].score;
      rightKnee = pose[i].pose.keypoints[13].score;
      leftAnkle = pose[i].pose.keypoints[16].score;
      rightAnkle = pose[i].pose.keypoints[15].score;
    }
    else{
      nose = pose[i].pose.keypoints[0].score;
      leftEye = pose[i].pose.keypoints[1].score;
      rightEye = pose[i].pose.keypoints[2].score;
      leftEar = pose[i].pose.keypoints[3].score;
      rightEar = pose[i].pose.keypoints[4].score;
      leftShoulder = pose[i].pose.keypoints[4].score;
      rightShoulder = pose[i].pose.keypoints[6].score;
      leftElbow = pose[i].pose.keypoints[7].score;
      rightElbow = pose[i].pose.keypoints[8].score;
      leftWrist = pose[i].pose.keypoints[9].score;
      rightWrist = pose[i].pose.keypoints[10].score;
      leftHip = pose[i].pose.keypoints[11].score;
      rightHip = pose[i].pose.keypoints[12].score;
      leftKnee = pose[i].pose.keypoints[13].score;
      rightKnee = pose[i].pose.keypoints[14].score;
      leftAnkle = pose[i].pose.keypoints[15].score;
      rightAnkle = pose[i].pose.keypoints[16].score;
    }
  }
}

let update = function() {

  data.poseScore = poseScore;
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
