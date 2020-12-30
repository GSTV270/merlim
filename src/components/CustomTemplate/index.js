import React from 'react'

import { Container, Header, Description } from '../../styles/components/CustomTemplate'
import dndLogo from '../../../assets/dnd-logo.png'

const CustomTemplateCard = () => {
  return (
    <Container>
      <Header>
        <h2>Awesome Crossbow</h2>
        <strong>Awesome magic crossbow!</strong>
      </Header>
      <img src={dndLogo} alt=""/>
      <Description>
        Hello there Hello there Hello there Hello there Hello there Hello there Hello there there Hello there Hello there Hello there Hello there Hello there Hello t there Hello there Hello there Hello there Hello there Hello there Hello t
      </Description>
    </Container>
  )
}

export default CustomTemplateCard
