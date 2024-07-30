import ButtonWarning from "../components/ButtonWarning";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { ChangeEvent } from "react";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SignInInput, SignupInput } from "@vaibhavicodes/common";

type AuthProps = {
  authInputs: SignupInput | SignInInput;
  setAuthInputs: any;
  type: string;
  opp: string;
};

export default function Auth({
  authInputs,
  setAuthInputs,
  type,
  opp,
}: AuthProps) {
  const navigate = useNavigate();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setAuthInputs({
      ...authInputs,
      [evt.target.name]: evt.target.value,
    });
  };

  async function handleClick() {
    const res = await axios.post(
      `http://localhost:8787/api/v1/user/${type}`,
      authInputs
    );
    localStorage.setItem("token", res.data.token);
    navigate("/blogs");
  }

  return (
    <div className="flex justify-center h-dvh bg-slate-300">
      <div className="w-80 rounded-lg border bg-white p-3 m-auto h-max">
        {type == "signin" ? (
          <Heading label="Welcome back" />
        ) : (
          <Heading label="Create an account" />
        )}
        <ButtonWarning
          label={
            type == "signin"
              ? "Don't have an account?"
              : "Already have an account?"
          }
          buttonText={opp}
          to={`/${opp}`}
        />

        {type == "signup" && (
          <InputBox
            type="text"
            label="Name"
            id="name"
            name="name"
            onChange={handleChange}
            // @ts-ignore
            value={authInputs.name}
          />
        )}
        <InputBox
          type="email"
          label="Email"
          id="email"
          name="email"
          onChange={handleChange}
          value={authInputs.email}
        />
        <InputBox
          type="password"
          label="Password"
          id="password"
          name="password"
          onChange={handleChange}
          value={authInputs.password}
        />
        <Button label={type} onClick={handleClick} />
      </div>
    </div>
  );
}
