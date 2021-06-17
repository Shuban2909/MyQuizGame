
function setup(){
createCanvas(1000,600);
input=createInput().attribute("placeholder", "Enter your name ");
input.position(400,230);

bP=createButton("SUBMIT");
bP.position(450,280);
bP.mousePressed(logic);
}

function draw(){
background("red");
}

function logic(){
input.hide();
bP.hide();

H=createElement("h1");
H.html("Hello! "+input.value() );
H.position(425,10);

A=createElement("h1");
A.html("Let`s see if you can answer this ");
A.position(300,50);

B=createElement("h1");
B.html("Questions ");
B.position(425,100);

C=createElement("h2");
C.html("Question => A man was standing in the rain ,without an umbrella and without a raincot.");
C.position(50,200);

D=createElement("h2");
D.html("But he did not wet his hair.");
D.position(50,250);

E=createElement("h2");
E.html("How is that possible?");
E.position(50,300);

bp=createButton("SUBMIT");
bp.position(100,550);
bp.mousePressed(logic2);

output=createInput().attribute("placeholder", "Enter your answer");
output.position(400,550);
}

function logic2(){
H.hide();

A.hide();

B.hide();

C.hide();

D.hide();

E.hide();

bp.hide();

output.hide();

W=createElement("h1");
W.html("YOUR ANSWER");
W.position(100,100);

Q=createElement("h2");
Q.html("=>"+ output.value());
Q.position(100,150);

S=createElement("h1");
S.html("CORRECT ANSWER");
S.position(100,300);

E=createElement("h2");
E.html("=> He was bald,LOL!");
E.position(100,350);

D=createElement("h1");
D.html("THANK YOU FOR ATTENDING MY QUIZ");
D.position(50,500);
}
