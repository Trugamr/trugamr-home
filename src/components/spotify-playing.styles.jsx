import { css } from '@emotion/core'
import styled from '@emotion/styled'

const ellipsisText = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Wrapper = styled.div`
  width: 300px;
  height: 100px;
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.muted};
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

export const Artwork = styled.div`
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
    color: #d0d0d0;
  }

  /* Album */
  span:nth-of-type(2) {
    padding-right: 30px;
    font-size: 13px;
    color: #e8e8e8;
    ${ellipsisText};
  }
`

export const SpotifyLink = styled.a`
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
`

export const Progress = styled.progress`
  /* Reset the default appearance */
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 20px;

  &[value] {
    ::-webkit-progress-bar {
      border-radius: 20px;
      background-color: transparent;
    }

    ::-webkit-progress-value {
      overflow: hidden;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.primary} 90%,
        transparent 100%
      );
      opacity: 0.1;
    }
  }
`
