import React, { FC, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import PlanetCard from '../../components/PlanetCard'

import * as SC from './styled'

import { HomeTemplateProps, PlanetProps } from './types'

const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  const [search, setSearch] = useState('')
  const [planets, setPlanets] = useState(Array<PlanetProps>())
  const [displayedPlanets, setDisplayedPlanets] = useState(Array<PlanetProps>())

  async function getAllPlanets() {
    try {
      const response = await fetch(
        'https://api.le-systeme-solaire.net/rest/bodies?' +
          new URLSearchParams({ data: 'id,name,englishName', filter: 'isPlanet,eq,true' }),
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const data = await response.json()
      const allPlanets = data.bodies as Array<PlanetProps>
      setPlanets(allPlanets)
      setDisplayedPlanets(allPlanets)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setDisplayedPlanets(
      planets.filter((planet) => {
        return planet.name.toLowerCase().includes(search.toLowerCase())
      })
    )
  }, [search])

  useEffect(() => {
    getAllPlanets()
  }, [])

  return (
    <>
      <Helmet>
        <title>Accueil - Planet in House</title>
        <meta name="description" content="Apprenez-en plus sur les planètes du système solaire" />
      </Helmet>
      <SC.Title>Apprenez-en plus sur les planètes du système solaire</SC.Title>
      <SC.InputContainer>
        <SC.Label htmlFor="planets">Planètes</SC.Label>
        <SC.Input
          id="planets"
          placeholder="Rechercher par nom"
          onChange={(e) => setSearch(e.target.value)}
        />
      </SC.InputContainer>
      <SC.PlanetCardContainer>
        {displayedPlanets?.map((planet: PlanetProps, i: number) => {
          return <PlanetCard planet={planet} key={i} />
        })}
      </SC.PlanetCardContainer>
    </>
  )
}

export default HomeTemplate
