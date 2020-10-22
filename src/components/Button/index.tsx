import React from 'react'

import * as SC from './styles'

export const Button: React.FC = ({
    children,
}) => {
    return (
        <SC.Button>{children}</SC.Button>
    )
}