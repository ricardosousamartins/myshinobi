import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

interface ILinkStyleProps {
    active: Boolean
}

const LinkStyle = css<ILinkStyleProps>`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${props => (props.active ? `var(--grey)` : `var(--text-color)`)};
  text-decoration: none;
`

export const LinkInternal = styled(Link)`
  ${LinkStyle}
`