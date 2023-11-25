import combineReducers from 'react';
import tweets from './tweets';
import users from './users';
import authedUser from './authedUser';

export default combineReducers({
  tweets: tweets,
  users: users,
  authedUser: authedUser,
})
