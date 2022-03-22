import React from 'react'

function Canvas () {
  // Box width
  var bw = 400
  // Box height
  var bh = 400
  // Padding
  var p = 10

  var canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')
  function drawBoard () {
    for (var x = 0; x <= bw; x += 40) {
      context.moveTo(0.5 + x + p, p)
      context.lineTo(0.5 + x + p, bh + p)
    }

    for (var y = 0; y <= bh; y += 40) {
      context.moveTo(p, 0.5 + y + p)
      context.lineTo(bw + p, 0.5 + y + p)
    }
    context.strokeStyle = 'black'
    context.stroke()
  }

  drawBoard()
  return (
    <canvas id="canvas" width="420px" height="420px" style="background: #fff; margin:20px"></canvas>
  )
}

export default Canvas
