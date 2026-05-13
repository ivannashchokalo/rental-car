import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: string;
}

export default function Button({
  text,
  href,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const classes = clsx(styles.button, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {text}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
}
