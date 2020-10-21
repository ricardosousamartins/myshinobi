import React from 'react'

import * as SC from './styles'

export interface IButtonProps {
    background: string,
    weight: string,
    color: string,
}

export const Button: React.FC<IButtonProps> = ({
    children,
    ...props
}) => {
    return (
        <SC.Button {...props}>{children}</SC.Button>
    )
}