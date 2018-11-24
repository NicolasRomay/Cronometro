window.onload = function(){
    let crono = document.querySelector("#crono");
    let btnCambiar = document.querySelector("#cambiar");
    let btnInic = document.querySelector("#inicializar");
    let tiempo;
    localStorage.contar = (localStorage.contar || "0.0")
    //localStorage.nombre = "Antonio"
    mostrar();
    btnCambiar.addEventListener("click", cambiar)
    btnInic.addEventListener("click", resetear)
    
    function resetear(){
        localStorage.contar = "0.0";
        mostrar();
    }
    
    function cambiar(){
        if(!tiempo){
            iniciar()
        } else {
            parar();
        }
    }
    
    function iniciar(){
        tiempo = setInterval(function(){
            incremento();
            mostrar();
        }, 100)
    }
    
    function parar(){
        clearInterval(tiempo);
        tiempo = undefined;
    }
    
    function incremento(){
        localStorage.contar = +localStorage.contar + 0.1;
    }
    
    function mostrar(){
        crono.innerHTML =(+localStorage.contar).toFixed(1);
    }
    
    }