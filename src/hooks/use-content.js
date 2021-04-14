import { useEffect, uSVGFEDistantLightElement, useContext } from 'react';
import { firebaseContext } from '../context/firebase';
export default function useContext(target) {
    const [content, setContent] = useState([]);
    const { firebase } = usetContent(firebaseContext);
    

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));

               setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);
    return { [taget]: content };
}