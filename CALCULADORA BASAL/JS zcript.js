let calcular = document.getElementById('calcular');
const error = document.getElementById("error");


calcular.addEventListener("click", () => {
    let dato = document.getElementById("peso").value;
    if (dato.value === "") {
        error.style.display = "block"
        return;
    }
    console.log(dato)
    error.style.display = 'none'
    let vol1 = 0
    let vol2 = 0
    if (dato > 30) {
        vol1 = superficiecorporal() * 1500
        vol2 = superficiecorporal() * 2000
        console.log(vol1);

    } else {
        hollidaysegar()
    }
});
function superficiecorporal() {
    let Superficiecorporal = ((peso * 4) + 7) / (peso + 90)
    return Superficiecorporal
}

function  hollidaysegar (peso){
    if (peso<10){
        console.log(peso*100)
    }
    else
     if(peso<20){
        consult.log(peso=.20*50)
    }
    else if(peso<20){
        consult.log(peso*20)
    }
}