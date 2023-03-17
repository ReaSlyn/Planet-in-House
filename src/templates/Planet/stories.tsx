import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { MemoryRouter, Route } from 'react-router-dom'

import defaultExport from '../../../.storybook/config/defaultExport'

import PlanetTemplate from './index'
import { PlanetTemplateProps } from './types'

export default defaultExport({
  title: 'Templates/Planet',
  component: PlanetTemplate,
  parameters: {
    backgrounds: {
      default: 'black',
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/planet/earth']}>
        <Route path="/planet/:id">
          <Story />
        </Route>
      </MemoryRouter>
    ),
  ],
})

const Template: Story<PlanetTemplateProps> = (args) => <PlanetTemplate {...args} />

export const Default = Template.bind({})
