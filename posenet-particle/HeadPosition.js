let recX;
let recY;

function drawArrow(j,keypoint)
{
  if(j == 0)
  {
    if (mouseIsPressed)
    {
      recX = keypoint.position.x;
      recY = keypoint.position.y;

      // console.log(recX+"     "+recY);
    }
    // console.log(flip);
    let x = keypoint.position.x;
    let y = keypoint.position.y;
    let min = 25;
    let diffX = x - recX;
    let diffY = y - recY;
    if (recX != 0 && recY != 0)
    {
      if (diffX < -min)
      {
        if(flip)  // If flipHorizontal is true
        {
          text("LEFT", 30, 30);
        }
        else
        {
          text("RIGHT", 30, 30)
        }
      }

      else
      if (diffX > min)
      {
        if(flip)  // If flipHorizontal is true
        {
          text("RIGHT", 30, 30);
        }
        else
        {
          text("LEFT", 30, 30);
        }
      }
      else
      if (diffY < -min)
      {
        text("UP", 30, 30);
      } else
      if (diffY > min)
      {
        text("DOWN", 30, 30);
      }
    }
  }
}
