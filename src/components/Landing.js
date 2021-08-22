import React from 'react'
import styled from 'styled-components';
import landingImg from "../assets/images/landing.svg";
import { motion } from "framer-motion"

const Landing = () => {
        const verticalAnimation = {
                y: [-50, 0],
                opacity: [0, 1]
        }
        const horizontalAnimation = {
                x: [150, 0],
                opacity: [0, 1]
        }
        const buttonAnimation = {
                x: [50, 0],
                opacity: [0, 1]
        }
        return (
                <Container>
                        <TextContainer>
                                <Title animate={verticalAnimation} >Tempor Lorem id sunt voluptate.</Title>
                                <Subtitle animate={verticalAnimation} >Dolore culpa do occaecat elit occaecat laboris ea tempor sit Lorem ad exercitation sint quis. Mollit proident irure sint sunt laboris aliquip commodo ea quis tempor. Pariatur reprehenderit duis est non sit dolor id reprehenderit fugiat deserunt aliquip elit sit. Sit esse nulla tempor elit non sit dolor esse non aliquip est adipisicing.</Subtitle>
                                <StartButton animate={buttonAnimation} >Get Started</StartButton>
                                <motion.button animate={buttonAnimation} >Voir la documentation</motion.button>
                        </TextContainer>
                        <Image
                                animate={horizontalAnimation}
                                transition={{ duration: 0.5 }}
                                src={landingImg} alt='Landing image'
                        />
                </Container>
        )
}
const Image = styled(motion.img)`
        width: 50vw;
`
const Container = styled.div`
        display: flex;
        flex-direction: row;
`
const Title = styled(motion.h1)`
        font-size: 3rem;
        font-weight: 600;
`
const Subtitle = styled(motion.p)`
        color : dimgrey
`
const TextContainer = styled.div`
        margin-left: 100px;
`
const StartButton = styled(motion.button)`
        background-color: ${props => props.theme.colors.primary};
        color:  white;
        margin-right : 20px;
`
export default Landing
