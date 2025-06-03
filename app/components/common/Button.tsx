interface ButtonProps {
  label: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant: 'primary' | 'secondary' | 'ghost-primary' | 'ghost-white';
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { label, className = "", variant, type = "button", onClick } = props;
  return (
    <button type={type} className={`py-2 md:py-3 px-5 md:px-8 rounded-lg  hover:cursor-pointer transition-colors !font-bold text-lg lg:text-xl text-nowrap ${variant} ${className}`} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
}