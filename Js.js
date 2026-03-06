document.addEventListener("DOMContentLoaded", function(){
    const envelope = document.getElementById("evnelope");
    const letter = document.getElementById("letter"); // klikana kartka
    const btnOpen = document.getElementById("open");
    const btnclose = document.getElementById("close");
    const modulo = document.getElementById("modulo");

    function openEnvelope(){
        // flap otwiera się, animacja flowers działa
        envelope.classList.add("open");
        envelope.classList.remove("close");
                setTimeout(() => {
        modulo.classList.add("open");
        modulo.classList.remove("close");
        }, 1600);
    }



    function closeEnvelope(){
        // najpierw chowanie kartki
        modulo.classList.remove("open");
        modulo.classList.add("close");

        // po 0.6s zamknięcie koperty
        setTimeout(() => {
            envelope.classList.add("close");
            envelope.classList.remove("open");
        }, 600);
    }

    // Eventy
    envelope.addEventListener("click", openEnvelope);
    btnOpen.addEventListener("click", openEnvelope);
    btnclose.addEventListener("click", closeEnvelope);

    
});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    speed: 0.2 + Math.random()*1.5,
    size: Math.random()*4+2,
    alpha: Math.random()
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.y += p.speed;

    if(p.y > canvas.height){
      p.y = -10;
      p.x = Math.random()*canvas.width;
    }

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();