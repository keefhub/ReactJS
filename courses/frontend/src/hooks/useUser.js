// this file contains custom hook
// const user = useUser(); => immediate access to logged in user access
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //user gna be firebase user obj/null
  useEffect(() => {
    const unsunscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return unsunscribe;
  }, []);

  return { user, isLoading };
};

export default useUser;
