import React, { useEffect, useState, useRef } from 'react'
// import { createBoard } from '../../server/algos/createBoard'

function App () {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  useEffect(() => {
    const canvas = canvasRef.current

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.width = `${window.innerWidth * 0.5}px`
    canvas.style.height = `${window.innerHeight * 0.5}px`

    const context = canvas.getContext('2d')
    context.scale(2, 2)
    context.linecap = 'round'
    context.strokeStyle = 'black'
    context.lineWidth = 5
    contextRef.current = context
  }, [])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }
  return (
    <div style = {{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <canvas
        onMouseDown = {startDrawing}
        onMouseUp = {finishDrawing}
        onMouseMove = {draw}
        ref = {canvasRef}
      />
    </div>
  )
}
export default App
