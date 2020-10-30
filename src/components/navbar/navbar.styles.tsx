import styled from '@emotion/styled'
import { Theme } from 'global'

export const Wrapper = styled.div`
  width: 100%;
  padding: 12px;
`

export const Container = styled.div<{ theme: Theme }>`
  border-radius: 6px;
  padding: 4px 10px;
  display: 'flex';
  background: ${({ theme }) => theme.colors.muted};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Left = styled.div``

export const Middle = styled.div``

export const Right = styled.div``

export const Title = styled.h4<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.primary};
`
