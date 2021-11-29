import { useState, useEffect } from "react";
import {
  FaceBookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup
} from "@firebase/auth";
import {useAuth} from 'libs/firebase/hooks/useAuth'

function useProvider() {
    const user = useAuth();
  const [provider, setProvider] = useState(null);
  useEffect(() => {
    const providerChange = onProviderChanged(user, (authProvider) => {
      if (authProvider) {
        setProvider(authProvider);
      } else {
        setProvider(null);
      }
    });
    return () => providerChange();
  });

  return provider;
}

export { useProvider };
