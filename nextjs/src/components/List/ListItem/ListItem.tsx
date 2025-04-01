import React from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

interface ListItemProps {
    text: string;
    selected: boolean;
    onClick: () => void;
    onDoubleClick: () => void;
}

export default function ListItem({ text, selected, onClick, onDoubleClick }: ListItemProps) {
  return (
    <li
      className={cx(styles.item, { [styles.selected]: selected })}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {text}
    </li>
  );
}
