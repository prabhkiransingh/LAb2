interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function Select(props: SelectProps) {
  return <select {...props} />;
}
