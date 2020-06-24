// JavaScript source code
let cenarioImagem;
let imagemPersonagem;
//Carrega a florestinha
function setup(){
	createCanvas(windowWidth, windowHeight);
	console.log('setup');
}

//Mostra a florestinha

function draw(){
	background(200);
	circle(mouseX, mouseY, 200);
//	console.log('draw');
}

function preload(){
	cenarioImagem = loadImage("images/cenario/florest.jpg");
}

