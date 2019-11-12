      	var x = 50;
    	var y = 50;
	var a= 320;
	var b= 250;
	var c= 450;
	var d= 450;
    var diameter = 50;
    var mousex = 0;
    var mousey = 0;
    function setup() 
    {
      createCanvas(800, 600);
	movement = Math.floor(Math.random() *10) + 1;
	movement2 = Math.floor(Math.random() *10) +1;
	movement3 = Math.floor(Math.random() *10) + 1;
	movement4 = Math.floor(Math.random() *10) +1;
    }

    function draw() 
    {
      background(0);
      fill(24, 200, 29);
      circle(x, y, diameter);
    
      if (x >= 850) 
      {
        x = 50;
      } else 
	if (keyIsDown(83)) 
      {
        y += 10;
      } 
      else if (keyIsDown(87)) 
      {
        y -= 10;
      }
  	if (keyIsDown(68)) 
      {
        x += 10;
      } 
      else if (keyIsDown(65)) 
      {
        x -= 10;
      }
	
      if (y >= 650) 
      {
        y = 50;
      }
	if (x<0)
	{	
		x=25;
	}
     	if (y<0)
	{	
		y=25;
	}
	fill(255, 204, 0);
	rect(c,d,100,110);
	fill(color(0, 0, 255));
	circle(a,b,120);
	if(a >= 1000 || a <= -100)
	{
		movement *= -1;
	}
	
	if(b >= 800 || b <= -100)
	{
		movement2 *= -1;
	}
	b += movement2;
	a += movement;

	if(c >= 1000 || c <= -100)
	{
		movement3 *= -1;
	}
	
	if(d >= 800 || d <= -100)
	{
		movement4 *= -1;
	}
	d += movement4;
	c += movement3;
	if(a>900)
	{ 
		a=1;
	}
	if(a<-100)
	{ 
		a=800;
	}
	if(b>700)
	{ 
		b=1;
	}
	if(b<-100)
	{ 
		b=600;
	}

	if(c>900)
	{ 
		c=1;
	}
	if(c<-100)
	{ 
		c=800;
	}
	if(d>700)
	{ 
		d=1;
	}
	if(d<-100)
	{ 
		d=600;
	}
		fill('#fae');
	   	ellipse(mousex, mousey, 30, 75);
	if (x> 700 && x<800 && y>325 && y<375)
	{
		fill('red');
		textSize(50);
		text('You Win', 400,350);
     	 }else{
		fill('red');
		textSize(50);
		text('Exit', 700,350);
	}
	}
		



    function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }
	