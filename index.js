function irParaProximaPagina(){
    liberar(1);
    document.body.classList.add("fade-out");

    setTimeout(()=>{
        window.location.href = "surpresa.html";
    },500);
}