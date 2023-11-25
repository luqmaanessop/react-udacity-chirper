export const RECEIVE_USERS = "RECIEVE_USERS";

export default function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}
