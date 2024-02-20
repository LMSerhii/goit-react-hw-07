export default function Button({
  className,
  type = 'button',
  children,
  onClick,
}) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
