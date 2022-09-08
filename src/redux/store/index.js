import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

function reducers() {
    return{
        testing:''
    };
}

const redux =  () => {
    return{
        ...createStore(reducers, applyMiddleware(thunk))
    };
};

export default redux