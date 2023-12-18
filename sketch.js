let particles = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);

  // This should update and display every particle
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();

    // This removes particles that go off screen
    if (particles[i].isOutOfBounds()) {
      particles.splice(i, 1);
    }
  }

  // If a mouse is pressed more particles are generated
  if (mouseIsPressed) {
    let particle = new Particle(mouseX, mouseY);
    particles.push(particle);
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.color = color(random(100, 200), random(150, 255), random(200, 255), 150); // Shades of blue
    this.size = random(10, 30); // Larger particles
  }

  update() {
    
    this.position.add(this.velocity);

    // Gives the particles random speed / acceleration
    let acceleration = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    this.velocity.add(acceleration);
  }

  display() {
    // Draws an ellipse at the current position
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  isOutOfBounds() {
    
    return (
      this.position.x < 0 ||
      this.position.x > width ||
      this.position.y < 0 ||
      this.position.y > height
    );
  }
}