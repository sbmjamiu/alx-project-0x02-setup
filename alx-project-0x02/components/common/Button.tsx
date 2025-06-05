import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape }) => {
  return (
    <button
      className={`px-4 py-2 font-medium text-white bg-blue-600 hover:bg-blue-700 transition ${size} ${shape}`}
    >
      Click Me
    </button>
  );
};

export default Button;
