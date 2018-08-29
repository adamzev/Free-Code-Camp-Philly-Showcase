import React from 'react'
import { Header, Divider } from 'semantic-ui-react'

const FCCHeader = () => (
  <div>
    <Header
      as="h1"
      textAlign="center"
      image="/assets/images/logo.png"
      content="Free Code Camp Philly Showcase"
    />
    <Divider />
  </div>
)

export default FCCHeader
