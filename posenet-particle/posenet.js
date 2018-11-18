let w = 640;
let h = 480;
let video;
let poseNet;
let poses = [];
let canvas;

function loadPoseNet(){
  canvas = createCanvas(w, h, P2D);

  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection

  poseNet = ml5.poseNet(video,modelState,{
    // detectionType: 'single',
    // imageScaleFactor: 0.3,
    // multiplier: 0.75,
    // outputStride: 16,
    // flipHorizontal: false,
    // minConfidence: 0.5, // part Confidence
    // maxPoseDetections: 5,
    // scoreThreshold: 0.5, // pose Confidence
    // nmsRadius: 20
  });

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

// PoseNet control Configuration

function runPoseNet() {

  poseNet.detectionType = algo;
  poseNet.minConfidence = minPartConf;
  poseNet.scoreThreshold = minPoseConf;
  poseNet.outputStride = parseInt(outStride,10);
  poseNet.imageScaleFactor = iSFactor;
  poseNet.flipHorizontal = flip;
  poseNet.maxPoseDetections = parseInt(maxPose);
  poseNet.nmsRadius = nmsRad;

  poseNet.multiplier = Number(mobileNet);

  var x = (windowWidth - w) / 2;
  var y = (windowHeight - h-150) / 2;
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

  background(255,255,255,150); //In Place of tint function

  drawKeypoints();

  if(showSkl && poseNet.scoreThreshold < poseScore)
  {
    drawSkeleton();
  }
}

function drawKeypoints() {
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
    if(keyIsPressed)
    {
      console.log(pose);
    }

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
            circularBoundary(j,keypoint);
          }
          // Calling function drawArrow to enable the functionality to detect the direction of the movement of head
          drawArrow(j,keypoint);
        }
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
