export default function AuthorCard({
  name,
  bio,
}: {
  name: string;
  bio?: string;
}) {
  return (
    <div>
      <div>Image</div>
      <div>{name}</div>
      <div>{bio}</div>
    </div>
  );
}
