


let RecargarDatos = function() { 
    let dietasCargadas = JSON.parse(localStorage.getItem('dietas'));
    console.log(dietasCargadas)
for (let i = 0 ; i < 90 ; i ++) {}
    switch (dietasCargadas[i].dietaseleccionada) {
        case 'Liviana sin sal/cortado' :
            console.log("pediatiraSinSal")
           for (let a = 0; i<dietasCargadas.length; a++) {
               console.log(a)
            } 
            break;
        case 'General c/p. blando':
            console.log("General c/p. blando")
            break;
        case 'General cortado':
            console.log("General cortado")
            break;
        case 'Renal':
            console.log("pediatiraSinSal")
            break;
        case 'Liviana sin sal c/p. blando':
            console.log("Liviana sin sal c/p. blando")
            break;
        case 'Liviana sin sal/cortado':
            console.log("Liviana sin sal/cortado")
            break;
        case 'Blando':
            console.log("Blando")
            break;
        case 'Blando con pollo':
            console.log("Blando con pollo")
            break;
        case 'Astingente':
            console.log("Astingente")
            break;
        case 'DBT':
            console.log("DBT")
            break;
        case 'Liquado':
            console.log("Liquado")
            break;
        case 'Liquido':
            console.log("Liquido")
            break;
        default:
                console.log("no hay dietas cargadas")
        }}