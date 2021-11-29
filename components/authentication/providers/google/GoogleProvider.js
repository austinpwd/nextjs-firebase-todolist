import Image from 'next/image'
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import {auth} from '/libs/firebase'
import { useAuth } from 'libs/hooks/useAuth';
import { ProviderButton } from "ui/buttons";
import google from "./google.png";

function GoogleProvider({ children,  ...props }) {
const [isValidUser, setIsValidUser] = useState(null)
 const user = useAuth();
 const router = useRouter();
 const provider = new GoogleAuthProvider()

 async function signIn() {
   setIsValidUser(await signInWithPopup(auth, provider))
 }

 function handleClick() {
   signIn()
 }

 if(isValidUser) {
   router.push('/todo')
 }

  return (
    <ProviderButton {...props} onClick={handleClick}>
      <div>
        <Image
          src={google}
          alt="Login using Google"
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span>{children}</span>
      </div>
    </ProviderButton>
  );
}

export default GoogleProvider;
