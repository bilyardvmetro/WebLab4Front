/*
30, тк одна клетка на канвасе - квадрат 30х30 пикселей.
30*2, тк за еденицу измерения взял 2 клетки координатной плоскости
ширина канваса 600х660 пикселей, из которых 30 по ширине и 30 по высоте - отступ от координатной оси
*/
function drawAxis(canvas, ctx) {
    // oX
    ctx.beginPath();
    ctx.moveTo(30, canvas.height / 2);
    ctx.lineTo(canvas.width - 30, canvas.height / 2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // oY
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 30);
    ctx.lineTo(canvas.width / 2, canvas.height - 30);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawGrid(canvas, ctx) {
    ctx.beginPath();
    for (let x = 0; x < 690; x += 30) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = '#427aa1';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    for (let y = 0; y < 690; y += 30) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = '#427aa1';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

function drawCircle(canvas, ctx, r = 5) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.fillStyle = '#8ba9f0';
    ctx.arc(canvas.width / 2, canvas.height / 2, 30 * 2 * (r / 2), 0, -Math.PI * 0.5, true);
    ctx.closePath();
    ctx.fill();
}

function drawRect(canvas, ctx, r = 5) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.fillStyle = '#8ba9f0';
    ctx.rect(canvas.width / 2, canvas.height / 2, 30 * 2 * r, 30 * 2 * (r / 2));
    ctx.closePath();
    ctx.fill();
}

function drawTriangle(canvas, ctx, r = 5) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.fillStyle = '#8ba9f0';
    ctx.lineTo(canvas.width / 2 - 30 * 2 * r, canvas.height / 2);
    ctx.lineTo(canvas.width / 2, canvas.height / 2 + 30 * 2 * r);
    ctx.closePath();
    ctx.fill();
}

function drawCoords(canvas, ctx, r = 5) {
    ctx.fillStyle = 'black';
    ctx.font = '1.5em Montserrat';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';

    // oX +
    ctx.fillText('R/2', canvas.width / 2 + 30 * 2 * (r / 2), canvas.height / 2);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + 30 * 2 * (r / 2), canvas.height / 2 - 10);
    ctx.lineTo(canvas.width / 2 + 30 * 2 * (r / 2), canvas.height / 2 + 10);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();

    ctx.fillText('R', canvas.width / 2 + 30 * 2 * r, canvas.height / 2);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + 30 * 2 * r, canvas.height / 2 - 10);
    ctx.lineTo(canvas.width / 2 + 30 * 2 * r, canvas.height / 2 + 10);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();

    // oX -
    ctx.fillText('-R/2', canvas.width / 2 - 30 * 2 * (r / 2), canvas.height / 2);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 30 * 2 * (r / 2), canvas.height / 2 - 10);
    ctx.lineTo(canvas.width / 2 - 30 * 2 * (r / 2), canvas.height / 2 + 10);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();

    ctx.fillText('-R', canvas.width / 2 - 30 * 2 * r, canvas.height / 2);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 30 * 2 * r, canvas.height / 2 - 10);
    ctx.lineTo(canvas.width / 2 - 30 * 2 * r, canvas.height / 2 + 10);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();

    ctx.textAlign = 'left';

    // oY -
    ctx.beginPath();
    ctx.fillText('-R/2', canvas.width / 2, canvas.height / 2 + 30 * 2 * (r / 2));
    ctx.moveTo(canvas.width / 2 - 10, canvas.height / 2 + 30 * 2 * (r / 2));
    ctx.lineTo(canvas.width / 2 + 10, canvas.height / 2 + 30 * 2 * (r / 2));
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillText('-R', canvas.width / 2, canvas.height / 2 + 30 * 2 * r);
    ctx.moveTo(canvas.width / 2 - 10, canvas.height / 2 + 30 * 2 * r);
    ctx.lineTo(canvas.width / 2 + 10, canvas.height / 2 + 30 * 2 * r);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();

    // oY +
    ctx.beginPath();
    ctx.fillText('R/2', canvas.width / 2, canvas.height / 2 - 30 * 2 * (r / 2));
    ctx.moveTo(canvas.width / 2 - 10, canvas.height / 2 - 30 * 2 * (r / 2));
    ctx.lineTo(canvas.width / 2 + 10, canvas.height / 2 - 30 * 2 * (r / 2));
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillText('R', canvas.width / 2, canvas.height / 2 - 30 * 2 * r);
    ctx.moveTo(canvas.width / 2 - 10, canvas.height / 2 - 30 * 2 * r);
    ctx.lineTo(canvas.width / 2 + 10, canvas.height / 2 - 30 * 2 * r);
    ctx.strokeStyle = 'black';
    ctx.closePath();
    ctx.stroke();
}

function drawCanvas(canvas, ctx, r) {
    drawCircle(canvas, ctx, r);
    drawRect(canvas, ctx, r);
    drawTriangle(canvas, ctx, r);
    drawGrid(canvas, ctx);
    drawAxis(canvas, ctx);
    drawCoords(canvas, ctx, r);
}

export function initCanvas(r = 5) {
    const canvas = document.getElementById('coordinate-plane');
    const ctx = canvas.getContext('2d');

    canvas.width = 660;
    canvas.height = 660;

    drawCanvas(canvas, ctx, r)
}

export function updateCanvas(r) {
    const canvas = document.getElementById('coordinate-plane');
    canvas.getContext('2d').clearRect(0, 0, 660, 660)
    initCanvas(r)
}

export function drawDot(x, y, color) {
    const canvas = document.getElementById('coordinate-plane');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    let plotX = x * (30 * 2);
    let plotY = -y * (30 * 2);

    ctx.arc(plotX, plotY, 4, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.resetTransform();
    ctx.closePath()
}
