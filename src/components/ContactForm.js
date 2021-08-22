import React from 'react'
import styled from 'styled-components'

const ContactForm = () => {
    return (
        <Container>
            <Title><a href id="contact">Nous contacter</a></Title>
            <Content>
                <AddressContainer>
                    <AddressInfos>
                        <h3 style={{ fontWeight: 600 }} >Adresse :</h3>
                        <p style={{ marginTop: "-20px", color: "dimgrey", fontSize: ".9rem" }} >Entreprise de L'union <br />Lomé-TOGO<br />Tel : +228 97 49 90 10</p>
                    </AddressInfos>
                    <Map
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1780526196253!2d1.16903465786616!3d6.2166816653132635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMDAuMCJOIDHCsDEwJzEyLjUiRQ!5e0!3m2!1sfr!2stg!4v1629641430521!5m2!1sfr!2stg"
                        height="350" allowfullscreen="" loading="lazy">
                    </Map>
                </AddressContainer>
                <Form>
                    <div>
                        <Label>Nom complet</Label><br />
                        <Input type="text" required placeholder="Nom et prénoms" /><br />

                        <Label>Adresse mail</Label><br />
                        <Input type="email" required placeholder="Votre adresse mail" /><br />

                        <Label>Numéro de téléphone</Label><br />
                        <Input required type="tel" placeholder="xx xx xx xx" /><br />

                        <Label>Message</Label><br />
                        <MessageInput required type="" rows="6" placeholder="Votre message ici"  ></MessageInput><br />
                    </div>

                    <SubmitButton>Envoyer</SubmitButton>
                </Form>
            </Content>
        </Container >
    )
}
const Container = styled.div`
margin-top: 60px;
`
const Title = styled.h1`
    font-weight:  600;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
`

const Form = styled.form`
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
flex : 1;
`
const Input = styled.input`
background-color: rgba(0,0,0,.1);
border: none;
width: 25vw;
padding: 10px;
margin-top: 5px;
margin-bottom: 20px;
border-radius: 20px;
padding-left: 20px;
font-size: 1.01rem;
font-family: 'Poppins', sans-serif;
`
const MessageInput = styled.textarea`
background-color: rgba(0,0,0,.1);
border: none;
width: 25vw;
padding: 10px;
margin-top: 5px;
margin-bottom: 20px;
border-radius: 20px;
padding-left: 20px;
resize: none;
font-family: 'Poppins', sans-serif;
`
const Label = styled.label`
font-weight: 500;
margin-left: 15px;
`
const SubmitButton = styled.button`
background-color: ${props => props.theme.colors.primary};
color : white;
width: 300px;
`
const AddressContainer = styled.div`
flex: 1;
flex-direction: column;
display: flex;
justify-content: center;
padding: 20px;
`
const AddressInfos = styled.div``
const Content = styled.div`
display: flex;
flex-wrap: wrap;
`

const Map = styled.iframe`
border: none;
border-radius: 20px;
`


export default ContactForm
