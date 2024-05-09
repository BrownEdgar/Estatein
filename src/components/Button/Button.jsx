import "./Button.scss";

export function Button({ className, link, children }) {
  return link ? (
    <a href={link}>
      <button className={`custom-btn ${className}`}>{children}</button>
    </a>
  ) : (
    <button className={`custom-btn ${className}`}>{children}</button>
  );
}
