import React from 'react'
import {
  Header,
  Body,
  Picture,
  Title,
  CardContainer
} from '../../styles/components/cardFront'
import dndLogo from '../../../assets/dnd-logo.png'

const CardFront = () => {
  return (
    <CardContainer>
      <Header>
        <strong>Dungeons & Dragons</strong>
      </Header>
      <Body>
        <Picture>
          <img
            src={dndLogo}
          />
        </Picture>
        <Title>
          <strong>Crossbow</strong>
        </Title>
      </Body>
    </CardContainer>
  )
}

export default CardFront
