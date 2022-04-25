img="";
array1=[];
status1="";
function preload(){
   img= loadImage("dog_cat.jpg");
}
function setup(){
  canvas=  createCanvas(640,420);
  canvas.center();
  ml51=ml5.objectDetector('cocossd',ml5Loaded);
  document.getElementById("h3id").innerHTML="Status: Detecting Objects";
}
function ml5Loaded(){
    console.log("ML5 Is Loaded");
    status1=true;
    ml51.detect(img,detectImage);
}
function detectImage(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        array1=results;
    }
}
function draw(){
    image(img,0,0,640,420);
    for(var i=0;i<array1.length;i++){
        document.getElementById("h3id").innerHTML="Status: Object Detected";
        fill("red");
        noFill();
        stroke("red");
        conf=floor(array1[i].confidence*100);
        text(array1[i].label+" "+conf+"%",array1[i].x+15,array1[i].y+15);
        rect(array1[i].x,array1[i].y,array1[i].width,array1[i].height);
    }
    
}