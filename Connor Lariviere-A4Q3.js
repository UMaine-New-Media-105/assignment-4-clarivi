function setup() {
  createCanvas(2000, 2000);
  
  //Fireworks are set up using javascript objects. They have properties
  // of x and y position, their scale, their colors, and the amount of lines they have.
  firework1 = {
    x: 50,
    y: 50,
    size: 1,
    colors: ["red", "yellow", "orange"],
    lines: 48,
  };

  firework2 = {
    x: 200,
    y: 150,
    size: 1.6,
    colors: ["blue", "teal", "purple", "navy", "turquoise", "tan"],
    lines: 60,
  };
}

firework3 = {
  x: 110,
  y: 300,
  size: 2.5,
  colors: ["green", "grey", "pink", "turquoise"],
  lines: 72,
};

firework4 = {
  x: 300,
  y: 320,
  size: 1.1,
  colors: ["yellow"],
  lines: 62,
};

firework5 = {
  x: 360,
  y: 60,
  size: 0.8,
  colors: ["yellow", "white", "white", "pink", "hotpink", "red"],
  lines: 82,
};

firework6 = {
  x: 330,
  y: 170,
  size: 1.2,
  colors: ["green", "white", "green", "white", "lightblue", "white"],
  lines: 82,
};

firework7 = {
  x: 330,
  y: 170,
  size: 1.0,
  colors: ["maroon", "teal", "turquoise", "white", "grey", "maroon"],
  lines: 82,
};

function draw() {
  noLoop()
  background(0);
  for (let row = 0; row < 5; row++) {
    push()
    for (let column = 0; column < 5; column++) { //for every tile:
      
      //add 'stars'
      ellipse(random(0,400),random(0,400),5)
      ellipse(random(0,400),random(0,400),5)
      ellipse(random(0,400),random(0,400),5)
      ellipse(random(0,400),random(0,400),5)
      ellipse(random(0,400),random(0,400),5)
      ellipse(random(0,400),random(0,400),5)
      
      addFirework(firework1);
      addFirework(firework2);
      addFirework(firework3);
      addFirework(firework4);
      addFirework(firework5);
      if(random() >= 0.5){  //randomly draws one of two extra fireworks
        addFirework(firework6)
      }
      else addFirework(firework7)
      
      translate(400, 0);
    }
    pop() //
    translate(0,400);
  }
}

function addFirework(firework) {
  push();
  colorsLength = floor(random(0,firework.colors.length - 1)) //randomizes what element of the list the firework starts at.
  let colorIndex = colorsLength;
  translate(firework.x + random(-5,5), firework.y + random(-30,30)); //random firework position
  scale(firework.size * random(0.8,1.2)); //random firework size
  
  for (let i = 0; i < firework.lines; i++) { 
    //draws each of the firework lines
    rotate(360 / firework.lines);
    stroke(firework.colors[colorIndex]);
    line(0, 0, 0, 40 + random(-2,2)); //slightly randomizes how long each line of the firework is.
    if (colorIndex === firework.colors.length - 1) {
      //draws the lines in order of colors put in colors array
      colorIndex = 0;
    } else colorIndex = colorIndex + 1;
  }
  
  pop();
}
