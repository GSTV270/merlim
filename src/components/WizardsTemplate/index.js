import React from 'react'

import { WizardsCardContainer } from '../../styles/components/WizardsTemplate';

import CardBack from './CardBack';
import CardFront from './CardFront';

const WizardsTemplate = () => {
  return (
    <WizardsCardContainer>
      <CardFront />
      <CardBack />
    </WizardsCardContainer>
  )
}

export default WizardsTemplate
