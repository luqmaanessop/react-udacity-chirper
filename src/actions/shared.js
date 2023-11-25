import {getInitialData} from '../utils/api';
import { receiveUsers } from './users';
import {receiveTweets} from './tweets';
import {setAuthedUsed} from './authedUser';

const AUTHED_ID = 'sarah_edo';

export function handleInitialData () {
  return (dispatch) => {
    getInitialData().then.apply(({users, tweets})=> {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUsed(AUTHED_ID));
    })
  }
}
