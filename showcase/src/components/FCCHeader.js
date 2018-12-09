import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Divider } from 'semantic-ui-react'

const FCCHeader = () => (
  <div>
    <Link to="/">
      <Header
        as="h1"
        textAlign="center"
        image="/assets/images/logo.png"
        content="Free Code Camp Philly Showcase"
      />
    </Link>
    <Divider />
  </div>
)

export default FCCHeader
