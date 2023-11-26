import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers';

const Tweet = (props) => {
  console.log('tweetprops:', props);

  if(props.tweet == null) {
    <p>This tweet does not exist!</p>
  }
  return (
    <div className='tweet'>The tweetie</div>
  )
}

const mapStateToProps = ({authedUser, tweets, users}, {id}) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser: authedUser,
    tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, tweets[parentTweet]) : null
  }
}

export default connect(mapStateToProps)(Tweet);
