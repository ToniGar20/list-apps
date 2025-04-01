import React from 'react';
import ListItem from './ListItem';
import styles from './styles.module.css';

interface ListItemData {
  id: string;
  text: string;
  selected: boolean;
}

interface ListProps {
  items: ListItemData[];
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function List({ items, onSelect, onDelete }: ListProps) {
  return (
    <ul className={styles.itemList}>
      {items.map(item => (
        <ListItem
          key={item.id}
          text={item.text}
          selected={item.selected}
          onClick={() => onSelect(item.id)}
          onDoubleClick={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
}