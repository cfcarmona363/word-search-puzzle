import styled from 'styled-components'

export const Separator = styled.div`
  height: ${({ size }) => {
    return `${size * 20}px`
  }};
`
export const Title = styled.h1`
  font-size: 26px;
  font-weight: 800;
  margin: 3rem 0;
  text-align: ${({ align }) => align};
  box-sizing: border-box;
`
export const Text = styled.span`
  font-size: 20px;
  box-sizing: border-box;
`
export const StrongText = styled(Text)`
  font-size: 22px;
  font-weight: 800;
`
