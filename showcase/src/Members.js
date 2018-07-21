import React from 'react'
import UserCard from './components/UserCard'
import data from './data/data.js'

const Members = () => {
  return data.map(({ image, username, tagline, bio, projects }) => {
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
}

export default Members
