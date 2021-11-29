import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { FacebookAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "/libs/firebase";
import { useAuth } from "libs/hooks/useAuth";
import { ProviderButton } from "ui/buttons";

import facebook from "./facebook.png";

function FaceBookProvider({ children, ...props }) {
  const [isValidUser, setIsValidUser] = useState(null);
  const user = useAuth();
  const router = useRouter();
  const provider = new FacebookAuthProvider();

  async function signIn() {
    setIsValidUser(await signInWithPopup(auth, provider));
  }

  function handleClick() {
    signIn();
  }

  if (isValidUser) {
    router.push("/todo");
  }

  return (
    <ProviderButton {...props} onClick={handleClick}>
      <div>
        <Image
          src={facebook}
          alt="Login using Facebook"
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />

        <span> {children}</span>
      </div>
    </ProviderButton>
  );
}

export default FaceBookProvider;
