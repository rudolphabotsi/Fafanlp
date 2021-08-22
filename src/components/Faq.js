import React from 'react'
import styled from 'styled-components'
import image from "../assets/images/landing.svg"

const Faq = () => {
    return (
        <Container>
            <TitleContainer>
                <Title><a href id="faq">FAQ</a></Title>
            </TitleContainer>
            <Content>
                {
                    [0, 1, 2, 3, 4].map(e => (
                        <Card>
                            <CardImage src={image} alt="image" />
                            <CardContent>
                                <CardTitle>Do mollit irure consectetur voluptate id ipsum.</CardTitle>
                                <CardSubtitle>Nostrud labore fugiat officia nostrud. Aliquip dolore officia cillum ex non laborum deserunt ex non Lorem sit. Elit nisi do veniam do consectetur pariatur quis nisi ex.Nostrud labore fugiat officia nostrud. Aliquip dolore officia cillum ex non laborum deserunt ex non Lorem sit. Elit nisi do veniam do consectetur pariatur quis nisi ex.</CardSubtitle>
                            </CardContent>
                        </Card>
                    ))
                }
            </Content>
        </Container>
    )
}

const Container = styled.div`
`
const Content = styled.div`
background-color: ${({ theme }) => theme.colors.dark};
padding: 50px;
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
const Card = styled.div`
display: flex;
flex-direction: row;
`
const CardImage = styled.img`
width: 5vw;
background-origin: white;
margin-right: 20px;
`
const CardTitle = styled.p`
font-weight: 700;
color: white;
`
const CardSubtitle = styled.p`
color: white;
margin-top: -10px;
`
const CardContent = styled.div``
export default Faq
