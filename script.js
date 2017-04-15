

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = canvas.width; // Number of stars

    for (i = 0; i < x; i++)
    {
      stars[i] = new Star();
    }

function draw() {

      ctx.clearRect(0,0,canvas.width,canvas.height);

      ctx.globalCompositeOperation = "lighter";

      for (var i = 0, x = stars.length; i < x; i++) {

        stars[i].move();
        stars[i].display();
        stars[i].update();

      }
    }

function Star() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.radius = Math.random();
  this.vx = Math.floor(Math.random() * 10) - 5;
  this.vy = Math.floor(Math.random() * 10) - 5;

  this.display = function() {
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(this.x, this.y,this.radius, 0, 2 * Math.PI);
    ctx.fill();
  };
  this.move = function() {
    this.x += this.vx / FPS;
    this.y += this.vy / FPS;
  };
  this.update = function() {
    if (this.x < 0 || this.x > canvas.width) this.x = -this.x;
    if (this.y < 0 || this.y > canvas.height) this.y = -this.y;
  };
 }

 function tick() {
   draw();
   requestAnimationFrame(tick);
 }

 tick();

