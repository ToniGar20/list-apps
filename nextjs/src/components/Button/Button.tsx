import React from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  variant = 'solid',
  onClick,
  type = 'button',
  className
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cx(styles.button, styles[variant], className)}
    >
      {children}
    </button>
  );
}
