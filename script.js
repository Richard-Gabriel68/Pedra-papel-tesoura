function start(n)
{
    let pedra = document.querySelector('.pe');
    let papel = document.querySelector('.pa');
    let tesoura = document.querySelector('te');
    let scoreBot = document.querySelector('.scoreBot');
    let scorePlayer = document.querySelector('.scorePlayer');
    let lista = [pedra, papel, tesoura];
    let rival = lista[Math.floor(Math.random() * lista.length)];
    let pontosB = 0;
    let pontosP = 0;

    if (n === 1) //Pedra
    {
        switch (rival)
        {
            case pedra:
                console.log('Empate!');
                pontosB++;
                pontosP++;
                scoreBot.innerHTML = `Pontuação da Maqinha: ${pontosB}`;
                scorePlayer.innerHTML = `Sua pontuação: ${pontosP}`;
            break;
            case papel:
                console.log('Perdeu!');
                pontosB++;
                scoreBot.innerHTML = `Pontuação da Maqinha: ${pontosB}`;
            break;
            case tesoura:
                console.log('Ganhou!!');
                pontosP++;
                scorePlayer.innerHTML = `Sua pontuação: ${pontosP}`;
            break;
        }

    } 
    else if (n === 2) //Papel
    {
        switch (rival)
        {
            case pedra:
                console.log('Ganhou!');
                pontosP++;
                scorePlayer.innerHTML = `Sua pontuação: ${pontosP}`;
            break;
            case papel:
                console.log('empate');
                pontosB++;
                pontosP++;
                scoreBot.innerHTML = `Pontuação da Maqinha: ${pontosB}`;
                scorePlayer.innerHTML = `Sua pontuação: ${pontosP}`;
            break;
            case tesoura:
                console.log('Perdeu!');
                pontosB++;
                scoreBot.innerHTML = `Pontuação da Maqinha: ${pontosB}`;
            break;
        }
    }
    else if (n === 3) //Tesoura
    {
        switch (rival)
        {
            case pedra:
                console.log('Perdeu!');
                pontosB++;
                scoreBot.innerHTML = `Pontuação da Maqinha: ${pontosB}`;
            break;
            case papel:
                console.log('Ganhou!');
                pontosP++;
                scorePlayer.innerHTML = `Sua pontuação: ${pontosP}`;
            break;
            case tesoura:
                console.log('Empate!');
                pontosB++;
                pontosP++;
                scoreBot.innerHTML = `Pontuação da Maqinha: ${pontosB}`;
                scorePlayer.innerHTML = `Sua pontuação: ${pontosP}`;
            break;
        }
    }

}