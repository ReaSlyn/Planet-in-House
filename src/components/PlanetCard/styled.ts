import styled from 'styled-components'
import PlanetImage from '../../components/PlanetImage'
import { Link } from 'react-router-dom'

export const PlanetCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  background-color: ${(props) => props.theme.palette.colors.darkGrey};
  border: 1px solid ${(props) => props.theme.palette.colors.borderGrey};
`

export const PlanetImageContainer = styled(PlanetImage)``

export const PlanetName = styled.h2`
  ${(props) => ({ ...props.theme.typography.h3 })}
  color: ${(props) => props.theme.palette.colors.pureWhite};
  margin: 8px 0;
`

export const PlanetLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`
