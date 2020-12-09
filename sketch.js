const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

function setup(){

    createCanvas(1000,700)
    engine = Engine.create();
    world = engine.world;
    ground1 = new ground(500,680,1000,20);
    stand1 = new ground(455,550,240,15)
    //row1 stand1
    block1 = new greenbox(380,532,30,20)
    block2 = new redbox(410,532,30,20)
    block3 = new bluebox(440,532,30,20)    
    block4 = new bluebox(470,532,30,20)
    block5 = new redbox(500,532,30,20)
    block6 = new greenbox(530,532,30,20)
    //row2 stand1
    block7 = new greenbox(395,502,30,20)
    block8 = new redbox(425,502,30,20)
    block9 = new bluebox(455,502,30,20)
    block10 = new redbox(485,502,30,20)
    block11 = new greenbox(515,502,30,20)
    //row3 stand1
    block12 = new greenbox(410,472,30,20)
    block13 = new redbox(440,472,30,20)
    block14 = new redbox(470,472,30,20)
    block15 = new greenbox(500,472,30,20)
    //row4 stnad1
    block16 = new greenbox(425,442,30,20)
    block17 = new redbox(455,442,30,20)
    block18 = new greenbox(485,442,30,20)
    //row5 stand1
    block19 = new greenbox(440,412,30,20)
    block20 = new greenbox(470,412,30,20)
    //row6 stand1
    block21 = new greenbox(455,392,30,20)
   
    




    Engine.run(engine);

}

function draw(){
    
    background(0)
    Engine.update(engine)

    rectMode(CENTER)

    ground1.display();
    stand1.display();
    block1.display()
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();


    drawSprites();
}
