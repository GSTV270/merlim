import React from 'react';
import {
  Header,
  HeaderTitle,
  HeaderDescription,
  Body,
  Image,
  Footer,
  CardContainer
} from './styles'
import dndLogo from '../../../assets/dnd-logo.png'

const Card = () => {
  return (
    <CardContainer>
      <Header>
        <HeaderTitle>
          <strong>Margic crossbow</strong>
        </HeaderTitle>
        <HeaderDescription>
          Awesome magic crossbow!
        </HeaderDescription>
      </Header>
      <Body>
        Awesome magic crossbow!
        Awesome magic crossbow!
        Awesome magic crossbow!
        Awesome magic crossbow!
        Awesome magic crossbow!

        <Image
          src={dndLogo}
          alt="Dungeons and Dragons logo"
          height={50}
          width={50}
          layout=""
        />
      </Body>
      <Footer>
        <strong>Crossbow</strong>        
      </Footer>
    </CardContainer>
  )
}

export default Card;