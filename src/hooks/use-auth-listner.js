import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('authUser'))
    );
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listner = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(autUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setuser(null);
            }
        });

        return () => listner();
    }, []);
}