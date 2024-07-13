type HeadingProps = {
  label: string;
};

export default function Heading({ label }: HeadingProps) {
  return <div className="text-3xl font-bold text-center mt-5">{label}</div>;
}
