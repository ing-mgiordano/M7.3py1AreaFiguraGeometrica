function drawCircule() {
   
    let userNumberCir = Number(document.getElementById('circul-rad').value)
    console.log(userNumberCir)

    let canvasCirculo = document.getElementById('circulo')
    let context = canvasCirculo.getContext('2d')
    
    context.beginPath()
    context.arc(300, 300, userNumberCir, 0, 2*Math.PI)
    context.stroke()

    let areaCirc = userNumberCir * 2 * Math.PI
    document.getElementById('resultCirc').innerHTML = `El area del ciurculo es ${areaCirc}`  
}

function drawSquare() {

    let userNumberSqu = Number(document.getElementById('square-length').value)
    console.log(userNumberSqu)

    let canvasSquare = document.getElementById('square')
    let context = canvasSquare.getContext('2d')
    
    context.beginPath()
    context.fillRect(0, 0, userNumberSqu, userNumberSqu)
    context.stroke()

    let areaSquare = userNumberSqu*userNumberSqu
    document.getElementById('resultSquar').innerHTML = `El area del cuadrado es ${areaSquare}` 
}

function drawRectangle() {

    let userNumberRecBase = Number(document.getElementById('rec-length1').value)
    let userNumberRecAlt = Number(document.getElementById('rec-length2').value)
    console.log(userNumberRecBase,userNumberRecAlt)

    let canvasRactangle = document.getElementById('rectangle')
    let context = canvasRactangle.getContext('2d')
    
    context.beginPath()
    context.fillRect(0, 0, userNumberRecBase, userNumberRecAlt)
    context.stroke()

    let areaRect = userNumberRecAlt*userNumberRecBase
    document.getElementById('resultRect').innerHTML = `El area del rectangulo es ${areaRect}` 
}

function drawTriangle() {

    let userNumberTriBase = Number(document.getElementById('tri-length1').value)
    let userNumberTriAlt = Number(document.getElementById('tri-length2').value)
    console.log(userNumberTriBase,userNumberTriAlt)

    let canvasTriangle = document.getElementById('triangle')
    let context = canvasTriangle.getContext('2d')
    
    context.beginPath()
    context.moveTo(100, 50)
    context.lineTo(50, 150)
    context.lineTo(150, 150)
    context.lineTo(100, 50)
    context.stroke()

    let areaTriangle = userNumberTriAlt*userNumberTriBase/2
    document.getElementById('resultTri').innerHTML = `El area del triangulo es ${areaTriangle}` 
}
