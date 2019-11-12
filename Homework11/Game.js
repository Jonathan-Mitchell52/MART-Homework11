       var x = 50;
    var y = 50;
    var diameter = 25;
    var mousex = 0;
    var mousey = 0;
    function setup() 
    {
      createCanvas(800, 600);
	movement = Math.floor(Math.random() *10) + 1;
	movement2 = Math.floor(Math.random() *10) +1;
    }

    function draw() 
    {
      background(0);
      fill(24, 200, 29);
      circle(x, y, diameter);
    
      if (x >= 300) 
      {
        x = 50;
      }

      if (keyIsDown(83)) 
      {
        y += 10;
      } 
      else if (keyIsDown(87)) 
      {
        y -= 10;
      }

      if (y >= 300) 
      {
        y = 50;
      }

     
      }

   function obstacles()
{
	fill(200,50,29);
	rect(30,60,300,300);
	circle(30,30,30,30);
}

    function keyPressed() 
    {
      if (key == 'd') 
      {
        x += 10;
      } 
      else if (key == 'a') 
      {
        x -= 10;
      }
    }

    function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }