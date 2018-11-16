// Control panel
let psn;


let algo;         // algorithm Element
let multipliers;  // mobileNetArchitecture Element
let outStride;    // outputStride Element
let iSFactor;     // imageScaleFactor Element
let particle;     //  particles Element
let minPoseConf;  // minPoseConfidence Element
let maxPose;      // maxPoseDetections Element
let nmsRad;       // Non-maximum suppression Element 'nmsRadius'
let showVid;      // showVideo Element
let showSkl;      // showSkeleton Element
let showKey;      // showKeyPoints Element
let showBoundaries;//showBoundaries Element
let flip;         // flipHorizontal Element

let psNet = function()
{
  algo = this.algorithm ='multiple';
  multiplers = this.mobileNetArchitecture = 0.75;
  outStride = this.outputStride = 16;
  iSFactor = this.imageScaleFactor = 0.5;
  particle = this.particles = 100;
  minPoseConf = this.minPoseConfidence = 0.2;
  maxPose = this.maxPoseDetections = 0;
  nmsRad = this.nmsRadius = 20;
  showVid = this.showVideo = true;
  showSkl = this.showSkeleton = true;
  showKey = this.showKeyPoints = true;
  showBoundaries = this.showBoundaries = true;
  flip = this.flipHorizontal = true;
};

let f2,f3;
function loadControls()
{
  psn = new psNet();
  let gui = new dat.GUI();
  // gui.autoplace = true;
  gui.width= 290;

  gui.add(psn, 'algorithm', [ 'single', 'multiple'] ).onChange(setValue);

  let f1 = gui.addFolder("Input");
  f1. add(psn, "mobileNetArchitecture",[1.01, 1.00, 0.75, 0.50]).onChange(setValue);
  f1.add(psn, "outputStride", [8, 16, 32]).onChange(setValue);
  f1.add(psn, "imageScaleFactor", 0.2, 1).onChange(setValue);
  f1.add(psn, "particles",0,300).step(1).onChange(setValue);
  f1.open();

  f2 = gui.addFolder("Single-Pose Detection");
  f2.add(psn, "minPoseConfidence", 0, 1).onChange(setValue);

  f3 = gui.addFolder("Multi-Pose Detection");
  f3.add(psn, 'maxPoseDetections', 0, 20).step(1).onChange(setValue);
  f3.add(psn, 'minPoseConfidence', 0, 1).onChange(setValue);
  f3.add(psn, 'nmsRadius', 0, 50).onChange(setValue);
  f3.open();


  let f4 = gui.addFolder("Output");
  f4.add(psn, 'showVideo').onChange(setValue);
  f4.add(psn, 'showSkeleton').onChange(setValue);
  f4.add(psn, 'showKeyPoints').onChange(setValue);
  f4.add(psn, 'showBoundaries').onChange(setValue);
  f4.add(psn, 'flipHorizontal').onChange(setValue);
  f4.open();
}

// Declaring Variables to Set values;

function setValue()
{
  algo = psn.algorithm;

  // Automatically open or collapes the folder y the selected algorithm
  if(algo == 'single')
  {
    f2.open();
    f3.close();
  }
  else {
    f2.close();
    f3.open();
  }

  multiplers = psn.mobileNetArchitecture;
  particle = psn.particles;
  showVid = psn.showVideo;
  showSkl = psn.showSkeleton;
  showKey = psn.showKeyPoints;
  nmsRad = psn.nmsRadius;
  maxPose = psn.maxPoseDetections;
  showBoundaries = psn.showBoundaries;
  minPoseConf = psn.minPoseConfidence;
  outStride = psn.outputStride;
  iSFactor = psn.imageScaleFactor;
  flip = psn.flipHorizontal;
}