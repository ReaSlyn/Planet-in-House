import styled from 'styled-components'

import { InputBase } from '@material-ui/core'

export const Title = styled.h1`
  ${(props) => ({ ...props.theme.typography.h1 })}
  color: ${(props) => props.theme.palette.colors.pureWhite};
  text-align: center;
  margin-bottom: 40px;
`

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 40px;
`

export const Label = styled.label`
  ${(props) => ({ ...props.theme.typography.largeRegular })}
  color: ${(props) => props.theme.palette.colors.pureWhite};
`

export const Input = styled(InputBase)((props) => ({
  '& .MuiInputBase-input': {
    borderRadius: 8,
    backgroundColor: props.theme.palette.colors.darkGrey,
    color: props.theme.palette.colors.pureWhite,
    border: '1px solid ' + props.theme.palette.colors.borderGrey,
    fontSize: 18,
    width: '100%',
    padding: '18.5px 16px',
    transition: props.theme.transitions.create(['border-color']),
    fontFamily: 'Lato',
    '&:focus': {
      borderColor: props.theme.palette.colors.lightBlue,
    },
  },
}))

export const PlanetCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`
