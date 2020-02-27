var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var WIDTH = 600;
var HEIGHT = 400;

var x,y;
var mx,my;

var mycolor = "rgb(255,255,255)";

var x2,y2;
var mx2,my2;

var mycolor2 = "rdb(255,255,255)";

var x3,y3;
var mx3,my3;

var mycolor3 = "rdb(255,255,255)";

function init(){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;
	x2 = 200;
	y2 = 300;
	mx2 = 4;
	my2 = 3;
	x3 = 400;
	y3 = 100;
	mx3 = 3;
	my3 = 5;
	return setInterval(draw,10);
}

function circle(x,y,r,color){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = color;
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function randomColour(){
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	return "rgb(" + r + "," + g + "," + b + ")";
}

function draw(){
	clear();
	circle(x,y,30,mycolor);

	if(x+mx < 0 || x+mx > WIDTH){
		mx =- mx;
		mycolor = randomColour();
	}

	if(y+my < 0 || y+my > HEIGHT){
		my =- my;
		mycolor = randomColour();
	}

	x += mx;
	y += my; 

	circle(x2,y2,30,mycolor2);

	if(x2+mx2 < 0 || x2+mx2 > WIDTH){
		mx2 =- mx2;
		mycolor2 = randomColour();
	}

	if(y2+my2 < 0 || y2+my2 > HEIGHT){
		my2 =- my2;
		mycolor2 = randomColour();
	}

	x2 += mx2;
	y2 += my2; 

	circle(x3,y3,30,mycolor3);

	if(x3+mx3 < 0 || x3+mx3 > WIDTH){
		mx3 =- mx3;
		mycolor3 = randomColour();
	}

	if(y3+my3 < 0 || y3+my3 > HEIGHT){
		my3 =- my3;
		mycolor3 = randomColour();
	}

	x3 += mx3;
	y3 += my3; 
}

init();