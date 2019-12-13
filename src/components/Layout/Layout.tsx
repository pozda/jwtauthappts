import React from 'react'

import {StyledLayout} from './LayoutStyles'

interface Props { children?: React.ReactNode; }

const Layout = ({children}: Props) => (<StyledLayout> {children} </StyledLayout>)

export default Layout