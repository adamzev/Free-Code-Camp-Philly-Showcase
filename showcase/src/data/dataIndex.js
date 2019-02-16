import user1 from './user1'
import { user2 } from './user2.js'
import userSC from './userSC.js'
import rodriguezangel from './rodriguezangel.js'
import danmulvihill from './danmulvihill.js'
import tjallen from './tjallen.js'
import dkh from './dkh.js'


const data = {
  users: [user1, user2, rodriguezangel, danmulvihill, userSC, tjallen, dkh],
  allUsers: function() {
    return this.users
  },
  user: function(member) {
    const isUser = u => u.username === member
    return this.users.find(isUser)
  },
  randomUserList: function(){
    return shuffleArray(this.users);
  },
}

/*an function that takes our users and scrambles the array
* in order to shuffle the order that members are displayed on the 'members page
* -codex
* implement Durstenfield shuffle.
*/
function shuffleArray(array){
  for (let i = array.length -1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

  }
  return array; 

}

export default data
