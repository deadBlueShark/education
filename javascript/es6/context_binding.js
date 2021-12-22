/*
var Ball = function(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.dt = 25; // 1000/25 = 40 frames per second

    setInterval(function() {
        this.x += vx; // Unknown what is `this`
        this.y += vy; // Unknown what is `this`
        console.log( this.x, this.y ); // Unknown what is `this`
    }, this.dt);

}
*/

/*
var Ball = function(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.dt = 25; // 1000/25 = 40 frames per second

    setInterval(function() {
        this.x += vx; // `this` is binding
        this.y += vy; // `this` is binding
        console.log( this.x, this.y ); // `this` is binding
    }.bind(this), this.dt);

}
*/

// In ES6, arrow functions come with automatic context binding. The lexical value
// of this isn’t shadowed by the scope of the arrow function. Therefore, you save
// yourself thinking about context binding.
var Ball = function(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.dt = 25;

    setInterval(() => {
        this.x += vx; // `this` is binding
        this.y += vy; // `this` is binding
        console.log( this.x, this.y ); // `this` is binding
    }, this.dt);

}

var ball = new Ball( 0, 0, 10000, 10000 );
