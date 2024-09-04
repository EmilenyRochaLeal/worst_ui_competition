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
      className=" w-32 h-12 flex-none   uppercase font-medium tracking-wider border
       border-slate-200 text-slate-900"
    >
      {text}
    </button>
  );
};

export default Button;
