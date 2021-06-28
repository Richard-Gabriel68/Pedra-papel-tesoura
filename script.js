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
    let pontosB = 0;
    let pontosP = 0;

    if (n === 1) //Pedra
    {
        switch (rival)
        {
            case pedra:
                decision.innerHTML = 'Empate';
                pontosB++;
                pontosP++;
                scoreBot.innerHTML += '  |  ';
                scorePlayer.innerHTML += '  |  ';
            break;
            case papel:
                decision.innerHTML = 'Perdeu!';
                pontosB++;
                scoreBot.innerHTML += '  |  ';
            break;
            case tesoura:
                decision.innerHTML = 'Ganhou!';
                pontosP++;
                scorePlayer.innerHTML += '  |  ';
            break;
        }

    } 
    else if (n === 2) //Papel
    {
        switch (rival)
        {
            case pedra:
                decision.innerHTML = 'Ganhou!';
                pontosP++;
                scorePlayer.innerHTML += '  |  ';
            break;
            case papel:
                decision.innerHTML = 'Empate';
                pontosB++;
                pontosP++;
                scoreBot.innerHTML += '  |  ';
                scorePlayer.innerHTML += '  |  ';
            break;
            case tesoura:
                decision.innerHTML = 'Perdeu!';
                pontosB++;
                scoreBot.innerHTML += '  |  ';
            break;
        }
    }
    else if (n === 3) //Tesoura
    {
        switch (rival)
        {
            case pedra:
                decision.innerHTML = 'Perdeu!';
                pontosB++;
                scoreBot.innerHTML += '  |  ';
            break;
            case papel:
                decision.innerHTML = 'Ganhou!';
                pontosP++;
                scorePlayer.innerHTML += '  |  ';
            break;
            case tesoura:
                decision.innerHTML = 'Empate';
                pontosB++;
                pontosP++;
                scoreBot.innerHTML += '  |  ';
                scorePlayer.innerHTML += '  |  ';
            break;
        }
    }

}