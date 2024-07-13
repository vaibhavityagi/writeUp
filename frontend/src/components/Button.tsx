type ButtonProp = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ label, onClick }: ButtonProp) {
  return (
    <button
      className="bg-black text-white rounded-md p-2 w-full my-4"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
