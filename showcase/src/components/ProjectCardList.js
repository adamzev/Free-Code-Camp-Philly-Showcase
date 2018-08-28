import React from 'react'
import { Card } from 'semantic-ui-react'

const ProjectCardList = props => (
  <Card.Group centered items={props.items} style={{ marginTop: '2rem' }} />
)

export default ProjectCardList
