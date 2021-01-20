import React, { useState } from 'react'

import { WizardsCardContainer, DataForm } from '../../styles/components/WizardsTemplate'

import CardBack from './CardBack'
import CardFront from './CardFront'

const WizardsTemplate = () => {
  const [name, setName] = useState('Magic Crossbow')
  const [shortDescription, setShortDescription] = useState('Awesome magic crossbow!')
  const [description, setDescription] = useState('Awesome magic crossbow! Awesome magic crossbow! Awesome magic crossbow! Awesome magic crossbow! Awesome magic crossbow!')
  const [type, setType] = useState('Crossbow')

  return (
    <>
      <DataForm>
        <div>
          <label htmlFor="name">Nome do item</label>
          <input
            id="name"
            placeholder="Magic Crossbow"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="shortDescription">Descrição curta</label>
          <textarea
            id="shortDescription"
            placeholder="Magic Crossbow"
            type="text"
            rows="8"
            maxLength="198"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            type="text"
            rows="8"
            maxLength="375"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="name">Tipo</label>
          <input
            id="type"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
      </DataForm>

      <WizardsCardContainer>
        <CardFront name={name} />
        <CardBack name={name} shortDescription={shortDescription} description={description} type={type} />
      </WizardsCardContainer>
    </>
  )
}

export default WizardsTemplate
