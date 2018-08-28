import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import UserCard from './UserCard'
import data from '../data/dataIndex.js'
import { Link } from 'react-router-dom'

const style = {
  paddingTop: {
    paddingTop: '2rem',
  },
}

const renderMemberList = () => {
  return data.allUsers().map(({ image, username, tagline, bio, projects }) => {
    return (
      <Grid.Column key={username} style={style.paddingTop}>
        <Link to={`members/${username}`}>
          <UserCard
            image={image}
            username={username}
            tagline={tagline}
            bio={bio}
            projects={projects}
          />
        </Link>
      </Grid.Column>
    )
  })
}

const MemberList = () => {
  return (
    <Container>
      <Grid doubling stackable columns={3}>
        {renderMemberList()}
      </Grid>
    </Container>
  )
}

export default MemberList
