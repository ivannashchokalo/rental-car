// import clsx from "clsx";
// import styles from "./Button.module.css";

// interface ButtonProps {
//   text: string;
//   variant: "primary" | "secondary";
//   className?: string;
//   onClick: () => void;
// }

// export default function Button({
//   text,
//   variant,
//   className,
//   onClick,
// }: ButtonProps) {
//   return (
//     <button
//       onClick={onClick}
//       className={clsx(styles.button, styles[variant], className)}
//     >
//       {text}
//     </button>
//   );
// }

import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  text,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = clsx(styles.button, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {text}
      </Link>
    );
  }

  return <button className={classes}>{text}</button>;
}
