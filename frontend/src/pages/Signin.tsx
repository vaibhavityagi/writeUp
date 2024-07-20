import { SignInInput } from "@vaibhavicodes/common";
import { useState } from "react";
import Auth from "../components/Auth";

export default function Signin() {
  const [signinInput, setSigninInput] = useState<SignInInput>({
    email: "",
    password: "",
  });

  return (
    <Auth
      type="signin"
      authInputs={signinInput}
      setAuthInputs={setSigninInput}
      opp="signup"
    />
  );
}
