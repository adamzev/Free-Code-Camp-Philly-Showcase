import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = ({ image, username, tagline, bio, projects }) => (
  <Card centered>
    <Card.Content>
      <Image src={image} centered circular />
    </Card.Content>
    <Card.Content>
      <Card.Header>{username}</Card.Header>
      <Card.Meta>
        <span className="tagline">{tagline}</span>
      </Card.Meta>
      <Card.Description>{bio}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="file code outline" />
      {projects.length} projects
    </Card.Content>
  </Card>
)

export default UserCard
