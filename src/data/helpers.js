const formatFecha = (date) => {
    const opciones = { year: 'numeric', month: 'short', day: 'numeric' };
    return date
    .toLocaleDateString('es',opciones)
    .replace(/ /g,'-')
    .replace('.','')
    .replace(/-([a-z])/, function (x) {return '-' + x[1].toUpperCase()});
}



export {
    formatFecha
}