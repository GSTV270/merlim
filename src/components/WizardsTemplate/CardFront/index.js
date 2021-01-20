import React from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  Body,
  Picture,
  Title,
  CardContainer
} from '../../../styles/components/WizardsTemplate/CardFront'
import dndLogo from '../../../../assets/dnd-logo.png'

const WizardsCardFront = ({ name }) => {
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
          <strong>{name}</strong>
        </Title>
      </Body>
    </CardContainer>
  )
}

WizardsCardFront.propTypes = {
  name: PropTypes.string.isRequired
}

export default WizardsCardFront
