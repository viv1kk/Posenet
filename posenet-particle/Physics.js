// Implementation of ToxicLibs' VerletPhysics2D Physics Engine for Partical Simulation

let VerletPhysics2D = toxi.physics2d.VerletPhysics2D,
VerletParticle2D = toxi.physics2d.VerletParticle2D,
AttractionBehavior = toxi.physics2d.behaviors.AttractionBehavior,
GravityBehavior = toxi.physics2d.behaviors.GravityBehavior,
Vec2D = toxi.geom.Vec2D,
Rect = toxi.geom.Rect;

let NUM_PARTICLES;

let physics;
let mouseAttractor;
let mousePos;

let headAttractor;
let headPos;

let leftSAttractor;
let leftPos;

let rightSAttractor;
let rightPos;

let leftHAttractor;
let leftHPos;

let rightHAttractor;
let rightHPos;


function loadPhysics()
{

  fill(255);
  stroke(255);

  physics = new VerletPhysics2D();
  physics.setDrag(0.05);
  physics.setWorldBounds(new Rect(0, 0, width, height-height/3));
  physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.15)));  // value range should be b/w 0-1.00

  headPos = new Vec2D(width/2, height/2);
  headAttractor = new AttractionBehavior(headPos, 200, -0.9);
  physics.addBehavior(headAttractor);

  leftPos = new Vec2D(width/2, height/2);
  leftSAttractor = new AttractionBehavior(leftPos, 100, -0.9);
  physics.addBehavior(leftSAttractor);

  rightPos = new Vec2D(width/2, height/2);
  rightSAttractor = new AttractionBehavior(rightPos, 100, -0.9);
  physics.addBehavior(rightSAttractor);

  leftHPos = new Vec2D(width/2, height/2);
  leftHAttractor = new AttractionBehavior(leftHPos, 100, -0.9);
  physics.addBehavior(leftHAttractor);

  rightHPos = new Vec2D(width/2, height/2);
  rightHAttractor = new AttractionBehavior(rightHPos, 100, -0.9);
  physics.addBehavior(rightHAttractor);
}

let p;
let randLoc;

function addParticle() {
  randLoc = Vec2D.randomVector().scale(5).addSelf(width / 2, 0);
  p = new VerletParticle2D(randLoc);
  physics.addParticle(p);
  physics.addBehavior(new AttractionBehavior(p, 20, -1.2, 0.1));
}

// function removeParticles()
// {
//     physics.removeParticle();
// }

function applyPhysics()
{
  physics.update();
  NUM_PARTICLES = particle;
  stroke(0, 100);
  line(0, height-height/3, width, height-height/3);
  if (physics.particles.length <  NUM_PARTICLES) {
    addParticle();
    // console.log(physics.particles.length);
  }
  if(physics.particles.length > NUM_PARTICLES)
  {
    physics.particles.pop();
    // removeParticles();
  }

  for (let i=0; i<physics.particles.length; i++) {
    let p = physics.particles[i];

    fill(0);
    noStroke();
    ellipse(p.x, p.y, 10, 10);
  }
  noStroke();
}

function circularBoundary(j,keypoint)
{
  o = j;
  k = keypoint;
  if (j==0) {
    headPos.set(keypoint.position.x, keypoint.position.y);
    noFill();
    stroke(100,100,0);
    ellipse(keypoint.position.x, keypoint.position.y, 200, 200);
  }

  if (j==5) {
    leftPos.set(keypoint.position.x, keypoint.position.y);
    noFill();
    stroke(100, 100, 0);
    ellipse(keypoint.position.x, keypoint.position.y, 100, 100);
  }

  if (j==6) {
    rightPos.set(keypoint.position.x, keypoint.position.y);
    noFill();
    stroke(100, 100, 0);
    ellipse(keypoint.position.x, keypoint.position.y, 100, 100);
  }

  if (j==9) {
    rightHPos.set(keypoint.position.x, keypoint.position.y);
    noFill();
    stroke(100, 100, 0);
    ellipse(keypoint.position.x, keypoint.position.y, 100, 100);
  }

  if (j==10) {
    leftHPos.set(keypoint.position.x, keypoint.position.y);
    noFill();
    stroke(100, 100, 0);
    ellipse(keypoint.position.x, keypoint.position.y, 100, 100);
  }
}
