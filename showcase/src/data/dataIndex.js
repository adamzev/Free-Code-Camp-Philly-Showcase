import user1 from './user1'
import { user2 } from './user2.js'
import user3 from './user3.js'
import user4 from './user4.js'

const data = {
  users: [user1, user2, user3, user4],
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
* The shuffleArray functions a little weird, I noticed repetition 
* I tried to implement Durstenfield shuffle..got weird.
*/
function shuffleArray(array){
  for (let i = array.length -1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    return array; 
  }
}

export default data
