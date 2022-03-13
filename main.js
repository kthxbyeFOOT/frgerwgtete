difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#eecda3');

    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    fill('#F91593')
    text('IshaanDaGr8', 50, 400);
    textSize(difference);

}

function modelLoaded() {
    console.log('PoseNet has been initialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        

        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = leftWristX - rightWristX;
        difference = floor(leftWristX - rightWristX);
        
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX);

    }
}
