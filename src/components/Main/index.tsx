import React from 'react'

import * as SC from './styles'

export const Main: React.FC = ({
    children,
}) => {
    return (
        <SC.Main>
            <SC.Content>{children}</SC.Content>
        </SC.Main>
    )
}