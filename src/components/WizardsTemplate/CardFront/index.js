import React from 'react'
import {
  Header,
  Body,
  Picture,
  Title,
  CardContainer
} from '../../../styles/components/WizardsTemplate/CardFront'
import dndLogo from '../../../../assets/dnd-logo.png'

const WizardsCardFront = () => {
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

export default WizardsCardFront
