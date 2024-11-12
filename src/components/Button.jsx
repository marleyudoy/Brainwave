import ButtonSvg from "../assets/svg/ButtonSvg";

export default function Button({
  className,
  href,
  onClick,
  children,
  px,
  white,
}) {
  // classes for button
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  // spnaClasse
  const spanClasses = "relative z-10";
  // render main Button
  const renderButton = () => (
    <button onClick={onClick} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  // render link
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
}
