import { Container, Button } from './theme-toggle.styles'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import useTheme from 'hooks/useTheme'

const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme()

  return (
    <Container>
      <Button onClick={toggleTheme}>
        {theme?.name === 'dark' ? (
          <RiSunFill color={theme.colors.primary} size={20} />
        ) : (
          <RiMoonClearFill color={theme.colors.primary} size={20} />
        )}
      </Button>
    </Container>
  )
}

export default ThemeToggle
