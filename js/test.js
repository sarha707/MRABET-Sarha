let imgMasque;
let newFeuille;
let pinceau;

function preload(){
     	createCanvas(windowWidth,windowHeight);
	imgMasque = loadImage('images/ccaillou.png');   
   // tint(255,255,14)
    pinceau = loadImage('images/craie.png')

    
}



function setup() {
     imgMasque.resize(0,height/2)//choisir la taille ici
	
     
     image(imgMasque,0,0);
     print('tttt')

}