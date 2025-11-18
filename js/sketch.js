let imgListe = [];
let compteur = 1; 
let gomme =0;
let imgMasque;
let newFeuille;
let pinceau;
let x;
let y;
let couleurPinceau;
let size=10;

function preload(){
for (let i = 1; i <3; i++) {//importer les images 
                             
	imgListe[i-1]=loadImage('images/jolis cailloux/geode '+i+'.png');   
	}   
	imgMasque = loadImage('images/ccaillou.png');   
  pinceau = imgListe[0];

    
}

function setup() {
  angleMode(DEGREES)
  rectMode(CENTER)
    print(imgListe)
    frameRate(37)
		imageMode(CENTER)
		createCanvas(windowWidth,windowHeight);
		for (let i = 0; i <imgListe.length; i++){ //redimensionner
       imgListe[i].resize(0,70) //choisir la taille ici
       imgListe[1].resize(0,70)
       	}
       couleurPinceau = color(212, 115, 212, 68);
          x=width/2;
        y=height/2;
    



    
     imgMasque.resize(700,700)//choisir la taille ici
	
       
      
	
    newFeuille=createGraphics(width,height)
    newFeuille.background(255)
    newFeuille.blendMode(REMOVE);
    newFeuille.imageMode(CENTER)
    newFeuille.image(imgMasque,width/2,height/2)
    
    //pinceau.resize(0,300) //choisir la taille ici

     //image(imgMasque,0,0);
     //print('tttt')

}

function draw(){

//background(255)
 // translate(300,300)
 // rotate(mouseX)
 //tint(239,98,12)
  //image(imgListe[1],0,0)
   
   //background(255,255,98)
    fill(212, 115, 212,)
    image(pinceau,mouseX,mouseY)

tint(couleurPinceau)
		image(imgListe[compteur],mouseX,mouseY) //dessiner 
        noTint()
        image(newFeuille,width/2,height/2)
        step=30;
        tint(255,57,98)
        x=noise(77+frameCount*0.02)*width
        y=noise(frameCount*0.01)*height
    

     let x1=noise(77+frameCount*0.02)*width
     let y1=noise(frameCount*0.01)*height

       push()
	translate(x1,y1)
	rotate(frameCount)
	image(imgListe[1],0,0)
pop()

      image(imgListe[compteur],y,x)
      //circle(x1,y1,size,size)

         }


function mousePressed(){ // changer d'image au clic
    console.log(compteur)
				compteur++ // ++ =on augmente de 1
	   if(compteur>imgListe.length-1){
        compteur = 0;
       }
//         if (couleurPinceau.toString() === color(212, 115, 212, 68).toString()) {
//    couleurPinceau = color(128, 0, 128, 150);
//  } else {
//     couleurPinceau = color(212, 115, 212, 68);
//   }
}






function keyPressed(){ /// mode gomme ou dessin 
  console.log(key)
  if(key=='ArrowUp'){
    size+=12

  }
  if(key=='ArrowDown'){
     size-=12

  }
         // if(gomme == 1){
            //    gomme =0
             //   blendMode(BLEND)
      //  }else{
            //    gomme = 1
             //   blendMode(REMOVE)
      //  }
     
}


  
   

