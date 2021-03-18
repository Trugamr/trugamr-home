import {
  useRef,
  useEffect,
  Fragment,
  useState,
  FunctionComponent,
  RefObject,
  Dispatch,
} from 'react'
import { startAnimation, hashCode } from './rainbow-text.utils'

interface IProps {
  fontSize?: number
  text?: string
  fontFamily?: string
  fontWeight?: number
}

const RainbowText: FunctionComponent<IProps> = ({
  fontSize = 30,
  text = '🌈rainbow',
  fontFamily = 'Montserrat, sans-serif',
  fontWeight = 900,
}) => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)
  const svgTextRef: RefObject<SVGTextElement> = useRef(null)
  const [animId, setAnimId]: [
    NodeJS.Timeout,
    Dispatch<NodeJS.Timeout>,
  ] = useState(null)
  const stopAnimation = () => clearInterval(animId)

  // Generate hashed id name for having diff clippaths for diff canvas
  const clipPathId = `rainbow_text-${hashCode(`${text}-${fontSize}`)}`

  // Set canvas width and height based on text dimensions
  const setCanvasDimensions = (
    canvas: HTMLCanvasElement,
    svgText: SVGTextElement,
  ) => {
    // Get width, height, x and y positions for svg text
    const {
      width: textWidth,
      height: textHeight,
    } = svgTextRef.current.getBBox()

    const s = document.querySelector(`#${clipPathId}`)

    // Set canvas size according to text width and height
    canvas.style.width = `${textWidth}px`
    canvas.style.height = `${textHeight}px`
    svgText.setAttribute('y', fontSize.toString())
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

    return stopAnimation

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
    // @ts-expect-error
    document.fonts.addEventListener('loadingdone', fontsLoaded)

    // Cleanup function
    return () => {
      // @ts-expect-error
      document.fonts.removeEventListener('loadingdone', fontsLoaded)
    }
  }, [])

  return (
    <Fragment>
      <div style={{ filter: 'drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.1))' }}>
        <canvas
          ref={canvasRef}
          height={32}
          width={32}
          style={{
            clipPath: `url(#${clipPathId})`,
          }}
        ></canvas>
      </div>
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
