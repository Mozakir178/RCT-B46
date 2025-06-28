import { addDoc, collection, getDoc, updateDoc } from "firebase/firestore";
import { dummyData } from "./dummy_food_items_100";
import { db } from "./firebase";


function AddData() {

    const handleClick = async () => {
        for (let i = 0; i < dummyData.length; i++) {
            let currData = dummyData[i];
            // push currData to fireStore
            const ref = await addDoc(collection(db, "menuItems"), currData);
            console.log("item got added" , ref) ;

// axios -> post -> firestore add -> res 
            // updateDoc 
            // getDoc 
            // getDocs 
            // deleteDc 
            //addDoc(collection)
            // collection -> direct to the collection in firestore
        }
    }

    return (<>

        <button onClick={handleClick}>Add Data</button>
    </>)

}

export default AddData;

// addDoc(collection('menuItems' ,db ) , data) -> it will push one item to the firestore