interface InputProps {
    type?: 'text' | 'password'
    name: string
    placeholder: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    error?: string
    touched?: boolean
    className?: string
}

function Input({
    name,
    type = 'text',
    placeholder,
    className = '',
    onChange,
    onBlur,
    value,
    error,
    touched,
}: InputProps) {
    return (
        <div className="w-full">
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`!outline-none border-b w-full py-3 mb-1 focus:outline-none ${
                    error && touched ? 'border-red-500' : 'border-black'
                } ${className}`}
            />
            {touched && error && (
                <p className="text-sm text-red-500 mt-1">{error}</p>
            )}
        </div>
    )
}

export default Input
