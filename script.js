let pontosB = 0;
let pontosP = 0;

function start(n)
{
    let pedra = document.querySelector('.pe');
    let papel = document.querySelector('.pa');
    let tesoura = document.querySelector('te');
    let scoreBot = document.querySelector('.scoreBot');
    let scorePlayer = document.querySelector('.scorePlayer');
    let decision = document.querySelector('.decision');
    let lista = [pedra, papel, tesoura];
    let rival = lista[Math.floor(Math.random() * lista.length)];
    

    if (n === 1) //Pedra
    {
        switch (rival)
        {
            case pedra:
                document.querySelector('.pe').style.color = "black";
                decision.innerHTML = 'Empate';
                pontosB++;
                pontosP++;
                scoreBot.innerHTML = `Maquina: ${pontosB}`;
                scorePlayer.innerHTML = `Você: ${pontosP}`;
            break;
            case papel:
                document.querySelector('.pa').style.color = "black";
                decision.innerHTML = 'Perdeu!';
                pontosB++;
                scoreBot.innerHTML = `Maquina: ${pontosB}`;
            break;
            case tesoura:
                document.querySelector('.te').style.color = "black";
                decision.innerHTML = 'Ganhou!';
                pontosP++;
                scorePlayer.innerHTML = `Você: ${pontosP}`;
            break;
        }
        setTimeout(clean, 1200);
    } 
    else if (n === 2) //Papel
    {
        switch (rival)
        {
            case pedra:
                document.querySelector('.pe').style.color = "black";
                decision.innerHTML = 'Ganhou!';
                pontosP++;
                scorePlayer.innerHTML = `Você: ${pontosP}`;
            break;
            case papel:
                document.querySelector('.pa').style.color = "black";
                decision.innerHTML = 'Empate';
                pontosB++;
                pontosP++;
                scoreBot.innerHTML = `Maquina: ${pontosB}`;
                scorePlayer.innerHTML = `Você: ${pontosP}`;
            break;
            case tesoura:
                document.querySelector('.te').style.color = "black";
                decision.innerHTML = 'Perdeu!';
                pontosB++;
                scoreBot.innerHTML = `Maquina: ${pontosB}`;
            break;
        }
        setTimeout(clean, 1200);
    }
    else if (n === 3) //Tesoura
    {
        switch (rival)
        {
            case pedra:
                document.querySelector('.pe').style.color = "black";
                decision.innerHTML = 'Perdeu!';
                pontosB++;
                scoreBot.innerHTML = `Maquina: ${pontosB}`;
            break;
            case papel:
                document.querySelector('.pa').style.color = "black";
                decision.innerHTML = 'Ganhou!';
                pontosP++;
                scorePlayer.innerHTML = `Você: ${pontosP}`;
            break;
            case tesoura:
                document.querySelector('.te').style.color = "black";
                decision.innerHTML = 'Empate';
                pontosB++;
                pontosP++;
                scoreBot.innerHTML = `Maquina: ${pontosB}`;
                scorePlayer.innerHTML = `Você: ${pontosP}`;
            break;
        }
        setTimeout(clean, 1200);
    }

}

function clean (){
    document.querySelector('.pe').style.color = 'transparent';
    document.querySelector('.pa').style.color = 'transparent';
    document.querySelector('.te').style.color = 'transparent';
}