import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { toast } from "react-toastify";
import { toastErr, toastSucc } from "../utils/toast";
import CatchError from "../utils/catchErr";
import { authDataType, setLoadingType } from "../Types";

export const signup = (data:authDataType, 
    setLoading: setLoadingType,
    reset: () => void
) => {
    setLoading(true);
    const { email, password, confirmPassword } = data;
    if (email && password){
        if (password === confirmPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                setLoading(false);
                reset();
                toastSucc('Account created successfully!')
            }).catch((error) => {
                CatchError(error);
                setLoading(false);
            });
        } else {
            toastErr('Passwords do not match!');
            setLoading(false);
        }
    } else {
        toastErr('Please fill all fields');
        setLoading(false);
    } 
    setLoading(false);
};


export const signIn = (data:authDataType, 
    setLoading: setLoadingType,
    reset: () => void
) => {
    const {email, password} = data;

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            setLoading(false);
            reset();
            toastSucc('Logged in successfully!')
        }).catch((error) => {
            CatchError(error);
            setLoading(false);
        });
};