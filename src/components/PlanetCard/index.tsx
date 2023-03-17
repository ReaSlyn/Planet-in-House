import React, { FC, memo } from 'react'

import * as SC from './styled'
import { PlanetCardProps } from './types'

import { Planets } from '../PlanetImage/types'

const PlanetCard: FC<PlanetCardProps> = ({ planet }) => {
  const renderPlanetCard = () => {
    return (
      <SC.PlanetLink to={`/planet/${planet.id}`}>
        <SC.PlanetCardContainer>
          <SC.PlanetImageContainer planet={Planets[planet.englishName]}></SC.PlanetImageContainer>
          <SC.PlanetName>{planet.name}</SC.PlanetName>
        </SC.PlanetCardContainer>
      </SC.PlanetLink>
    )
  }

  return renderPlanetCard()
}

export default memo(PlanetCard)
