import React, { Key } from 'react'
import { useQuery } from '@apollo/client';
import { Loader } from '../Loader'
import { Heading } from '../Heading'

import * as SC from './styles'

interface INinjaGridProps {
    query: any,
    area: string,
}

export const NinjaGrid: React.FC<INinjaGridProps> = ({
    query,
    area,
}) => {
    const { loading, data } = useQuery(query)

    if (loading) {
        return <Loader />
    }

    return (
        <SC.Wrapper area={area}>
            {data.Ninjas
                .map((
                    data: any,
                    key: Key,
                ) => {
                    const { Name, Images } = data

                    return (
                        <SC.Grid key={key}>
                            <SC.Figure>
                                <SC.Image src={Images[0]} />
                            </SC.Figure>
                            <Heading>{Name}</Heading>
                        </SC.Grid>
                    )
                })
            }
        </SC.Wrapper>
    )
}