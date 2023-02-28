var item = document.querySelectorAll('.pole');

let mass = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]];
let field = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]

let total_score = 0;

function genField(){
    let num = 2;
    let i = getRandomInt(0, 4);
    let j = getRandomInt(0, 4);
    while (true){
        if (field[i][j] != 1){
            i = getRandomInt(0, 4);
            j = getRandomInt(0, 4);
        }
        else{
            field[i][j] = num;
            item[mass[i][j]].innerHTML = '<span>2</span>';
            console.log('ready');
            break;
        }

    }
}
genField();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function moveRight(){
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            try{
                if(field[i][j + 1] == field[i][j] && field[i][j] != 1){
                    field[i][j] = 1;
                    item[((j+1)+4*i - 1)].innerHTML = '';
                    item[((j+1)+4*i)].innerHTML = `<span>${field[i][j + 1] * 2}</span>`;
                    field[i][j + 1] *= 2;
                }
                else if(field[i][j + 1] == 1 && field[i][j] != 1){
                    field[i][j + 1] = field[i][j];
                    field[i][j] = 1;
                    item[((j+1)+4*i - 1)].innerHTML = '';
                    item[((j+1)+4*i)].innerHTML = `<span>${field[i][j + 1]}</span>`;
                }
            }
            catch(error){
                console.log(error);
            }
        }
    }  
}
function moveLeft(){
    for(let i = 3; i >= 0; i--){
        for(let j = 3; j >= 0; j--){
            try{
                if(field[i][j] != 1 && field[i][j] == field[i][j - 1]){
                    field[i][j] = 1;
                    item[((j+1)+4*i - 1)].innerHTML = '';
                    item[((j+1)+4*i - 2)].innerHTML = `<span>${field[i][j - 1] * 2}</span>`;
                    field[i][j - 1] *= 2;
                }
                else if(field[i][j] != 1 && field[i][j - 1] == 1){
                    field[i][j - 1] = field[i][j];
                    field[i][j] = 1;
                    item[((j+1)+4*i - 1)].innerHTML = '';
                    item[((j+1)+4*i - 2)].innerHTML = `<span>${field[i][j - 1]}</span>`;
                }
            }
            catch(error){
                console.log(error);
            }
        }
    }
}
function moveUp(){
    for(let i = 3; i >= 0; i--){
        for(let j = 3; j >= 0; j--){
            try{
                if(field[i][j] != 1 && field[i][j] == field[i-1][j]){
                    field[i][j] = 1;
                    item[((j+1)+4*i - 1)].innerHTML = '';
                    item[((j+1)+4*i - 5)].innerHTML = `<span>${field[i-1][j] * 2}</span>`;
                    field[i-1][j] *= 2;
                }
                else if(field[i][j] != 1 && field[i-1][j] == 1){
                    field[i-1][j] = field[i][j];
                    field[i][j] = 1;
                    item[((j+1)+4*i - 1)].innerHTML = '';
                    item[((j+1)+4*i - 5)].innerHTML = `<span>${field[i-1][j]}</span>`;
                }
            }
            catch(error){
                console.log(error);
            }
        }
    }
}
function moveDown(){
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            try{
                if(field[i][j] != 1 && field[i][j] == field[i+1][j]){
                    field[i][j] = 1;
                    item[((j+1)+4*i - 1)].innerHTML = '';
                    item[((j+1)+4*i + 3)].innerHTML = `<span>${field[i+1][j] * 2}</span>`;
                    field[i+1][j] *= 2;
                }
                else if(field[i][j] != 1 && field[i+1][j] == 1){
                    field[i+1][j] = field[i][j];
                    field[i][j] = 1;
                    item[((j+1)+4*i - 1)].innerHTML = '';
                    item[((j+1)+4*i + 3)].innerHTML = `<span>${field[i+1][j]}</span>`;
                }
            }
            catch(error){
                console.log(error);
            }
        }
    }
}
let ball = document.getElementById('ball');
document.addEventListener('keyup', (ev)=>{
    if(ev.key === 'w' || ev.key === 'ц' || ev.key === 'W' || ev.key === 'Ц' || ev.key === 'ArrowUp'){
        animation(3);
        for(let i = 0; i < 3; i++){
           moveUp(); 
        }
        genField();
        score();
    }
    else if(ev.key === 's' || ev.key === 'ы' || ev.key === 'S' || ev.key === 'Ы' || ev.key === 'ArrowDown'){
        animation(2);
        for(let i = 0; i < 3; i++){
            moveDown();
        }
        genField();
        score();
    }
    else if(ev.key === 'a' || ev.key === 'ф' || ev.key === 'A' || ev.key === 'Ф' || ev.key === 'ArrowLeft'){
        animation(1);
        for(let i = 0; i < 3; i++){
            moveLeft();
        }
        genField();
        score();
    }
    else if(ev.key === 'd' || ev.key === 'в' || ev.key === 'D' || ev.key === 'В' || ev.key === 'ArrowRight'){
        animation(0);
        for(let i = 0; i < 3; i++){
            moveRight();
        }
        genField();
        score();
    }
})

function animation(rotate){
    if(rotate == 0){
        ball.style.top = '50%';
        ball.style.left = '50%';
    }
    if(rotate == 1){
        ball.style.top = '50%';
        ball.style.left = '50%';
    }
    if(rotate == 2){
        ball.style.top = '50%';
        ball.style.left = '50%';
    }
    if(rotate == 3){
        ball.style.top = '50%';
        ball.style.left = '50%';
    }
}
document.addEventListener('keydown', (ev)=>{
    if(ev.key === 'w' || ev.key === 'ц' || ev.key === 'W' || ev.key === 'Ц' || ev.key === 'ArrowUp'){
       ball.style.top = '0';
       ball.style.left = '50%';
    }
    else if(ev.key === 's' || ev.key === 'ы' || ev.key === 'S' || ev.key === 'Ы' || ev.key === 'ArrowDown'){
        ball.style.top = '100%';
        ball.style.left = '50%';
    }
    else if(ev.key === 'a' || ev.key === 'ф' || ev.key === 'A' || ev.key === 'Ф' || ev.key === 'ArrowLeft'){
        ball.style.top = '50%';
        ball.style.left = '0';
    }
    else if(ev.key === 'd' || ev.key === 'в' || ev.key === 'D' || ev.key === 'В' || ev.key === 'ArrowRight'){
        ball.style.top = '50%';
        ball.style.left = '100%';
    }
})
function score(){
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(field[i][j] != 1){
                total_score += field[i][j];
            }
        }
    }
    document.getElementById('score').innerHTML = `Score: ${total_score}`;
}
