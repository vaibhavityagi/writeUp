import { Link } from "react-router-dom";

type ButtonWarningProps = {
  label: string;
  buttonText: string;
  to: string;
};

export default function ButtonWarning({
  label,
  buttonText,
  to,
}: ButtonWarningProps) {
  return (
    <>
      <div className="flex justify-center text-sm py-1 gap-x-1">
        <div>{label}</div>
        <Link to={to} className=" underline cursor-pointer ">
          {buttonText}
        </Link>
      </div>
    </>
  );
}
