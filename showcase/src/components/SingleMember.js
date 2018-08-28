import React from 'react'
import UserCard from './UserCard'
import data from '../data/dataIndex.js'
import { Grid } from 'semantic-ui-react'

const SingleMember = props => {
  const member = data.user(props.match.params.member)
  if (!member) {
    return <div>No such member</div>
  }
  return (
    <Grid.Column key={member.username}>
      <UserCard
        image={member.image}
        username={member.username}
        tagline={member.tagline}
        bio={member.bio}
        projects={member.projects}
      />
    </Grid.Column>
  )
}

// const SingleMember = () => {
//   return data.user(1).map(({ image, username, tagline, bio, projects }) => {
//     return (
//       <Grid.Column key={username}>
//         <UserCard
//           image={image}
//           username={username}
//           tagline={tagline}
//           bio={bio}
//           projects={projects}
//         />
//       </Grid.Column>
//     )
//   })
// }

export default SingleMember
