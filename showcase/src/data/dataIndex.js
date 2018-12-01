import user1 from './user1'
import { user2 } from './user2.js'
import user3 from './user3.js'
import user4 from './user4.js'
import danmulvihill from './danmulvihill.js'

const data = {
  users: [user1, user2, user3, user4, danmulvihill],
  allUsers: function() {
    return this.users
  },
  user: function(member) {
    const isUser = u => u.username === member
    return this.users.find(isUser)
  },
}

export default data
