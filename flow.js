function liberar(etapa) {
    sessionStorage.setItem("etapa", etapa);
}

function permitido(minEtapa) {
    const etapa = Number(sessionStorage.getItem("etapa") || 0);
    return etapa >= minEtapa;
}