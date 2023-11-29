import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {handleInitialData} from "../actions/shared";
import Dashboard from "./Dashboard";
import TweetPage from "./TweetPage";
import NewTweet from './NewTweet';
import LoadingBar from 'react-redux-loading-bar';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';


const App = (props) => {
  useEffect(() => {
    console.log('app mount')
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav/>
        {props.loading ? null :
          (<Routes>
            <Route path="/" exact element={<Dashboard/>} />
            <Route path="/tweet/:id" element={<TweetPage/>} />
            <Route path="/new" exact element={<NewTweet/>} />
          </Routes>)
        }
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null,
})

export default connect(mapStateToProps)(App);
