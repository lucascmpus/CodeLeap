interface CardProps {
  id: number;
  title: string;
  username: string;
  content: string;
}

export function Card({ content, id, title, username }: CardProps) {
  return (
    <div>
      <div className="border"></div>
    </div>
  );
}
