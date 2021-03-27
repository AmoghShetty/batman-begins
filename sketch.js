const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var rain;
function preload(){
    
}

function setup(){
    var canvas=createCanvas(1000,1000);
   engine=Engine.create();
   world=engine.world;

   rain=new Rain(0,400,20);
    
}

function draw(){
    rain.display();
}   

