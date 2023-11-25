import logger from './logger';
import thunk from 'react-thunk';


import {applyMiddleware} from 'react';

export default applyMiddleware(thunk, logger);
