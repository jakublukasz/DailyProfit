import { createContext, useContext, useState } from "react";
import { db } from "../services/firebase";
import { useAuth } from "../contexts/AuthContext";

const FirestoreContext = createContext({});

export const useFirestore = () => {
  return useContext(FirestoreContext);
};

export const FirestoreContextProvider = ({ children }) => {
  const [isConfigured, setIsConfigured] = useState(true);
  const { currentUser } = useAuth();

  const createUserData = ({ email, uid }) => {
    const userDoc = db.collection("users").doc(uid);
    const userData = {
      uid,
      email,
      isConfigured: false,
    };
    userDoc.set(userData);
  };

  const setupUserData = (setupData) => {
    const userRef = db.collection("users").doc(currentUser.uid);
    userRef.update(setupData);
  };

  const getUserData = async () => {
    const userRef = db.collection("users").doc(currentUser.uid);
    const doc = await userRef.get();
    return doc.data();
  };

  const checkIsUserConfigured = async () => {
    const data = await getUserData();
    const { isConfigured } = data;
    setIsConfigured(isConfigured);
  };

  const ctx = {
    createUserData,
    isConfigured,
    setIsConfigured,
    setupUserData,
    checkIsUserConfigured,
    getUserData,
  };

  return (
    <FirestoreContext.Provider value={ctx}>
      {children}
    </FirestoreContext.Provider>
  );
};
