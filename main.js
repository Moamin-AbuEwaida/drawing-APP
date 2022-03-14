window.addEventListener('load', ()=>{
    const canvas=document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    // canvas sizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //variables
    let painting = false;

    const startPosition= (e)=>{
        painting = true;
        draw(e);
    };
    const finishPosition= ()=>{
        painting = false;
        ctx.beginPath();
    }
    const draw=(e)=>{
        if(!painting)return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    const clear =()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // eventlistners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('touchstart', startPosition,false);
    canvas.addEventListener('touchend', finishPosition, false);
    canvas.addEventListener('touchmove', draw, false);
    canvas.addEventListener('dblclick', clear);

})


// canvas resizing
window.addEventListener('resize', ()=>{
    const canvas=document.querySelector('#canvas');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})