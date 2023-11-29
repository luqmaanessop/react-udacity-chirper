import {connect} from 'react-redux'
import {formatTweet, formatDate} from '../utils/helpers';
import {TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline} from 'react-icons/ti';
import { handleToggleTweet } from "../actions/tweets";
import { Link,useNavigate } from 'react-router-dom';

const Tweet = (props) => {
  const navigate = useNavigate();
  const handleLike = (e) => {
    e.preventDefault();

    const { dispatch, tweet, authedUser } = props;

    dispatch(
      handleToggleTweet({
        id: tweet.id,
        hasLiked: tweet.hasLiked,
        authedUser,
      })
    );
  };

  const toParent = (e, id) => {
    e.preventDefault();

    navigate(`/tweet/${id}`);
  }

  if(props.tweet == null) {
    <p>This tweet does not exist!</p>
  }

  const {name, avatar, timestamp, text, hasLiked, parent, likes, replies, id} = props.tweet;
  return (
    <Link to={`/tweet/${id}`} className='tweet'>
      <img src={avatar} alt={`Avatar of ${avatar}`} className='avatar'></img>
      <div className="tweet-info">
      <div>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={(e) => toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
        </div>
        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button className="heart-button" onClick={handleLike}>
            {hasLiked === true ? (
              <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>
          </div>
      </div>
    </Link>
  )
}

const mapStateToProps = ({authedUser, tweets, users}, {id}) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser: authedUser,
    tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
  }
}

export default connect(mapStateToProps)(Tweet);
