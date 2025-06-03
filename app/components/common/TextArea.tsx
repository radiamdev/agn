interface TextAreaProps {
  name?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

function TextArea(props: TextAreaProps) {
  const { name, placeholder, onChange, className } = props
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={`!outline-none border-b border-black w-full py-3 focus:outline-none mb-3 min-h-[150px] ${className}`}
    />
  )
}

export default TextArea