var realLevel=0;

function startTimer(duration)
{
    let timer = duration;
    let countdown = setInterval(function(){
        if(--timer < 0){
            clearInterval(countdown);
            changeColorOfDivs();
        }
    }, 1000); // Change interval to 1000 milliseconds (1 second)
}

function changeColorOfDivs() {
    let cubes = document.querySelectorAll('.grid-item');
    cubes.forEach(cube => {
        cube.style.backgroundColor = "grey";
    });
}

function newLevel(currentLevel,cubes,numberOfCubes,trueCubes,numberLives) 
{   
    ///increase the number of cubes to 16
    if(currentLevel===4){
        numberOfCubes=16;
    for(let i=10;i<=16;i++)
        {
            document.querySelectorAll('.grid-item').forEach(grid =>{
                grid.style.padding="60px";
            });
            document.getElementById('cube' + i).style.display='block';
        }
    }
    ///increase the number of cubes to 25
    if(currentLevel===8){
        numberOfCubes=25;
    for(let i=17;i<=25;i++)
        {
            document.querySelectorAll('.grid-item').forEach(grid =>{
                grid.style.padding="50px";
            });
            document.getElementById('cube' + i).style.display='block';
        }
    }

        ///set the current level
    document.getElementById("level").textContent=currentLevel;

    // Make the Start Game Button disappear

    let startGameScreen=document.getElementById("startGame");
    startGameScreen.style.zIndex="-1";

    // Change background color of all cubes to grey
    for (let i = 1; i <= numberOfCubes; i++) {
        const cube = document.getElementById('cube' + i);
        cube.style.backgroundColor = "grey";
    }
    // variables
    let correctGuesses=0;
    let ok=0;

    // Select five random cubes and change their background color to blue
    for (let i = 0; i < trueCubes; i++) {
        let ok = false;
        while (!ok) {
            const randomNumber = Math.floor(Math.random() * numberOfCubes) + 1;
            if (cubes[randomNumber - 1] == 0) {
                cubes[randomNumber - 1] = 1;
                const cube = document.getElementById('cube' + randomNumber);
                cube.style.transition = 'background-color 0.4s ease';
                cube.style.backgroundColor = "blue";
                ok = true;
            }
        }
    }
    ///console log
    console.log('new one');
    console.log(numberOfCubes);
    for(let i=0;i<numberOfCubes;i++){
        console.log(cubes[i] + ' ');
    }
    startTimer(1);
    setTimeout(function() {
    
        document.querySelectorAll('.grid-item').forEach(cube => {
            cube.addEventListener('click', function() {
                const index = parseInt(cube.id.substring(4)) - 1;

                // Check if the cube is marked (blue)
            if(realLevel===currentLevel){
                console.log('You clicked on ' + cubes[index] + ' ');
                if (cubes[index] === 1 ) {
                    correctGuesses++;
                    cube.style.transition = 'background-color 0.1s';
                    cube.style.backgroundColor = "green";
                    cube.classList.add('non-clickable');
                    ///100
                    if(correctGuesses===trueCubes)
                        {
                        cube.style.transition = 'background-color 0.1s';
                        cube.style.backgroundColor = "green";
                        ok=1;
                        ///next level
                            setTimeout(function(){
                           
                            for (let i = 0; i < numberOfCubes; i++) {
                                cubes[i]=0;
                                document.getElementById('cube'+(i+1)).classList.remove('non-clickable');
                                
                            }
                            realLevel++;
                            newLevel(currentLevel+1,cubes,numberOfCubes,trueCubes+1,numberLives);
                            
                            },500);
                            
                            
                        }
                    
                }
                else if(ok!=1) {
                    if(numberLives===3){
                        document.querySelector(".heart3").src="images/noHeart.png";
                        document.querySelector(".heart3").classList.add('shake');
                    }
                    else{
                        document.querySelector(".heart2").src="images/noHeart.png";
                        document.querySelector(".heart2").classList.add('shake');
                    }
                     numberLives--;
                     console.log(numberLives);
                     ///red 
                     cube.classList.add('shake');
                     cube.style.transition = 'background-color 0.1s';
                    cube.style.backgroundColor = "red";
                    

                    if(numberLives<1)
                        {
                            document.querySelector(".heart1").src="images/noHeart.png";
                            document.querySelector(".heart1").classList.add('shake');

                            for (let i = 0; i < numberOfCubes; i++) 
                            {
                                cubes[i]=0;
                            }
                            setTimeout(function(){
                                window.location.reload();
                            },1000);
                           ///end of the game 
                         
                           
                        }
                }
            }
            });
        });
    }, 2000);
}

function startGame()
{
    let startGameScreen=document.getElementById("startGame");
    startGameScreen.style.zIndex="-1";

    realLevel=1;
    var numberLives=3;
    var cubes=new Array(30).fill(0);
    var numberOfCubes=9;
    var trueCubes=3;

    newLevel(1,cubes,numberOfCubes,trueCubes,numberLives);
}
            