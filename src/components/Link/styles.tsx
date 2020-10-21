import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

type TPropType = {
    active: Boolean
}

const LinkStyle = css`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props: TPropType) => (props.active ? `var(--grey)` : `var(--text-color)`)};
  text-decoration: none;
`

export const LinkInternal = styled(Link)`
  ${LinkStyle}
`