import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

export default combineReducers({
    form,
});
// import email from './emailReducer';
// import password from './passwordReducer';
// import passwordConfirmation from './passwordConfirmationReducer';

// export default combineReducers({
//   myEmail: email,
//   myPassword: password,
//   myPasswordConfirmation: passwordConfirmation
//
// })
