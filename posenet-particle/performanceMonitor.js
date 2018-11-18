let stats = new Stats();

function setMonitor()
{
  // Implementation of real time performance monitor having :
  // FPS Frames rendered in the last second. The higher the number the better.
  // MS Milliseconds needed to render a frame. The lower the number the better.
  // MB MBytes of allocated memory. (Run Chrome with --enable-precise-memory-info)
  // CUSTOM User-defined panel support.

  stats.dom.style.position = 'absolute';
  stats.dom.style.float = 'left';
  stats.dom.style.top = 8;
  stats.dom.style.left=8;
  stats.domElement.id = 'stats';
  document.body.appendChild( stats.dom );
}
