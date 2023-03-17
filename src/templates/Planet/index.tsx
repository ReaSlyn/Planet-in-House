import React, { FC, useEffect, useState } from 'react'

import * as SC from './styled'
import { useParams } from 'react-router-dom'
import { Planets } from '../../components/PlanetImage/types'

import { PlanetTemplateProps, PlanetInfoProps } from './types'
import { Helmet } from 'react-helmet-async'

const PlanetTemplate: FC<PlanetTemplateProps> = (props) => {
  const { id } = useParams() as { id: string }
  const [planet, setPlanet] = useState<PlanetInfoProps>({} as PlanetInfoProps)
  const [error, setError] = useState(false)

  async function getPlanetInfo() {
    try {
      const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setPlanet(data)
      console.log(data)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }

  useEffect(() => {
    getPlanetInfo()
  }, [])

  if (error) {
    return (
      <>
        <Helmet>
          <title>Planète inconnue - Planet in House</title>
          <meta
            name="description"
            content="Cette planète n'est pas répertorié dans le système solaire"
          />
        </Helmet>
        <SC.ErrorContainer>
          <SC.ErrorText>
            Cette planète n&apos;est pas répertorié dans le système solaire
          </SC.ErrorText>
        </SC.ErrorContainer>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>
          {planet?.name ? planet.name + ' - ' : 'Planète particulière - '}Planet in House
        </title>
        <meta
          name="description"
          content="Découvrez des informations utiles sur cette planète particulière"
        />
      </Helmet>
      <SC.Column>
        <SC.Content>
          <SC.ImageContainer planet={Planets[planet.englishName as Planets]} />
          <SC.Info>
            <SC.Title>{planet.name}</SC.Title>
            <SC.Subtitle>Informations utiles</SC.Subtitle>
            <SC.Text>
              Découvert{['Venus', 'Earth'].includes(planet?.englishName as string) ? 'e' : null} en{' '}
              {planet?.discoveryDate ? planet.discoveryDate : '??/??/????'} par{' '}
              {planet?.discoveredBy ? planet.discoveredBy : '???'}
            </SC.Text>
            <SC.Stat>
              <SC.Item>
                Masse: {planet.mass?.massValue}^{planet.mass?.massExponent}
              </SC.Item>
              <SC.Item>Densité: {planet.density}g/cm³</SC.Item>
              <SC.Item>Gravité: {planet.gravity}m/s²</SC.Item>
              <SC.Item>Température en moyenne: {planet.avgTemp}°F</SC.Item>
            </SC.Stat>
          </SC.Info>
        </SC.Content>
        <SC.Info>
          <SC.Subtitle>Satellites</SC.Subtitle>
          <SC.Text>Nombre: {planet.moons?.length || 0}</SC.Text>
          {planet.moons?.length && (
            <SC.Stat>
              {planet.moons?.map((moon, i) => (
                <SC.Item key={i}>{moon.moon}</SC.Item>
              ))}
            </SC.Stat>
          )}
        </SC.Info>
      </SC.Column>
    </>
  )
}

export default PlanetTemplate
