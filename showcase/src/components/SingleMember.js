import React from 'react'
import UserCard from './UserCard'
import data from '../data/dataIndex.js'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ProjectCardList from './ProjectCardList'

const style = {
  marginTop: {
    marginTop: '1rem',
  },
}

const SingleMember = props => {
  const member = data.user(props.match.params.member)
  if (!member) {
    return <div>No such member</div>
  }
  return (
    <div>
      <Grid.Column key={member.username}>
        <UserCard
          image={member.image}
          username={member.username}
          tagline={member.tagline}
          bio={member.bio}
          projects={member.projects}
        />
      </Grid.Column>
      <ProjectCardList items={member.projects} />
      <div style={style.marginTop}>
        <Link to="/members">Back to members page</Link>
      </div>
    </div>
  )
}

export default SingleMember
