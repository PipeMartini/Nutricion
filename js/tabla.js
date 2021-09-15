

obtenerLocalstorage(); 

    function obtenerLocalstorage (){

        let dietaEnTabla =JSON.parse (localStorage.getItem("dietas")) ;
    
    console.log (dietaEnTabla);      
    }
//    let obtenerLocalstorage = function(){
//        let dietaEnTabla = localStorage.getItem("dietas") ;
//        console.log (dietaEnTabla);
//    }
