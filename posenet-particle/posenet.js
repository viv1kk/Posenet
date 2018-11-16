let w = 640;
let h = 480;
let video;
let poseNet;
let poses = [];
let cavas;

function loadPoseNet(){
  canvas = createCanvas(w, h, P2D);

  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection

    poseNet = ml5.poseNet(video,modelState,{
     imageScaleFactor: 0.3,
     multipler: 0.75,
     outputStride: 16,
     flipHorizontal: true,
     minConfidence: 0.5,
     maxPoseDetections: 5,
     scoreThreshold: 0.5,
     nmsRadius: 20,
     detectionType: 'multiple'
  });

    function modelState()
    {
      select('#status').html('Model Loaded');
    }
    // This sets up an event that fills the global variable "poses"
    // with an array every time new poses are detected
    poseNet.on('pose', function(results) {
      poses = results;
      // console.log(pose);
    });


  // Hide the video element, and just show the canvas
  video.hide();
}

// PoseNet control Configuration

function runPoseNet() {

  poseNet.detectionType = algo;
  poseNet.multipler = multiplers;
  poseNet.minConfidence = minPoseConf;
  poseNet.outputStride = outStride;  //error exist
  poseNet.imageScaleFactor = iSFactor;
  poseNet.flipHorizontal = flip;
  poseNet.maxPoseDetections = maxPose;
  poseNet.nmsRadius = nmsRad;


  var x = (windowWidth - w) / 2;
  var y = (windowHeight - h) / 2;
  canvas.position(x, y);


  background(255);
  // tint(255,40);

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

  background(255,255,255,50); //In Place of tint function

    drawKeypoints();
  if(showSkl)
  {
    drawSkeleton();
  }
}

function drawKeypoints() {
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
  millisecond = millis();
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      grabVal(pose);
      if (keypoint.score > poseNet.minConfidence) {
        fill(255, 0, 100);
        noStroke();
        if(millisecond >10000 && millisecond <=11000)
        {
        console.log(poses[j]);
      }

        if(showKey)
        {
          ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
          text(j, keypoint.position.x+10, keypoint.position.y);
        }
        if(showBoundaries)
        {
          circularBoundary(j,keypoint);
        }
        // Calling function drawArrow to enable the functionality to detect the direction of the movement of head
        drawArrow(j,keypoint);
      }
    }
  }
}

function drawSkeleton() {
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;

    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(0,150);
      strokeWeight(2);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
