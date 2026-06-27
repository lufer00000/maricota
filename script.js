const contadorEl = document.getElementById("contador");
const birthdayEl = document.getElementById("birthday");
const countdownEl = document.getElementById("countdown");

const modoTeste = false;

const dataAniversario = new Date("2026-06-28T00:00:00");

if (contadorEl && birthdayEl) {
    
    if (modoTeste) {
        mostrarAniversario();
    } else {
        iniciarContador();
    }    
}

function iniciarContador() {

    const countdown = setInterval(() => {

        const agora = new Date();
        const diferenca = dataAniversario - agora;

        if (diferenca <= 0) {
            clearInterval(countdown);
            mostrarAniversario();
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        if (countdownEl) {
        countdownEl.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }

    }, 1000);
}

function mostrarAniversario() {

    document.getElementById("contador").classList.add("hidden");
    document.getElementById("birthday").classList.remove("hidden");

    iniciarConfetes();
}

function iniciarConfetes(){

    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetes = [];

    for(let i=0;i<180;i++){

        confetes.push({

            x: Math.random()*canvas.width,
            y: Math.random()*-canvas.height,

            r: Math.random()*8+4,

            cor:`hsl(${Math.random()*360},100%,60%)`,

            vel:Math.random()*4+2,

            ang:Math.random()*360
        });

    }

    function animar(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        confetes.forEach(c=>{

            c.y+=c.vel;
            c.ang+=5;

            ctx.save();

            ctx.translate(c.x,c.y);
            ctx.rotate(c.ang*Math.PI/180);

            ctx.fillStyle=c.cor;
            ctx.fillRect(-c.r/2,-c.r/2,c.r,c.r);

            ctx.restore();

        });

        requestAnimationFrame(animar);
    }

    animar();

    setTimeout(()=>{
        canvas.style.display="none";
    },7000);

}

function irParaProximaPagina(){
    liberar(1);
    document.body.classList.add("fade-out");

    setTimeout(()=>{
        window.location.href = "surpresa.html";
    },500);
}