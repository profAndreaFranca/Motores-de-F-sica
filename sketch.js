//módulo da biblioteca Matter
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

let world
let engine

var ball;
var ground;
var angle = 60;


function setup() {
  createCanvas(600,600)

  //criando a física e o mundo
  engine = Engine.create()
  world = engine.world

  ball_options = {
    isStatic:false,
    restitution:1,
    density:0.01,
    frictionAir:0.5
  }

  ground_options = {
    isStatic:true
  }

  //criando um corpo/objeto
  ball = Bodies.circle(300,100,50,ball_options)
  World.add(world,ball)

  ground = Bodies.rectangle(300,580,600,20,ground_options)
  World.add(world,ground)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(0)
  Engine.update(engine)

  ellipse(ball.position.x,ball.position.y,50,50)

  rect(ground.position.x, ground.position.y, 600,20)

}
