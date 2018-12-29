import data from './dataIndex.js'

it('has data objects with correct properties', () => {
  data.allUsers().forEach(user => {
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('image')
    expect(user).toHaveProperty('username')
    expect(user).toHaveProperty('tagline')
    expect(user).toHaveProperty('bio')
    expect(user).toHaveProperty('projects')
  })
})
