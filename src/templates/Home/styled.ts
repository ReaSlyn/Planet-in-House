import styled from 'styled-components'

import Icon from '../../components/Icon'

export const Content = styled.div`
  flex-grow: 1;
  background-color: ${(props) => props.theme.palette.colors.black};
  ${(props) => props.theme.breakpoints.up('md')} {
    flex-grow: initial;
  }
`

export const Title = styled.h3`
  ${(props) => ({ ...props.theme.typography.h3 })}
  color: ${(props) => props.theme.palette.colors.pureWhite};
  margin: 0rem 0 0.5rem 0;
`

export const Text = styled.p`
  ${(props) => ({ ...props.theme.typography.smallRegular })}
  color: ${(props) => props.theme.palette.colors.chambray};
  margin: 0rem 0 1rem 0;
`

export const IconContainer = styled(Icon)``
