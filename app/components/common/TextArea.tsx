interface TextAreaProps {
    name: string
    placeholder: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
    error?: string
    touched?: boolean
    className?: string
}

function TextArea({
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    touched,
    className = '',
}: TextAreaProps) {
    return (
        <div className="w-full">
            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`!outline-none border-b w-full py-3 min-h-[150px] mb-1 focus:outline-none ${
                    error && touched ? 'border-red-500' : 'border-black'
                } ${className}`}
            />
            {touched && error && (
                <p className="text-sm text-red-500 mt-1">{error}</p>
            )}
        </div>
    )
}

export default TextArea
