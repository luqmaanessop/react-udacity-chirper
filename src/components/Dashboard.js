import {connect} from 'react-redux';
import Tweet from './Tweet';

const Dashboard = (props) => {
  console.log("props:", props)
  return <div>
    <h3 className='center'>Your timeline:</h3>
    <ul>
      {
        props.tweetIds.map((id)=>(
          <Tweet key={id} id={id}/>
        ))
      }
    </ul>
  </div>
}

const mapStateToProps = (state) => ({
  tweetIds: Object.keys(state.tweets).sort((a, b) => state.tweets[b] - state.tweets[a])
})

export default connect(mapStateToProps)(Dashboard);
