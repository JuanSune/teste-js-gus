function carregar(){
    var inumb = document.getElementById('inumber').value;

    var fnumb = document.getElementById('fnumber').value;

    var pnumb = document.getElementById('pnumber').value;
 
    var Contador = document.getElementById('contador');

    var house1 = new Array(3);

    house1[0] = inumb;
    house1[1] = fnumb;
    house1[2] = pnumb;

    house1.forEach(numberCheck);
}

function numberCheck(i){ 
    if(i == 0 || i == null)
    {
        alert('Verifique as informações');
    }
    else
    {
        alert('Deu tudo certo');
    }
}