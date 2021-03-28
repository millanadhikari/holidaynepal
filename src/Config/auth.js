import firebase from './firebase'
import { actionTypes } from './reducer';

const socialMediaAuth=(provider)=>{
   return  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result)=>{
        return({
            type:actionTypes.SET_USER,
            user:result.user
        });
    })
    .catch((error)=>{
        return error;
    })
}
export default socialMediaAuth;