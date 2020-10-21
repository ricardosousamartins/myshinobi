import React from 'react'

import * as SC from './styles'

export const Heading: React.FC = ({
    children,
}) => {
    return (
        <SC.Heading>{children}</SC.Heading>
    )
}