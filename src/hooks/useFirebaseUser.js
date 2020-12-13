import { useState, useEffect } from 'react';
import firebase from 'firebase';

const useFirebaseUser = () => {
    const [ authenticatedUser, setAuthenticatedUser ] =  useState(null);
    const { auth } = firebase;

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            
        if(user) {
            setAuthenticatedUser(user)
            } else {
                setAuthenticatedUser(null);
            }
        })
        return () => unsubscribe();
    })
    return authenticatedUser;
}

export default useFirebaseUser;

