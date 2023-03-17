import styled from 'styled-components'
import { Container as MuiContainer } from '@material-ui/core'
import Icon from '../../components/Icon'
import { Link } from 'react-router-dom'

export const Container = styled(MuiContainer)`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  background: bottom center / cover no-repeat;
  padding-left: 0;
  padding-right: 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    max-width: none;
  }
`

export const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-top: 80px;
  padding-inline: clamp(20px, 5vw, 80px);
`

export const LogoLink = styled(Link)`
  max-width: 299px;
  max-height: 64px;
  margin-bottom: 40px;
  display: block;
`

export const IconContainer = styled(Icon)``
