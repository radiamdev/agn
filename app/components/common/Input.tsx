interface InputProps {
  type?: "text" | "password";
  name?: string;
  placeholder: string;
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: InputProps) {
  const { name, type = "text", placeholder, className = "", onChange } = props
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`!outline-none border-b border-black w-full py-3 focus:outline-none mb-3 ${className}`}
    />
  )
}

export default Input