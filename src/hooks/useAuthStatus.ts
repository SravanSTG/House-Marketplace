import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [checkingStatus, setCheckingStatus] = useState<boolean>(true);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    })
  })

  return { loggedIn, checkingStatus };
}