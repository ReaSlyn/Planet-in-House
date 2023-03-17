import styled from 'styled-components'

import PlanetImage from '../../components/PlanetImage'

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 300px);
`

export const ErrorText = styled.h1`
  ${(props) => ({ ...props.theme.typography.h1 })};
  color: ${(props) => props.theme.palette.colors.tomato};
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  ${(props) => props.theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
  align-items: center;
`

export const ImageContainer = styled(PlanetImage)``

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.colors.darkGrey};
  border: 1px solid ${(props) => props.theme.palette.colors.borderGrey};
  width: 100%;
  height: min-content;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.h1`
  ${(props) => ({ ...props.theme.typography.h1 })};
  color: ${(props) => props.theme.palette.colors.pureWhite};
  margin-bottom: 24px;
`

export const Subtitle = styled.h2`
  ${(props) => ({ ...props.theme.typography.h3 })};
  color: ${(props) => props.theme.palette.colors.pureWhite};
  margin-bottom: 4px;
`

export const Text = styled.p`
  ${(props) => ({ ...props.theme.typography.largeRegular })};
  color: ${(props) => props.theme.palette.colors.pureWhite};
`

export const Stat = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 8px;
`

export const Item = styled.li`
  ${(props) => ({ ...props.theme.typography.largeRegular })};
  color: ${(props) => props.theme.palette.colors.pureWhite};
  list-style-type: none;
`
