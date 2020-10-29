import { useRef, useEffect, Fragment, useState } from 'react'
import { startAnimation, hashCode } from './rainbow-text.utils'

const RainbowText = ({
  fontSize = 30,
  text = '🌈rainbow',
  fontFamily = 'Montserrat, sans-serif',
  fontWeight = 900,
}) => {
  const canvasRef = useRef(null)
  const svgTextRef = useRef(null)
  const [animId, setAnimId] = useState(null)
  const stopAnimation = () => clearInterval(animId)

  // Generate hashed id name for having diff clippaths for diff canvas
  const clipPathId = `rainbow_text-${hashCode(`${text}-${fontSize}`)}`

  // Set canvas width and height based on text dimensions
  const setCanvasDimensions = (canvas, svgText) => {
    // Get width, height, x and y positions for svg text
    const {
      width: textWidth,
      height: textHeight,
    } = svgTextRef.current.getBBox()

    const s = document.querySelector(`#${clipPathId}`)

    // Set canvas size according to text width and height
    canvas.style.width = `${textWidth}px`
    canvas.style.height = `${textHeight}px`
    svgText.setAttribute('y', fontSize)
  }

  useEffect(() => {
    // Get canvas ref and 2d context
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const svgText = svgTextRef.current

    // Set canvas dimensions according to font size
    setCanvasDimensions(canvas, svgText)

    // Start animation by passing the context
    // This returns a setInterval id (used to clear setInterval call)
    if (animId === null) {
      setAnimId(startAnimation(context))
    }

    return () => stopAnimation

    // Montserrat font loaded
  }, [canvasRef, svgTextRef, text, fontSize, fontWeight, fontFamily, animId])

  // Preload font and recalculate canvas dimensions
  // Not needed incase fonts are preloaded
  useEffect(() => {
    // Get canvas ref and 2d context
    const canvas = canvasRef.current
    const svgText = svgTextRef.current

    // Change font and recalculate width and height of canvas
    const fontsLoaded = () => setCanvasDimensions(canvas, svgText)
    document.fonts.addEventListener('loadingdone', fontsLoaded)

    // Cleanup function
    return () => {
      document.fonts.removeEventListener('loadingdone', fontsLoaded)
    }
  }, [])

  return (
    <Fragment>
      <canvas
        ref={canvasRef}
        height={32}
        width={32}
        style={{ clipPath: `url(#${clipPathId})` }}
      ></canvas>
      <svg height="0" width="0">
        <clipPath id={clipPathId}>
          <text
            ref={svgTextRef}
            fontWeight={fontWeight}
            style={{ fontFamily }}
            fontSize={fontSize}
          >
            {text}
          </text>
        </clipPath>
      </svg>
    </Fragment>
  )
}

export default RainbowText
