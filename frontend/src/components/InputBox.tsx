interface InputBoxProps {
  type: string;
  label: string;
  placeholder?: string;
  id: string;
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputBox({
  type,
  label,
  placeholder = "",
  id,
  onChange,
  value,
}: InputBoxProps) {
  return (
    <div>
      <label htmlFor={id} className="font-medium text-sm text-left py-2 my-2">
        {label}
      </label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        name={type}
        id={id}
        className="w-full px-2 py-1 border rounded border-slate-200"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
