import React from 'react'
import styled from 'styled-components'
import image from '../assets/images/landing.svg'

const Utilisation = () => {
    return (
        <Container>
            <TitleContainer>
                <Title><a href id='utilisation'>Comment ca marche ?</a></Title>
                <Subtitle>In aute enim duis aliqua do. Est elit in Lorem velit elit sunt et eu ullamco aliquip amet veniam sint eiusmod. Tempor ad laboris ex qui minim eu ipsum excepteur nostrud deserunt cupidatat.</Subtitle>
            </TitleContainer>
            <CardsContainer>
                {
                    [0, 1, 2, 3, 4, 5].map(e => (
                        <Card>
                            <CardImage src={image} alt="img" />
                            <CardContent>
                                <CardTitle>Id dolor sint cupidatat incididunt consequat occaecat nisi.</CardTitle>
                                <CardSubtitle>Eu esse  nulla velit eu aliqua non pariatur ut. Tempor velit commodo ipsum ipsum non ullamco nulla tempor sunt dolor. Pariatur Lorem do amet est exercitation. Exercitation sunt ut non tempor ex incididunt incididunt nisi.</CardSubtitle>
                            </CardContent>
                        </Card>
                    ))
                }
            </CardsContainer>
        </Container>
    )
}
const Container = styled.div`
margin-top: 60px;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-weight:  600;
    color: ${({ theme }) => theme.colors.primary};
`
const Subtitle = styled.p`
width: 40vw;
font-size: .9rem;
color: dimgrey;
text-align: center;
margin-top: -20px;
`

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`
const Card = styled.div`
width: 30vw;
display: flex;
flex-direction: row;
align-items: flex-start;
margin-bottom: 30px;
margin-top: 30px;
background-color: rgba(0,0,0,.03);
padding: 15px;
`
const CardImage = styled.img`
width: 8vw;
`
const CardContent = styled.div``
const CardTitle = styled.p`
font-weight: 500;
`
const CardSubtitle = styled.p`
color: dimgray;
font-size: .9rem;

`


export default Utilisation
