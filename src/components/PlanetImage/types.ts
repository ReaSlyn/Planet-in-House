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

export type PlanetImageProps = {
  className?: string
  planet: Planets
  style?: React.CSSProperties
}
