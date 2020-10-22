import styled from 'styled-components'

interface IWrapperProps {
    area: string
}

export const Wrapper = styled.div<IWrapperProps>`
    display: grid;
    grid-area: ${props => props.area};
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 270px;
    grid-gap: 10px;
    
    max-width: 1050px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(4, 1fr);
    }
    
    @media (max-width: 550px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const Grid = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-gap: 5px;
`

export const Figure = styled.figure`
    height: 250px;
    margin: 0;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
    transition: all 0.1s ease-in-out 0s;

    &:hover {
      transform: translateY(-5px);
    }

`