import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { toast } from "react-toastify";
import { toastErr } from "../utils/toast";
import CatchError from "../utils/catchErr";

export const signup = (data:{
    email: string,
    password: string,
    confirmPassword: string,
}) => {
    const { email, password, confirmPassword } = data;
    if (email && password){
        if (password === confirmPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
            }).catch((error) => CatchError(error));
        } else {
            toastErr('Passwords do not match!');
        }
    } else {
        toastErr('Please fill all fields');
    } 
};