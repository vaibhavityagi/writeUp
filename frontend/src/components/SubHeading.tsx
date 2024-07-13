type SubHeadingProps = {
  label: string;
};

export default function SubHeading({ label }: SubHeadingProps) {
  return (
    <div className="text-slate-500 text-md  m-1 mb-2 text-center px-3 py-1">
      {label}
    </div>
  );
}
