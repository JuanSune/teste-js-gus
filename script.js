function carregar()
{
    var d = new Date();
    var dDia = (d.getHours()).toString();
    var textMSG = window.document.getElementById('msg');
    var obIMG = window.document.getElementById('imagem');
    var colorBack = window.document.body.style;

    dDia = 13;

    textMSG.innerText = `A hora agora é ${dDia} ou seja, é de`;

    if(dDia>4 && dDia<12)
    {
        textMSG.innerText+=` manha`;
        obIMG.src = "manha.jpg";
        colorBack.backgroundColor  ="#FA835A88";
    }
    else if(dDia>12 && dDia<19)
    {
        textMSG.innerText+=` tarde`;
        obIMG.src = "tarde.jpg";
        colorBack.backgroundColor  ="#BBAC79";       
    }
    else
    {
        textMSG.innerText+=` noite`;
        obIMG.src = "noite.jpg";
        colorBack.backgroundColor  ="#131C45";
    }
  
}