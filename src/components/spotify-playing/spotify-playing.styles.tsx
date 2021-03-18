import { css } from '@emotion/react'
import styled from '@emotion/styled'

// Types
interface ProgressProps {
  value: number
  max: number
}

const ellipsisText = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
`

export const Container = styled.div`
  padding: 12px;
  align-items: center;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
`

export const Artwork = styled.div<{ src: string }>`
  height: 76px;
  min-width: 76px;
  width: 76px;
  border-radius: 14px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  margin-right: 12px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  font-family: 'Montserrat';
  min-width: 0;

  /* Name */
  p {
    ${ellipsisText};
    font-weight: 500;
    padding-right: 10px;
  }

  /* Artist */
  span:nth-of-type(1) {
    padding-right: 20px;
    font-size: 14px;
    ${ellipsisText};
  }

  /* Album */
  span:nth-of-type(2) {
    padding-right: 30px;
    font-size: 14px;
    ${ellipsisText};
  }
`

export const SpotifyLink = styled.a`
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
`

export const Progress = styled.div<ProgressProps>`
  position: 'absolute';
  width: 100%;
  height: 100%;
  opacity: 0.15;
  transition: linear all 1000ms;
  transform: translateX(${({ value, max }) => (value / max) * 100 - 100}%);
`
