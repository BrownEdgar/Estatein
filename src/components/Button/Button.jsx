import "./Button.scss";

export function Button({ className, children }) {
  return <button className={`custom-btn ${className}`}>{children}</button>
}
