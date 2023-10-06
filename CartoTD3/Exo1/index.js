window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var backgroundImage = new Image();
    backgroundImage.src = 'images/mer.jpeg';
    backgroundImage.onload = function() {

        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);


        ctx.beginPath();
        ctx.arc(650, 100, 50, 0, 2 * Math.PI);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.closePath();

        function drawTriangle(x, y) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + 200);
            ctx.lineTo(x - 100, y + 200);
            ctx.closePath();
            ctx.fillStyle = 'red';
            ctx.fill();
        }

        function drawTriangle2(x, y) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + 200);
            ctx.lineTo(x + 100, y + 200);
            ctx.closePath();
            ctx.fillStyle = 'red';
            ctx.fill();
        }

        function drawTriangle3(x, y) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 150, y);
            ctx.lineTo(x + 50, y + 75);
            ctx.closePath();
            ctx.fillStyle = 'red';
            ctx.fill();
        }

        drawTriangle(200, 25);
        drawTriangle2(220, 25);
        drawTriangle3(120, 245);
    };


};
