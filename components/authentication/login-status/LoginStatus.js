import { useAuth } from "libs/hooks/useAuth";
import { useRouter } from "next/dist/client/router";
import { signOut } from "@firebase/auth";
import { auth } from "libs/firebase";
import { IoPersonCircleSharp } from "react-icons/io5";
import { LoginStatus } from "./styles";

function UserLoginStatus({ size, color, status, ...props }) {
  const user = useAuth();
  const router = useRouter();
  function handleClick() {
    signOut(auth).then(() => {
      router.push("/");
    });
  }

  if (user) {
    return (
      <LoginStatus {...props} onClick={handleClick} bgcolor="lightgrey">
        <IoPersonCircleSharp
          size={size || "1.75rem"}
          color={color || "green"}
        />
        <figcaption>
          <p>Logged In</p>
          <p>Logout</p>
        </figcaption>
      </LoginStatus>
    );
  }

  return (
    <LoginStatus bgcolor="lightgrey">
      <IoPersonCircleSharp size={size || "1.75rem"} />
      <figcaption>
        <p>Logged Out</p>
        <p>Please Login</p>
      </figcaption>
    </LoginStatus>
  );
}

export default UserLoginStatus;
