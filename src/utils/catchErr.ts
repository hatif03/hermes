import { toastErr, toastInfo } from "./toast";

const CatchError = (error:{code?: string}) => {
    const { code } = error;
    console.log(code);
    switch (code) {
        case 'auth/invalid-email':
            toastErr('Invalid email address')
            break;

        case 'auth/weak-password':
            toastErr('Password should be atleast 6 characters')
            break;

        case 'auth/user-not-found':
            toastErr('User not found')
            break;

        case 'auth/email-already-in-use':
            toastErr('Email already in use')
            break;

        case 'auth/wrong-password':
            toastErr('Wrong password')
            break;

        case 'auth/requires-recent-login':
            toastInfo('Logout and then login again')
            break;
    
        default:
            toastErr('An error occured')
            break;
    }
};

export default CatchError;