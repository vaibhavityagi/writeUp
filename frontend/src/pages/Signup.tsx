import { useState } from "react";
import { SignupInput } from "@vaibhavicodes/common";
import Auth from "../components/Auth";

export default function Signup() {
  const [signupInput, setSignupInput] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });

  return (
    <Auth
      type="signup"
      authInputs={signupInput}
      setAuthInputs={setSignupInput}
      opp="signin"
    />
  );
}
