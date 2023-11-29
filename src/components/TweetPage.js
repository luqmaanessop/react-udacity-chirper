import {connect} from 'react-redux';
import Tweet from './Tweet';
import NewTweet from './NewTweet';

const TweetPage = (props) => {
  console.log('propsies', props)
  return (
    <div>
      <Tweet id={props.id}/>
      <NewTweet id={props.id}/>
      {props.replies.length !== 0 && <div><h3 className='center'>Replies:</h3>
      <ul>
      {props.replies.map((replyId) => (
        <li ke={replyId}>
          <Tweet id={replyId}/>
        </li>
      ))}
      </ul>
      </div>}
    </div>
  )
}

const mapStateToProps = ({authedUser, tweets, users}, props) => {
  const {id} = props.match.params;

  return {
    id,
    replies: !tweets[id] ? [] : tweets[id].replies.sort((a, b) => tweets[a].timestamp < tweets[b].timestamp)
  }
}


export default connect(mapStateToProps)(TweetPage);
