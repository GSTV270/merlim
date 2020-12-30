import React from 'react'
import {
  Header,
  HeaderTitle,
  HeaderDescription,
  Body,
  Footer,
  CardContainer
} from '../../styles/components/cardBack'

const CardBack = () => {
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
      </Body>
      <Footer>
        <strong>Crossbow</strong>
      </Footer>
    </CardContainer>
  )
}

export default CardBack
