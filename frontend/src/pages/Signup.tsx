import { useRecoilState } from "recoil";
import ButtonWarning from "../components/ButtonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { signupAtom } from "../store/atoms/signup";
import { ChangeEvent } from "react";

export default function Signup() {
  const [signupInput, setSignupInput] = useRecoilState(signupAtom);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log([evt.target.name]);
    setSignupInput({
      ...signupInput,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <div className="flex justify-center h-dvh bg-slate-300">
      <div className="w-80 rounded-lg border bg-white p-3 m-auto h-max">
        <Heading label="Create an account" />
        <ButtonWarning
          label="Already have an account?"
          buttonText="Login"
          to="/signin"
        />
        <InputBox
          type="text"
          label="Username"
          id="username"
          onChange={handleChange}
          value={signupInput.username}
        />
        <InputBox
          type="email"
          label="Email"
          id="email"
          onChange={handleChange}
          value={signupInput.email}
        />
        <InputBox
          type="password"
          label="Password"
          id="password"
          onChange={handleChange}
          value={signupInput.password}
        />
      </div>
    </div>
  );
}
