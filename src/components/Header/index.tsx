import React from 'react'
import { Link } from '../Link'
import { Button } from '../Button'

import Logo from '../../images/logo.png'
import * as SC from './styles'

const theme = {
    background: "var(--background-forth)",
    weight: "600",
    color: "var(--text-color)",
}

export const Header: React.FC = () => {
    return (
        <SC.Header>
            <SC.Nav>
                <SC.Links>
                    <Link to="/">
                        <SC.Logo src={Logo} />
                    </Link>
                    <SC.Aside>
                        <Link to="/search">Search</Link>
                        <Link to="/formation">Formations</Link>
                        <Link to="/discord">Discord</Link>
                    </SC.Aside>
                    <Link to="/admin">
                        <Button {...theme}>Admin</Button>
                    </Link>
                </SC.Links>
            </SC.Nav>
        </SC.Header>
    )
}