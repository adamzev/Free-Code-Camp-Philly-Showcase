import user1 from './user1'
import { user2 } from './user2.js'
import userSC from './userSC.js'
import rodriguezangel from './rodriguezangel.js'
import danmulvihill from './danmulvihill.js'
const data = {
  users: [user1, user2, rodriguezangel, danmulvihill, userSC],
  allUsers: function() {
    return this.users
  },
  user: function(member) {
    const isUser = u => u.username === member
    return this.users.find(isUser)
  },
}

export default data
