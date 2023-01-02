let htmlCanvas = document.getElementById('canvas');
let canvas = htmlCanvas.getContext('2d');
let w = htmlCanvas.clientWidth;
let h = htmlCanvas.clientHeight;

canvas.fillStyle = '#012';
canvas.fillRect(0, 0, w, h);

function showClickInfo(event) {
  console.log(event);
  alert('Ha hecho un click sobre el área canvas');
}

htmlCanvas.onclick = showClickInfo;