import { useEffect } from "react";
import { connect } from "react-redux";
import {handleInitialData} from "../actions/shared";
import Dashboard from "./Dashboard";
import TweetPage from "./TweetPage";
import NewTweet from './NewTweet';
import LoadingBar from 'react-redux-loading-bar';

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <LoadingBar />
      {props.loading ? null : <TweetPage match={{params: {id: "hbsc73kzqi75rg7v1e0i6a" }}}/>}
    </div>
  );
};

const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null,
})

export default connect(mapStateToProps)(App);
