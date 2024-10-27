class Starter extends Denizen {

  constructor(options) {
    super(options);
    this.originalImageUri = '/images/volcano.jpg';
    this.altImageUri = '/images/volcano-alt.png';
    this.imageUri = this.originalImageUri;
    this.position.y += this.height;
  }

  update(t) {
    // no physics for Starter
  }

  onClick(event) {
    this.imageUri = this.altImageUri;

    // Set a timeout to revert back to the original image after 100 ms
    setTimeout(() => {
      this.imageUri = this.originalImageUri;
    }, 100);

    var xVel = randRangeInt(-300, 300);
    var yVel = 400 - Math.abs(xVel);
    var s = new Seed({
      tank: this.tank,
      position: this.position,
      velocity: new Vector(xVel, yVel),
      type: this.tank.getRandomSpecies(),
    });
  }
}
