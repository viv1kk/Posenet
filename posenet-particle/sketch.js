let millisecond;

function setup()
{
  loadControls();
  loadPoseNet();
  loadPhysics();
  setMonitor();
  loadConfidenceData();
  frameRate(60);
}

function draw()
{
    runPoseNet();
    applyPhysics();
    update();
    stats.update();
}
