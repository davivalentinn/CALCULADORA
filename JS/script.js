function gigamega(){
    var num = parseFloat(document.form1.gigas.value);
    document.form1.resumega.value = num * 1024;
}

let arrayButton = document.querySelectorAll(".butao");
arrayButton[0].addEventListener("click",() =>{
    gigamega()
})

function quimica(){
    var pnum = parseFloat(document.form1.numato.value);
    var snum = parseFloat(document.form1.nummassa.value);
    document.form1.resut02.value = snum + pnum
}

function altura(){
    var pnum = parseFloat(document.form1.numalt.value);
    document.form1.resut03.value = pnum * 100;
}

function media(){
    var num1 = parseFloat(document.form1.num01.value);
    var num2 = parseFloat(document.form1.num02.value);
    var num3 = parseFloat(document.form1.num03.value);
    document.form1.resut04.value = ((num1+num2+num3)/3)
}