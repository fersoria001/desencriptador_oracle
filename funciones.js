var desencriptado = document.querySelector("#texto");
            
function encriptar()
{
    var mensaje = desencriptado.value;
    mensaje = mensaje.toString().split("");
    let i = 0;
    let encriptado = [];
    while(i<mensaje.length)
    {   
        
        switch(mensaje[i])
        {
            case "e":
                encriptado.push("enter");
                break;
            case "i":
                encriptado.push("imes");
                break;
            case "a":
                encriptado.push("ai");
                break;
            case "o":
                encriptado.push("ober");
                break;
            case "u":
                encriptado.push("ufat");
                break;
            default:
                encriptado.push(mensaje[i]);
                break;
        }
    i++;
};
var encriptade = encriptado.join("")
return encriptade;
}

    var encriptar_btn;
    encriptar_btn = document.querySelector("button");
    encriptar_btn.onclick = inicio;
    function inicio()
    {
        var encripto = encriptar();
        document.getElementById('salida_uno').innerHTML = "<br>" + encripto + "<br>";
    };

    
var t_encriptado = document.querySelector("#texto");
function desencriptar()
{
    var mensaje = t_encriptado.value;
    mensaje = mensaje.toString()
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
var desencriptade = mensaje;
return desencriptade;
}

var desencriptar_btn;
desencriptar_btn = document.querySelector("#desencriptar");
desencriptar_btn.onclick = inicio_d;
function inicio_d()
{
    var desencripto = desencriptar();
    document.getElementById('salida_uno').innerHTML = "<br>" + desencripto + "<br>";
};