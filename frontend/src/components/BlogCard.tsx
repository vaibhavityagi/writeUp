interface BlogProps {
  title: string;
  content: string;
  publishingDate: string;
  author: number;
  readingTime: number;
}

export default function BlogCard({
  title,
  content,
  publishingDate,
  author,
  readingTime,
}: BlogProps) {
  return (
    <>
      <div>{title}</div>
      <div>{content}</div>
      <div>{publishingDate}</div>
      <div>{author}</div>
      <div>{readingTime}</div>
    </>
  );
}
