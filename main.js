Webcam.set(
width= 360,
height=300,
img_format='png',
png_quality= 90
);
camera=document.getElementById("webcam");
Webcam.attach(camera);
function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        image=document.getElementById("image").innerHTML="<img id='img' src='"+data_uri+"'>"
    })
}
console.log("ML5 Version:", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/G1j-fHxZi/model.json");
