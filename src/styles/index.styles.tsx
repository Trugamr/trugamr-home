import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: relative;
`

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const Widgets = styled.div`
  width: 100%;
  /* Tablet -> + */
  @media all and (min-width: 480px) {
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 300px;
  }
`
