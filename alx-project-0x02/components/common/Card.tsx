import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div
    style={{
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      padding: "16px",
      background: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      maxWidth: "400px",
    }}
  >
    <h2 style={{ margin: "0 0 12px 0", fontSize: "1.25rem" }}>{title}</h2>
    <div>{content}</div>
  </div>
);

export default Card;
