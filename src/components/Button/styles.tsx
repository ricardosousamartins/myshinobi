import styled from 'styled-components'
import { IButtonProps } from './index'


export const Button = styled.button<IButtonProps>`
  background: ${props => props.background};
  border-radius: var(--border-radius);
  border: 0px none;
  padding: 8px 20px;
  font: inherit;
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  cursor: pointer;
`
