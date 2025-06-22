
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addIdea = async (idea) => {
  await addDoc(collection(db, "ideas"), { ...idea, createdAt: Date.now() });
};

export const listenToIdeas = (callback) => {
  return onSnapshot(collection(db, "ideas"), (snapshot) => {
    const ideasArray = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(ideasArray);
  });
};

export const deleteIdea = async (id) => {
  await deleteDoc(doc(db, "ideas", id));
};

export const updateIdea = async (id, updatedData) => {
  await updateDoc(doc(db, "ideas", id), updatedData);
};
