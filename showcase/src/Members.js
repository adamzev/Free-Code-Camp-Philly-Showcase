import React from 'react'
import UserCard from './components/UserCard'
import data from './data/data.js'

const Members = () => {
  return (
    // <UserCard
    //   image="http://via.placeholder.com/180x320"
    //   username="Test User"
    //   tagline="Came for the code, stayed for the code"
    //   bio="I am a human being. No really I am totally not a computer"
    //   projects={['project1', 'project2', 'project3']}
    // />
    data.map(({ image, username, tagline, bio, projects }) => {
      return (
        <UserCard
          image={image}
          username={username}
          tagline={tagline}
          bio={bio}
          projects={projects}
        />
      )
    })
  )
}

export default Members
