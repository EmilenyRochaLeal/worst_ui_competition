interface ButtonProps {
  text: string;
  onClick: () => void;
  onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
}

const Button: React.FC<ButtonProps> = ({ text, onClick, onMouseOver}) => {
  return (
    <button
      onClick={onClick}
      onMouseOver={onMouseOver}
      className="px-4 py-2 bg-white text-black rounded"
    >
      {text}
    </button>
  );
};

export default Button;
