const texto = document.getElementById("texto");
const botao = document.getElementById("botao");

const mensagem = [
"Achou que era só o feliz aniversário né bobona ",
"",
"ainda não acabou",
"",
"si ligue apertano isso ai"
];

let i = 0;

function escrever() {

    if (i < mensagem.length) {

        texto.innerHTML += mensagem[i] + "<br>";
        i++;

        setTimeout(escrever, 1000);

    } else {
        botao.classList.remove("hidden");
    }
}

escrever();

function irJogo(){
    liberar(2);
    document.body.classList.add("fade-out");

    setTimeout(()=>{
        window.location.href = "jogo.html";
    },500);
}
