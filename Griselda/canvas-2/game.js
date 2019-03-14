const context = canvas.getContext('2d');
const player1 = new Player(0, 0, 100, 100, context);
const player2 = new Player(100, 100, 200, 200, context);
const bg = new Bg(x:0, y:0, width, height, context);
const bg = 




function gameLoop(){
    // context.fillStyle = 'blue';
    // context.fillRect(x: 100, y: 100, width: 100, height: 100,)


    context.clearRect(x:0, y:0, width, height);
    bg.update();
    bg2.update();
    bg.draw();
    bg2.draw();
    player1.update();
    player1.draw();
    



    window.requestAnimationFrame(gameLoop)
}

gameLoop();