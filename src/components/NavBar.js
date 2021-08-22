import React from 'react'
import styled from 'styled-components'
import logoImg from "../assets/images/logo.png"

const NavBar = () => {
    return (
        <Container>
            <Logo src={logoImg} alt='Logo' />
            <Menu>
                <MenuItem href="#" >Accueil</MenuItem>
                <MenuItem href="#functionalities" >Fonctionnalités</MenuItem>
                <MenuItem href="#utilisation" >Comment ça marche ?</MenuItem>
                <MenuItem href="#contact" >Contact</MenuItem>
                <MenuItem href="#faq" >FAQ</MenuItem>
            </Menu>
            <ProfileContainer>
                <SignInButton>Se connecter</SignInButton>
            </ProfileContainer>
        </Container>
    )
}
const Container = styled.div`
        /* width: 100%; */
        display: flex;
        flex-direction: row;
        align-items:  center;
        justify-content: space-between;
        padding-right: 20px;
        box-shadow: 0px 7px 15px  rgba(0, 0, 0, .1);
        margin-bottom: 20px;

`
const Logo = styled.img``
const Menu = styled.div``
const MenuItem = styled.a`
        text-decoration: none;
        margin: 10px;
        color : #444 ;
        transition: 150ms;
        &:hover{
            color :${({ theme }) => theme.colors.primary}
        }
`
const ProfileContainer = styled.div``
const SignInButton = styled.button`
        background-color: ${props => props.theme.colors.primary};
        color : white
`

export default NavBar
