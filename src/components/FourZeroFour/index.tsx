import React from 'react'
import { Link } from '../Link'
import { Heading } from '../Heading'
import { Button } from '../Button'

import * as SC from './styles'

const theme = {
    background: "var(--blue)",
    weight: "bolder",
    color: "#ffff",
}

interface IFourZeroFourProps {
    title?: string,
}

export const FourZeroFour: React.FC<IFourZeroFourProps> = ({
    title
}) => {
    return (
        <SC.Wrapper>
            <Heading>
                {!title && "Couldn't find this page ㅜ-ㅜ"}
                {title}
            </Heading>
            <Link to="/">
                <Button {...theme}>Return Home</Button>
            </Link>
        </SC.Wrapper>
    )
}