interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ type = "text", ...props }: InputProps) {
  return <input type={type} {...props} />;
}
