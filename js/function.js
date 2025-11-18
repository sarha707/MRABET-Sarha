let imgListe = [];    
let imgMasque;        
let newFeuille;       
let size = 100;       
let opacite = 68;     
let gomme = 0;        

function preload() {
  
  for (let i = 1; i < 4; i++) {
    imgListe[i - 1] = loadImage('images/jolis cailloux/geode ' + i + '.png');
  }

  
  imgMasque = loadImage('images/ccaillou.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  imageMode(CENTER);
  frameRate(70); 

  
  imgMasque.resize(windowWidth,windowHeight);

  
  newFeuille = createGraphics(width, height);
  newFeuille.background(255);
  newFeuille.blendMode(REMOVE);
  newFeuille.imageMode(CENTER);
  newFeuille.image(imgMasque, width / 2, height / 2);
}

function draw() {

  
  let geo = random(imgListe);
  let pos = aleatoire();
  let tailleGeo = random(17,170)
 
  
  let teinte = random(260, 300);       
let saturation = random(50, 90);      
let luminosite = random(40, 80);      
let milieu = createVector(width/2,height/2);
let distance = p5.Vector.dist(pos, milieu)
let lumVal = map(distance, 0,400,100,0)

tint(teinte, saturation, lumVal, opacite);
  image(geo, pos.x, pos.y, tailleGeo, tailleGeo);

  noTint();
  image(newFeuille, width / 2, height / 2);
}


function aleatoire() {
  let x, y, couleur;
  do {
    x = random(width / 2 - imgMasque.width / 2, width / 2 + imgMasque.width / 2);
    y = random(height / 2 - imgMasque.height / 2, height / 2 + imgMasque.height / 2);

    
    couleur = imgMasque.get(
      x - width / 2 + imgMasque.width / 2,
      y - height / 2 + imgMasque.height / 2
    );
  } while (couleur[3] < random);
  return createVector(x, y);
}