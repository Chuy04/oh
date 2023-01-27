class Rectangulo{
    constructor(alto,ancho)
    {
        this.alto =alto;
        this.ancho = ancho;
    }
    calculararea(){
        return this.ancho*this.alto;
    }
}

function Hola(){
    alert("Hola");
}

function area(){
    var ancho = document.getElementById("ancho").value;
    var alto = document.getElementById("ancho").value;
    let rectangulo1 = new Rectangulo(alto,ancho);
    alert(rectangulo1.calculararea());
}

    