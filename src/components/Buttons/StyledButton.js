import styled from 'styled-components'
import { buttonsColors } from '../../constants/constants'

export const StandardButton = styled.button`
  width: 150px;
  height: 40px;
  cursor: pointer;
  border-radius: 30px;
  display: inline-block;
  background-color: ${({ type }) => buttonsColors[type].background};
  color: ${({ type }) => buttonsColors[type].font};
  font-size: 20px;
  font-weight: 600;
  outline: none;
  padding: 5px 20px;
  text-decoration: none;
  border: none;
  &:hover {
    filter: brightness(80%);
  }
`

export const AnimatedButton = styled(StandardButton)`
  border-bottom: 0.2em solid ${({ type }) => buttonsColors[type].shadow};
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  box-shadow: 0 2px 2px ${({ type }) => buttonsColors[type].shadow};

  &:active {
    border-bottom-width: 0;
  }
`
