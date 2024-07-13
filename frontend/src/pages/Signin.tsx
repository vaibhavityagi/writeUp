import { useRecoilState } from "recoil";
import ButtonWarning from "../components/ButtonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { signinAtom } from "../store/atoms/signin";
import { ChangeEvent } from "react";

export default function Signin() {
  const [signinInput, setSigninInput] = useRecoilState(signinAtom);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log([evt.target.name]);
    setSigninInput({
      ...signinInput,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <div className="flex justify-center h-dvh bg-slate-300">
      <div className="w-80 rounded-lg border bg-white p-3 m-auto h-max">
        <Heading label="Welcome back" />
        <ButtonWarning
          label="Don't have an account?"
          buttonText="SignUp"
          to="/signup"
        />
        <InputBox
          type="email"
          label="Email"
          id="email"
          onChange={handleChange}
          value={signinInput.email}
        />
        <InputBox
          type="password"
          label="Password"
          id="password"
          onChange={handleChange}
          value={signinInput.password}
        />
      </div>
    </div>
  );
}
