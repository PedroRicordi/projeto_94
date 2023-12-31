
var canvas = new fabric.Canvas('myCanvas');

ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-b.png", function(img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("bola.png", function(img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	})
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);

		document.getElementById(hd3).innerHTML="Você acertou o buraco!!!";
		document.getElementById("myCanvas").style.borderColor="Red";}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		if(ball_y >=5)
		{
			ball_y = ball_y - block_image_height;
			console.log("altura do bloco da imagem = " + block_image_height);
			console.log("quando seta para cima é pressionada, x = " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("altura do bloco da imagem = " + block_image_height);
			console.log("quando seta para baixo é pressionada, x = " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("largura do bloco da imagem = " + block_image_width);
			console.log("quando seta para esquerda é pressionada, x = " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			console.log("largura do bloco da imagem = " + block_image_width);
			console.log("quando seta para direita é pressionada, x = " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

