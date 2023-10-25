function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  // Draw the white circle
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  // Draw the edge circle with gradient
  const grad = ctx.createRadialGradient(0, 0, radius - 10, 0, 0, radius);
  grad.addColorStop(0, "lightblue");
  grad.addColorStop(1, "darkblue");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fill();

  // Center circle
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";

  for (let num = 1; num <= 12; num++) {
    const ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  const now = new Date();
  let hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Hour
  hour = hour % 12;
  const hourAngle = (hour + minute / 60) * (Math.PI / 6);

  // Minute
  const minuteAngle = minute * (Math.PI / 30);

  // Second
  const secondAngle = second * (Math.PI / 30);

  drawHand(ctx, hourAngle, radius * 0.5, radius * 0.07);
  drawHand(ctx, minuteAngle, radius * 0.8, radius * 0.07);
  drawHand(ctx, secondAngle, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
