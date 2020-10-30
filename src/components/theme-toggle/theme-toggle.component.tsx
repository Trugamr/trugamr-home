/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Button } from './theme-toggle.styles'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import useThemeToggle from 'hooks/useThemeToggle'

const ThemeToggle = () => {
  const { colorMode, toggleTheme } = useThemeToggle()
  return (
    <Container>
      <Button onClick={toggleTheme}>
        {colorMode === 'dark' ? (
          <RiSunFill sx={{ color: 'primary' }} size={20} />
        ) : (
          <RiMoonClearFill sx={{ color: 'primary' }} size={20} />
        )}
      </Button>
    </Container>
  )
}

export default ThemeToggle
