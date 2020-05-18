// рисование круга и звездочки
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'),
         angle = (degrees = 360) => (Math.PI/180) * degrees,
         angle2 = (degrees = 20) => (Math.PI/180) * degrees,
         angle3 = (degrees = 90) => (Math.PI/180) * degrees,
         angle4 = (degrees = 350) => (Math.PI/180) * degrees,
         angle5 = (degrees = 340) => (Math.PI/180) * degrees;

// черный
ctx.beginPath();
ctx.moveTo(360, 100);
ctx.arc(280, 100, 80, 0, angle(), false);
ctx.lineWidth = '12';
ctx.strokeStyle = '#000';
ctx.stroke(); 
// розовый 
ctx.beginPath();
ctx.restore();
ctx.moveTo(540, 100);
ctx.arc(460, 100, 80, 0, angle(), false);
ctx.lineWidth = '12';
ctx.strokeStyle = '#ec324d';
ctx.stroke(); 
// зеленый
ctx.beginPath();
ctx.moveTo(455, 190);
ctx.arc(380, 190, 80, 0, angle(), false);
ctx.lineWidth = '12';
ctx.strokeStyle = '#1b8a3b';
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(425, 175);
ctx.arc(460, 100, 80, 2, angle5(), true);
ctx.lineWidth = '12';
ctx.strokeStyle = '#ec324d';
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(320, 170);
ctx.arc(280, 100, 80, 1, angle4(), true);
ctx.lineWidth = '12';
ctx.strokeStyle = '#000';
ctx.stroke(); 
// желтый 
ctx.beginPath();
ctx.moveTo(269, 190);
ctx.arc(190, 178, 80, 0, angle(), false);
ctx.lineWidth = '12';
ctx.strokeStyle = '#fbb132';
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(250, 169);
ctx.arc(280, 100, 80, 2, angle3(), true);
ctx.lineWidth = '12';
ctx.strokeStyle = '#000';
ctx.stroke(); 
// синий
ctx.beginPath();
ctx.arc(100, 100, 80, 0, angle(), false);
ctx.lineWidth = '12';
ctx.strokeStyle = '#0884c1';
ctx.save();
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(140, 120);
ctx.arc(190, 178, 80, 4, angle2(), true);
ctx.lineWidth = '12';
ctx.strokeStyle = '#fbb132';
ctx.stroke(); 

// рисование с помощю мыши
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const color = document.getElementById('color');
const input = document.getElementById('line'),
    clear = document.querySelector('button');

color.addEventListener('input', () => ctx2.strokeStyle = color.value);
input.addEventListener('input', () => ctx2.lineWidth = input.value);

canvas2.addEventListener('mousemove', (event) => {
const x = event.offsetX,
y = event.offsetY,
mx = event.movementX,
my = event.movementY;

if (event.buttons > 0){
    ctx2.beginPath();
    ctx2.lineCap = 'round';
    ctx2.moveTo(x, y);
    ctx2.lineTo(x - mx, y - my);
    ctx2.stroke();
    ctx2.closePath();
};
});
clear.addEventListener('click', () => ctx2.clearRect(0, 0, canvas2.clientWidth, canvas2.height));