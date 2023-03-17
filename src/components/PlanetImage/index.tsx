import React, { FC, memo } from 'react'

import * as planets from './planets'
import * as SC from './styled'
import { PlanetImageProps } from './types'

const PlanetImage: FC<PlanetImageProps> = ({ planet, style, className }) => {
  const planetImageProps: any = planets[planet]
  if (!planetImageProps) {
    console.warn('Planet missing :', planetImageProps)
    return null
  }

  return <SC.Img className={className} src={planetImageProps} alt={planet} style={style} />
}

export default memo(PlanetImage)
