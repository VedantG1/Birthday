blockObject = "";

var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        blockObject = Img;

        blockObject.scaleToWidth(700);
        blockObject.scaleToHeight(510);
        blockObject.set({
            top:0,
            left:0
        });

        canvas.add(blockObject)
    })
}

function playSound(){
	x.play("bdayaudio.mp3");
}
