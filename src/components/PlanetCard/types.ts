import React from 'react'

export enum Planets {
  Earth = 'Earth',
  Mars = 'Mars',
  Mercury = 'Mercury',
  Jupiter = 'Jupiter',
  Neptune = 'Neptune',
  Saturn = 'Saturn',
  Uranus = 'Uranus',
  Venus = 'Venus',
}

export type PlanetCardProps = {
  className?: string
  planet: {
    englishName:
      | 'Mercury'
      | 'Venus'
      | 'Earth'
      | 'Mars'
      | 'Jupiter'
      | 'Saturn'
      | 'Uranus'
      | 'Neptune'
    name: string
    id: string
  }
  style?: React.CSSProperties
}
