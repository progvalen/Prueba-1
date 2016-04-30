var RED = 'red';
var GREEN = 'green';
var YELLOW = 'yellow';
var BLUE = 'blue';
var WHITE = 'white';
var ORANGE = '#ffB03D';

function leerCubo(){
    return [
        [
            [ GREEN,GREEN,GREEN ],
            [ GREEN,GREEN,GREEN ],
            [ GREEN,GREEN,GREEN ]
        ],
        [
            [ YELLOW,YELLOW,YELLOW ],
            [ YELLOW,YELLOW,YELLOW ],
            [ YELLOW,YELLOW,YELLOW ]
        ],
        [
			[ BLUE,BLUE,BLUE ],
            [ BLUE,BLUE,BLUE ],
            [ BLUE,BLUE,BLUE ]
        ],
		[   
			[WHITE,WHITE,WHITE ],
            [ WHITE,WHITE,WHITE ],
            [ WHITE,WHITE,WHITE ]
		],
        [    
			[ RED,RED,RED ],
            [ RED,RED,RED ],
            [ RED,RED,RED ]
        ],
        [
            [ ORANGE,ORANGE,ORANGE ],
            [ ORANGE,ORANGE,ORANGE ],
            [ ORANGE,ORANGE,ORANGE ]
        ]
    ];
}
var LENGTH_PART = 20;
function drawFace(context,x,y,face){
    for(var i in [0,1,2]){
        for(var j in [0,1,2]){
            context.beginPath();
            context.rect(x + (i*(LENGTH_PART+5)), y+ (j*(LENGTH_PART+5)), LENGTH_PART, LENGTH_PART);
            context.fillStyle = face[i][j];
            context.fill();
            context.lineWidth = 1;
            context.strokeStyle = '#003300';
            context.stroke();            
            context.closePath();
        }
    }

}

function drawCube(){
    var canvas = document.getElementById('cube');
    var context = canvas.getContext('2d');

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

	for (i = 0; i < 4; i++) { 
		drawFace(context,20+(80*i),100,CUBO[i]);
	}
    drawFace(context,100,20,CUBO[4]);
	drawFace(context,100,180,CUBO[5]);
  }

var CUBO = leerCubo();
drawCube();
