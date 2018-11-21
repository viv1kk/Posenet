let w = 640;
let h = 480;
let video;
let poseNet;
let poses = [];
let canvas;

function loadPoseNet(){
  canvas = createCanvas( w, h, P2D);

  video = createCapture(VIDEO);
  video.size(width, height);

  poseNet = ml5.poseNet(modelState);

  function modelState()
  {
    select('#status').html('<b>Model Loaded</b>');
  }
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function runPoseNet() {

  if(poseNet.detectionType != algo)
  {
    if(algo === 'multi-pose')
    {
      poseNet.multiPose(video);
    }
    else
    {
      poseNet.singlePose(video);
    }
  }
  poseNet.minConfidence = minPartConf;
  poseNet.scoreThreshold = minPoseConf;
  poseNet.outputStride = parseInt(outStride,10);
  poseNet.imageScaleFactor = iSFactor;
  poseNet.flipHorizontal = Boolean(flip);
  poseNet.nmsRadius = nmsRad;

  if(poseNet.multiplier != Number(mobileNet))
  {
    poseNet.multiplier = Number(mobileNet);
    poseNet.load(mobileNet);
  }

  var x = (windowWidth - w) / 2;
  var y = (windowHeight - h-150) / 2;
  canvas.position(x, y);

  background(255);

  if(showVid)
  {
    if(poseNet.flipHorizontal)
    {
      push();
      translate(video.width,0);
      scale(-1.0,1.0);
      image(video,0,0);
      pop();
    }
    else{
      image(video, 0, 0, width, height);
    }
  }

  background(255,255,255,150); //In Place of tint function

  drawKeypoints();

  if(showSkl && poseNet.scoreThreshold < poseScore)
  {
    drawSkeleton();
  }
}

function drawKeypoints() {
  var ind;
  if(algo === 'multi-pose' && (maxPose -1)<poses.length)
  {
    ind = maxPose;
  }
  else {
    ind = poses.length;
  }
  for (let i = 0; i < ind; i++) {
    let pose = poses[i].pose;

    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      grabVal(poses,j);
      if (keypoint.score > poseNet.minConfidence) {
        if(poseNet.scoreThreshold < poseScore)
        {
          fill(255, 0, 100);
          noStroke();
          let h = j;
          if(showKey)
          {
            ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
            // Possibly a Bug in ml5.min.js version 0.1.3
            // poseNet.flipHorizontal not working so I'm hard-coding the logic
            //Begin
            if(poseNet.flipHorizontal)
            {
              let c = 0;
              if(j % 2 == 0){
                if(j == 0)
                {
                  c = j;
                }
                else
                c = j-1;
              }
              else {
                c = j+1;
              }
              h = c;
            }
            //End
            text(h, keypoint.position.x+10, keypoint.position.y);
          }
          if(showBoundaries)
          {
            circularBoundary(j,keypoint,i);
          }
          // Calling function drawArrow to enable the functionality to detect the direction of the movement of head
          drawArrow(j,keypoint);
        }
      }
    }
  }
}

function drawSkeleton() {
  var ind;
  if(algo === 'multi-pose' && (maxPose -1)< poses.length)
  {
    ind = maxPose -1;
  }
  else {
    ind = poses.length;
  }
  for (let i = 0; i < ind; i++) {
    let skeleton = poses[i].skeleton;

    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];

      stroke(0,150);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
