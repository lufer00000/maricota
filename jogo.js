document.addEventListener("DOMContentLoaded", () => {

    if (!document.getElementById("gameArea")) return;

    const gameArea = document.getElementById("gameArea");
    const pontosText = document.getElementById("pontos");
    const winScreen = document.getElementById("winScreen");

    let pontos = 0;
    let venceu = false;
    
    winScreen.classList.add("hidden");
    gameArea.style.pointerEvents = "auto";
    pontosText.innerText = "Pontos: 0";

    const spawn = setInterval(criarBalao, 600);

    function criarBalao() {
        if (venceu) return;

        const balao = document.createElement("div");
        balao.classList.add("balloon");

        balao.style.left = Math.random() * (window.innerWidth - 80) + "px";

        function pop() {
            if (venceu) return;

            pontos += 10;
            pontosText.innerText = "Pontos: " + pontos;

            balao.remove();

            if (pontos >= 100) {
            venceu = true;
            clearInterval(spawn);

            gameArea.style.pointerEvents = "none";
            winScreen.classList.remove("hidden");

            iniciarConfetes();

            setTimeout(() => {
                window.location.href = "galeria.html";
            }, 5000);
        }
        }

        balao.addEventListener("click", pop);
        gameArea.appendChild(balao);

        setTimeout(() => balao.remove(), 4000);
    }

    function iniciarConfetes() {

    const canvas = document.getElementById("confetti");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetes = [];

    for (let i = 0; i < 180; i++) {
        confetes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            r: Math.random() * 8 + 4,
            cor: `hsl(${Math.random() * 360},100%,60%)`,
            vel: Math.random() * 4 + 2,
            ang: Math.random() * 360
        });
    }

    function animar() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetes.forEach(c => {
            c.y += c.vel;
            c.ang += 5;

            ctx.save();
            ctx.translate(c.x, c.y);
            ctx.rotate(c.ang * Math.PI / 180);

            ctx.fillStyle = c.cor;
            ctx.fillRect(-c.r / 2, -c.r / 2, c.r, c.r);

            ctx.restore();
        });

        requestAnimationFrame(animar);
    }

    animar();

    setTimeout(() => {
        canvas.style.display = "none";
    }, 7000);
}

});