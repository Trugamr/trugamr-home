/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FunctionComponent } from 'react'
import { Wrapper, Container, Left, Middle, Right, Title } from './navbar.styles'
import ThemeToggle from 'components/theme-toggle/theme-toggle.component'

interface IProps {
  title?: string
}

const Navbar: FunctionComponent<IProps> = ({ title = '' }) => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Title>{title}</Title>
        </Left>
        <Middle></Middle>
        <Right>
          <ThemeToggle />
        </Right>
      </Container>
    </Wrapper>
  )
}

export default Navbar
