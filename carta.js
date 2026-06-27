const texto = `
Feliz aniversário maricota, maria, ma, ria.
Sei nem o que escrever direito. Você sabe o quanto eu gosto de você, e 
o quão especial você é pra mim, e hoje é um dia especial pra você. 16 anos de vivência, você 
tem noção disso? Já viveu mais do que um tigre e, se bobear, mais do que um gato doméstico tamem kkkkk.
Mas falano sério, espero que esse novo ciclo seja cheio de coisas boas, que você continue sendo essa pessoa 
incrível e que dá a vida pelas coisas, msm as vezes ignorando as coisa que mando. Sabe o quanto sou grato 
por você, e o quanto eu te amo de vdd, queria conseguir te dar alguma coisa (sem ser a bunda!) mas a distância 
atrapalha bem nessa questão. Não sei o que escrever mais, fiz isso aqui com carinho pro ce, pra mostrar 
que oc é importante pra eu.
Acho que deu de escritura já, aproveita bem seu aniversário maricota, que Deus abençoe muito você, 
eu te amo de monte chupetinha! ❤️
`;

let i = 0;

function escrever(){
    if(i < texto.length){
        document.getElementById("carta").innerHTML += texto[i];
        i++;
        const letra = texto[i];

        let velocidade = 40;

        if(letra===".")
        velocidade=500;

        if(letra==="!")
        velocidade=500;

        if(letra===",")
        velocidade=250;

        if(letra==="\n")
        velocidade=120;

        setTimeout(escrever,velocidade);
    }
}

escrever();

if(!permitido(4)){
    window.location.href = "index.html";
}

function criarCoracao(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(criarCoracao,400);

window.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");
    if (cursor) cursor.style.display = "none";
});