import React from 'react'
import { useLocation } from "react-router-dom"

import * as SC from './styles'

interface ILinkProps {
    to: string
}

export const Link: React.FC<ILinkProps> = ({
    children,
    to,
}) => {
    const { pathname } = useLocation()

    return (
        <SC.LinkInternal to={to} active={to === pathname}>{children}</SC.LinkInternal>
    )
}