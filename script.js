```javascript
if(k==='left') nd.x=-1;
if(k==='right') nd.x=1;
// prevent reverse
if(snake.length>1 && nd.x === -dir.x && nd.y === -dir.y) return;
dir = nd;
// start on first keypress
if(!running){ reset(); }
}


if(e.key === ' '){ // space to pause
e.preventDefault();
running = !running;
}
});


// UI controls
startBtn.addEventListener('click', ()=>{ reset(); });
gridSelect.addEventListener('change', ()=>{ reset(); });


// speed control: simple +/- with keys 1-9
window.addEventListener('keypress', (e)=>{
if(/[1-9]/.test(e.key)){
speed = Math.max(1, Math.min(15, parseInt(e.key,10)));
tickInterval = 1000 / speed;
document.querySelector('#speed').textContent = speed;
}
});


// initial placement
function init(){
resizeCanvas();
placeFood();
draw();
requestAnimationFrame(loop);
}


function resizeCanvas(){
// keep canvas square; it is fixed size in this simple version
cellSize = canvas.width / grid;
}


init();
})();
```