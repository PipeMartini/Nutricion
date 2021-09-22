//              dietasrecibidas[0].area    para llamar al array traido del local storage. [0] llama al primer valor

let traerDatos = function () {
    let dietasrecibidas = JSON.parse(localStorage.getItem('dietas'));
    dietasrecibidas.sort((a, b) =>{
        const areaA = a.area.toLowerCase();
        const areaB = b.area.toLowerCase();
        if (areaA < areaB){
            return -1;
        }
        if (areaA > areaB){
            return 1;
        }
        return 0;
    });
    dietasrecibidas.sort((c, d) =>{
        const ncamaC = c.ncama.toLowerCase();
        const ncamaD = d.ncama.toLowerCase();
        if (ncamaC < ncamaD){
            return -1;
        }
        if (ncamaC > ncamaD){
            return 1;
        }
        return 0;
    });
    let html_content = '';
    
    for (let i = 0 ; i < dietasrecibidas.length ; i ++) {
            html_content += `
                    <tr class="col-12">
                        <th scope="row">${dietasrecibidas[i].area}</th>
                        <td>${dietasrecibidas[i].subarea}</td>
                        <td>${dietasrecibidas[i].ncama}</td>
                        <td>${dietasrecibidas[i].pnombre}</td>
                        <td>${dietasrecibidas[i].papellido}</td>
                        <td>${dietasrecibidas[i].dietaseleccionada}</td>
                        <td>${dietasrecibidas[i].descartable}</td>
                    </tr>
            `            
    }
    document.getElementById("Tablasfull").innerHTML = html_content;
};
        

//document.getElementById("Tablasfull").innerHTML = dietasrecibidas
//document.setElementById("Tablasfull").innerHTML = traerDatos
//
//
//let dietasTraidas = JSON.parse(localStorage.getItem('dietas'));
//
//let traerDatos = function (){
//    dietasTraidas.forEach(elementos=>{
//        document.getElementById("Tablasfull").innerHTML =
//            `<tr class="col-12">
//                    <th scope="row">${elementos.area}</th>
//                    <td>${elementos.subarea}</td>
//                    <td>${elementos.ncama}</td>
//                    <td>${elementos.pnombre}</td>
//                    <td>${elementos.papellido}</td>
//                    <td>${elementos.dietaseleccionada}</td>
//                    <td>${elementos.descartable}</td>
//                    <td>${elementos.descartable}</td>
//            </tr>`
//            });
//        }

////              dietasrecibidas[0].area    para llamar al array traido del local storage. [0] llama al primer valor
//
//let traerDatos = function () {
//    let dietasrecibidas = JSON.parse(localStorage.getItem('dietas'));
//    let html_content = '';
//    
//    for (let i = 0 ; i < dietasrecibidas.length ; i ++) {
////        if (dietasrecibidas[i].area == 'Pediatria'){
//            html_content += `
//                    <tr class="col-12">
//                        <th scope="row">${dietasrecibidas[i].area}</th>
//                        <td>${dietasrecibidas[i].subarea}</td>
//                        <td>${dietasrecibidas[i].ncama}</td>
//                        <td>${dietasrecibidas[i].pnombre}</td>
//                        <td>${dietasrecibidas[i].papellido}</td>
//                        <td>${dietasrecibidas[i].dietaseleccionada}</td>
//                        <td>${dietasrecibidas[i].descartable}</td>
//                    </tr>
//            `            
// //       }
//    }
//    document.getElementById("Tablasfull").innerHTML = html_content;
//};
     