import React from 'react'
import styled from 'styled-components'
import cardLogo from "../assets/images/landing.svg";

const Functionalities = () => {
    return (
        <Container>
            <TitleContainer>
                <Title><a href id="functionalities" >Fonctionnalités</a></Title>
                <Subtitle>In aute enim duis aliqua do. Est elit in Lorem velit elit sunt et eu ullamco aliquip amet veniam sint eiusmod. Tempor ad laboris ex qui minim eu ipsum excepteur nostrud deserunt cupidatat.</Subtitle>
            </TitleContainer>
            <CardsContainer>
                {
                    [0, 1, 2].map(e => (
                        <Card>
                            <CardLogo src={cardLogo} />
                            <CardTitle>Veniam ad nulla cillum qui</CardTitle>
                            <CardInfo>Incididunt ut aliqua pariatur dolore irure labore deserunt. Veniam do nulla mollit laboris nisi dolor in et. Esse incididunt fugiat officia officia magna duis fugiat cupidatat nisi tempor. Velit incididunt irure occaecat exercitation magna.</CardInfo>
                        </Card>
                    ))
                }
            </CardsContainer>
        </Container>
    )
}


const Container = styled.div`
margin-top: 50px;
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
justify-content: space-around;
flex-direction: row;
margin-top: 35px;
`
const Card = styled.div`
width: 30vw;
display: flex;
align-items: center;
flex-direction: column;
`
const CardTitle = styled.h2`
text-align: center;
font-weight: 600;
font-size: 1.1rem;
`
const CardInfo = styled.p`
text-align: center;
margin-top: -5px;
font-size: .9rem;
color: dimgray;
`
const CardLogo = styled.img`
width: 15vw;
`


export default Functionalities
