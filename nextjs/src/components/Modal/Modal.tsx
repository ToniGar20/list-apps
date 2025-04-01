import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './styles.module.css';
import Button from '@/components/Button';

interface ModalProps {
  isOpen: boolean;
  onAdd: (text: string) => void;
  onCancel: () => void;
}

export default function Modal({ isOpen, onAdd, onCancel }: ModalProps) {
  const [inputValue, setInputValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
  
      const timeout = setTimeout(() => {
        setAnimate(true);
      }, 30);
  
      return () => clearTimeout(timeout);
    } else if (visible) {
      setAnimate(false);
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleSubmit = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      onAdd(trimmed);
      setInputValue('');
    }
  };

  if (!visible) return null;

  return (
    <div className={cx(styles.overlay, { [styles.show]: animate })}>
      <div className={cx(styles.modal, { [styles.show]: animate })}>
        <h2 className={styles.modalHeading}>Add item to list</h2>
        <input
          className={styles.modalInput}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type the text here..."
        />
        <div className={styles.modalButtons}>
          <Button variant="solid" onClick={handleSubmit}>Add</Button>
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}