interface BlogProps {
  title: string;
  content: string;
  publishingDate: string;
  readingTime: number;
  tag: string;
}

export default function BlogCard({
  title,
  content,
  publishingDate,
  readingTime,
  tag,
}: BlogProps) {
  return (
    <>
      <div>
        <div>{title}</div>
        <div>{publishingDate}</div>
        <div>{readingTime}</div>
        <div>{tag}</div>
        <div>{content}</div>
      </div>
    </>
  );
}
