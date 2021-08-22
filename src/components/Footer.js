import React from 'react'
import styled from 'styled-components'
import logo from "../assets/images/logo.png";
import { BiMap } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { theme } from '../theme';

const Footer = () => {
    return (
        <Container>
            <VContainer>
                <Logo src={logo} />
                <HContainer>
                    <BiMap color={"white"} size={25} />
                    <Info>Entreprise de l'Union (Lomé-TOGO)</Info>
                </HContainer>
                <HContainer>
                    <BiMailSend color={"white"} size={25} />
                    <Info>adresseMail@.mail.com</Info>
                </HContainer>
                <HContainer>
                    <BiPhone color={"white"} size={25} />
                    <Info>+228 97 49 90 10</Info>
                </HContainer>
            </VContainer>
            <VContainer>
                <Title>Liens rapides</Title>
                <Link href="#" >Accueil</Link>
                <Link href="#functionalities" >Fonctionnalités</Link>
                <Link href="#utilisation" >Comment ça marche ?</Link>
                <Link href="#contact" >Contact</Link>
                <Link href="#faq" >FAQ</Link>
            </VContainer>
            <VContainer>
                <Title>Suivez-nous</Title>
                <HContainer>
                    <SocialLink href='#' >
                        <AiFillFacebook color={theme.colors.primary} size={30} />
                    </SocialLink>
                    <SocialLink href='#' >
                        <AiFillLinkedin color={theme.colors.primary} size={30} />
                    </SocialLink>
                    <SocialLink href='#' >
                        <AiFillTwitterCircle color={theme.colors.primary} size={30} />
                    </SocialLink>
                </HContainer>
            </VContainer>
        </Container>
    )
}
const Container = styled.div`
background-color: #212529;
padding: 40px;
display: flex;
flex-direction: row;
justify-content: space-around;
`
const VContainer = styled.div`
display: flex;
flex-direction: column;
`
const HContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const Logo = styled.img``
const Info = styled.p`
margin-left: 10px;
font-size: 0.9rem;
color: white;
`
const Title = styled.p`
color: white;
font-weight: 500;
font-size: 1.3rem;
`
const Link = styled.a`
text-decoration: none;
margin: 10px;
margin-top: 0px;
color : #fff ;
font-size: .9rem;
transition: 150ms;
&:hover{
    color :${({ theme }) => theme.colors.primary}
}
`
const SocialLink = styled.a`
margin-left: 10px;
transition: 150ms;
&:hover{
    transform: translateY(-3px);
}
`
export default Footer
