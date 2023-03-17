import React, { FC } from 'react'
import cx from 'classnames'

import * as SC from './styled'

import { Icons } from '../../components/Icon/types'

export type LayoutProps = {
  className?: string
  header?: React.ReactNode
  footer?: React.ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  const { children, className, header = null, footer = null } = props

  return (
    <SC.Container className={cx(className)}>
      <SC.Content>
        <SC.LogoLink to="/" style={{ maxWidth: '220px' }}>
          <SC.IconContainer icon={Icons.logo} />
        </SC.LogoLink>

        <>{header}</>
        {children}
        <>{footer}</>
      </SC.Content>
    </SC.Container>
  )
}

export default Layout
