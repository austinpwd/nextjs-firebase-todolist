import { useAuth } from "libs/hooks";
import { useRouter } from "next/dist/client/router";
import { signOut } from "@firebase/auth";

import { auth } from "libs/firebase";
import { IoPersonCircleSharp } from "react-icons/io5";
import { LoginStatus } from "./styles";

function UserLoginStatus({ size, color, status, ...props }) {
  //Conditional render logged in
  const user = useAuth();
  const router = useRouter();
  //Logout Click Handler
  function handleClick() {
    signOut(auth)
    .then(() => {
      //sign out cleanup
      router.push('/')
    })
  }

  if (user) {
    return (
      <LoginStatus {...props} onClick={handleClick} bgcolor="green"> 
      <IoPersonCircleSharp size={size || "1.75rem"} />
      <figcaption>
        <p>user display name</p>
        <p>logout</p>
      </figcaption>
    </LoginStatus>
    )
  }

  return (
    <LoginStatus>
      <IoPersonCircleSharp size={size || "1.75rem"} />
      <figcaption>
        <p>Status</p>
        <p>please login</p>
      </figcaption>
    </LoginStatus>
  );
}

export default UserLoginStatus;
