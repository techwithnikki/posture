// //alert("Hello nikki")
// let shahrukh_img;
// function setup(){
//     createCanvas(800,500);
//     // console.log('Setup function')
//     loadImage('images/shahrukh.png');
// }
// function getRandomArbitrary(min,max){
//         return Math.random()*(max-min)+min;
// }
// function draw(){
//     // console.log('Draw function')
//     r =getRandomArbitrary(0,255);
//     g =getRandomArbitrary(0,255);
//     b =getRandomArbitrary(0,255);
//     fill(r,g,b);
//     ellipse(mouseX,mouseY,50,50);
    

//     // background(200);
//     // 
//     point(200,200);
//     // line(200,200,300,300);
//     // triangle(100,200,300,400,150,450)
//     // rect(500,200,200,100)
//     // circle(600,300,100,100)
//     // fill(132,100,34,100)
//     // stroke(255,0,0,100);
//     // strokeWeight(5);
//     // ellipse(100,200,100,100);
//     // stroke(0,255,0)
//     // ellipse(250,200,100,100);
//     // ellipse(400,200,100,100);
//     // stroke(0,0,255)
//     // ellipse(550,200,100,100);
//     // ellipse(700,200,100,100);

// }
// let shahrukh_img;
//    function setup(){
//     createCanvas(800,500);
//     shahrukh_img=loadImage('images/shahrukh.png')
// }
//    function draw(){
//     Image( shahrukh_img,100,100,100,100);
//    }





// let capture;
// const posenet=null;
//    function setup(){
//     createCanvas(800,500);
//     capture =createCapture(VIDEO)
//     capture.hide();
//     posenet =ml5.poseNet(capture,modelLoaded);
//     posenet.on('pose',receivedPoses)
    
// }
// function receivedPoses(){
//     console.log('poses');
// }
// function modelLoaded(){
//     console.log('Model has loaded');
// }
//    function draw(){
//     Image( capture,0,0,800,600);
//    }
















let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let actor_img;
let specs,smoke;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);

    actor_img = loadImage('images/shahrukh.png');
    specs = loadImage('images/spects.png');
    smoke = loadImage('images/cigar.png');

}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {

    // images and videos(webcam)
    image(capture, 0, 0);
    fill(255,0,0);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }

        image(specs,singlePose.nose.x-35,singlePose.nose.y-150,180,180);
        image(smoke,singlePose.nose.x-35,singlePose.nose.y+100,40,40);

        
    }

    

}











































