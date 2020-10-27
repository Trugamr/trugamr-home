import { useRef, useEffect, Fragment, useState } from 'react'
import { startAnimation } from './rainbow-text.utils'
import styles from './rainbow-text.module.css'

const RainbowText = ({ fontSize = 30, text = '🌈rainbow' }) => {
  const canvasRef = useRef(null)
  const svgTextRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Get canvas ref and 2d context
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // Get width, height, x and y positions for svg text
    const svgText = svgTextRef.current
    canvas.style.clipPath = `url(#${styles.svgTextPath}-${text})`
    const { x, y, width: textWidth, height: textHeight } = svgText.getBBox()

    // Set canvas size according to text width and height
    canvas.style.width = `${textWidth}px`
    canvas.style.height = `${textHeight}px`

    // Adjusting text positioning by making text position x, y equals 0
    svgText.setAttribute('x', -x)
    svgText.setAttribute('y', -y)

    // Start animation by passing the context
    startAnimation(context)
  }, [canvasRef, svgTextRef])

  return (
    <Fragment>
      <canvas
        className={styles.canvas}
        ref={canvasRef}
        height={32}
        width={32}
      ></canvas>

      <svg height="0" width="0">
        <defs>
          <clippath id={`${styles.svgTextPath}-${text}`}>
            <text
              className={styles.svgText}
              ref={svgTextRef}
              fontSize={fontSize}
              fontWeight={900}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {text}
            </text>
          </clippath>
        </defs>
      </svg>
    </Fragment>
  )
}

export default RainbowText
