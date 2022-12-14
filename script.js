function carregar()
{
    var d = new Date();
    var dDia = (d.getHours()).toString();
    var textMSG =window.document.getElementById('msg');
    var obIMG = document


    textMSG.innerText = `A hora agora é ${dDia} ou seja, é de`;
    if(dDia>4 && dDia<12)
    {
        textMSG.innerText+=` manha`;

    }
    else if(dDia>12 && dDia<19)
    {
        textMSG.innerText+=` tarde`;
    }
    else
    {
        textMSG.innerText+=` noite`;
    }
}