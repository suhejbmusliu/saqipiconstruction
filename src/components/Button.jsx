const Button = ({ children, as = "button", href, ...rest }) => {
  const Component = as;

  const baseStyle = {
    padding: "0.8rem 1.8rem",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "var(--color-primary)",
    color: "#000",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
    fontSize: "0.9rem",
  };

  return (
    <Component href={href} style={baseStyle} {...rest}>
      {children}
    </Component>
  );
};

export default Button;
