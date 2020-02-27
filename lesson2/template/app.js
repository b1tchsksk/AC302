var a = document.getElementById("one");
var ctx = a.getContext("2d");
ctx.moveTo(0,6);
ctx.lineTo(104,74);
ctx.moveTo(96,66);
ctx.lineTo(204,4);
ctx.moveTo(196,4);
ctx.lineTo(300,76);
ctx.strokeStyle = "grey";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = "#e3e3e3";
ctx.fillRect(50,100,200,140);
ctx.strokeStyle = "black";
ctx.strokeRect(40,90,220,160);
ctx.clearRect(75,125,50,50);
ctx.clearRect(150,125,50,50);

var m = document.getElementById("two");
var ctx1 = m.getContext("2d");
ctx1.fillStyle = "black";
ctx1.fillRect(0,0,300,300);
ctx1.clearRect(150,0,150,150);
ctx1.clearRect(0,150,150,150);

var o = document.getElementById("three");
var ctx2 = o.getContext("2d");
ctx2.fillStyle = "black";
ctx2.fillRect(0,0,300,300);
ctx2.clearRect(10,10,130,130);
ctx2.clearRect(160,10,130,130);
ctx2.clearRect(10,160,130,130);
ctx2.clearRect(160,160,130,130);