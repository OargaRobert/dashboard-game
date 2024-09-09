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