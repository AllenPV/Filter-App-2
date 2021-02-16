function preload(){

}
function setup(){
    Canvas = createCanvas(640,480);
    Canvas.position(110,250);
    Video = createCapture(VIDEO);
    Video.hide();
    tint_color = "";
}
function draw(){
    image(Video,0,0,640,480);
    tint(tint_color);
}
function take_snapshot()
{
save("Output.png");
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}