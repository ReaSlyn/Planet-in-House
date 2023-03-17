import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import defaultExport from '../../../.storybook/config/defaultExport'

import HomeTemplate from './index'
import { HomeTemplateProps } from './types'

export default defaultExport({
  title: 'Templates/Home',
  component: HomeTemplate,
  parameters: {
    backgrounds: {
      default: 'black',
    },
  },
})

const Template: Story<HomeTemplateProps> = (args) => <HomeTemplate {...args} />

export const Default = Template.bind({})
