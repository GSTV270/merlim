import React from 'react'
import PropTypes from 'prop-types'
import {
  Header,
  HeaderTitle,
  HeaderDescription,
  Body,
  Footer,
  CardContainer
} from '../../../styles/components/WizardsTemplate/CardBack'

const WizardsCardBack = ({ name, shortDescription, description, type }) => {
  return (
    <CardContainer>
      <Header>
        <HeaderTitle>
          <strong>{name}</strong>
        </HeaderTitle>
        <HeaderDescription>
          {shortDescription}
        </HeaderDescription>
      </Header>
      <Body>
        {description}
      </Body>
      <Footer>
        <strong>{type}</strong>
      </Footer>
    </CardContainer>
  )
}

WizardsCardBack.propTypes = {
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default WizardsCardBack
