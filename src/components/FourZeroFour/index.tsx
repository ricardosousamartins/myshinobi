import React from 'react'
import { Link } from '../Link'
import { Heading } from '../Heading'
import { Button } from '../Button'

import * as SC from './styles'

interface IFourZeroFourProps {
    title?: string,
}

export const FourZeroFour: React.FC<IFourZeroFourProps> = ({
    title
}) => {
    return (
        <SC.Wrapper>
            <Heading>
                {title ? title : "Couldn't find this page ㅜ-ㅜ"}
            </Heading>
            <Link to="/">
                <Button>Return Home</Button>
            </Link>
        </SC.Wrapper>
    )
}