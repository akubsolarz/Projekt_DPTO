let win =  0;
let los = 0;
let tie = 0;

let game = 0;
let maxs = 5;

function start(Plewyb){

    const wyb = ['rock', 'paper', 'scissors'];
    const IAwyb = wyb[Math.floor(Math.random() *3)];

    if(Plewyb === IAwyb){
        tie++;
    }
    else if(
        (Plewyb === 'rock' && IAwyb === 'scissors') ||
        (Plewyb === 'scissors' && IAwyb === 'paper') ||
        (Plewyb === 'paper' && IAwyb === 'rock'))   
    {
        win++;
    }else{
        los++;
    }
    
    if(Plewyb === 'rock'){
    document.getElementById('Playerimg').src = 'img/rock.png';
    }else if(Plewyb === 'scissors'){
    document.getElementById('Playerimg').src = 'img/scissors.png';
    }else{
    document.getElementById('Playerimg').src = 'img/papper.png';
    }

    if(IAwyb === 'rock'){
    document.getElementById('PCimg').src = 'img/rock.png';
    }else if(IAwyb === 'scissors'){
    document.getElementById('PCimg').src = 'img/scissors.png';
    }else{
    document.getElementById('PCimg').src = 'img/papper.png';
    }

    game++;

    document.getElementById('won').textContent = win;
    document.getElementById('los').textContent = los;
    document.getElementById('tie').textContent = tie;

    if(game === maxs){
        if(win > los){
            document.getElementById('zwy').textContent = 'wygrałeś';
            return
        }else if(los > win){
            document.getElementById('zwy').textContent = 'przegrałeś';
        return;
        }else{
            document.getElementById('zwy').textContent = 'remis';
            return;
        }
    }

}