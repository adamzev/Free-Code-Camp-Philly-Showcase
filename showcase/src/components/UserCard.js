import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = ({ image, username, tagline, bio, projects }) => (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{username}</Card.Header>
      <Card.Meta>
        <span className="tagline">{tagline}</span>
      </Card.Meta>
      <Card.Description>{bio}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="file code outline" />
        {projects.length} projects
      </a>
    </Card.Content>
  </Card>
)

export default UserCard
