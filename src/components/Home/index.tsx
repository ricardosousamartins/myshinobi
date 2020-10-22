import React from 'react'
import { NinjaGrid } from "../NinjaGrid";
import { RecentlyAddedQuery } from '../../graphql/queries'

import * as SC from './styles'

export const Home: React.FC = () => {
    return (
        <SC.Wrapper>
            <NinjaGrid query={RecentlyAddedQuery} area="result"/>
        </SC.Wrapper>
    )
}