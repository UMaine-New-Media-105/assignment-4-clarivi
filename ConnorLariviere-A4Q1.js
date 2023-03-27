function setup() {
  createCanvas(400, 400);
  firework1 = {
    x : 50,
    y : 50,
    size : 1,
    colors : ["red", "yellow", "orange"],
    lines : 48,
  }
  
  firework2 = {
    x : 200,
    y : 150,
    size : 1.6,
    colors : ["blue" ,"teal", "purple", "navy", "turquoise", "tan"],
    lines : 60,
  }
}

  firework3 = {
    x : 70,
    y : 300,
    size : 2.5,
    colors : ["green", "grey", "pink", "turquoise"],
    lines : 72,
  }

  firework4 = {
    x : 300,
    y : 320,
    size : 1.1,
    colors : ["yellow"],
    lines : 62,
  }

function draw() {
  background(0);
  addFirework(firework1)
  addFirework(firework2)
  addFirework(firework3)
  addFirework(firework4)
}

function addFirework(firework){
  push();
  let colorIndex = 0;
  translate(firework.x,firework.y);
  scale(firework.size)
  for(let i = 0; i < firework.lines; i++){
    rotate(360/firework.lines);
    stroke(firework.colors[colorIndex])
    line(0,0,0,40);
    if (colorIndex === firework.colors.length - 1){
      colorIndex = 0
    }
    else colorIndex = colorIndex + 1
    
  }
  pop()
}
