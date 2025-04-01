'use client';

import React, { useState } from 'react';
import List from '@/components/List';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import styles from './styles.module.css';
import { v4 as uuidv4 } from 'uuid';

interface ListItem {
  id: string;
  text: string;
  selected: boolean;
}

export default function Card() {
    const [items, setItems] = useState<ListItem[]>([
        { id: '1', text: 'Item 1', selected: false },
        { id: '2', text: 'Item 2', selected: false },
        { id: '3', text: 'Item 3', selected: false },
        { id: '4', text: 'Item 4', selected: false },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [previousState, setPreviousState] = useState<ListItem[]>([]);

    const handleAddItem = (text: string) => {
        saveCurrentState();
        const newItem: ListItem = {
        id: uuidv4(),
        text,
        selected: false
        };
        setItems(prev => [...prev, newItem]);
        setIsModalOpen(false);
    };

    const handleSelect = (id: string) => {
        setItems(prev =>
        prev.map(item =>
            item.id === id ? { ...item, selected: !item.selected } : item
        )
        );
    };

    const handleDelete = (id: string) => {
        saveCurrentState();
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const handleDeleteSelected = () => {
        const hasSelected = items.some(item => item.selected);
        if (!hasSelected) return alert('Select an item to delete.');
        saveCurrentState();
        setItems(prev => prev.filter(item => !item.selected));
    };

    const saveCurrentState = () => {
        const cloned = items.map(item => ({
          ...item,
          selected: false
        }));
        setPreviousState(cloned);
    };

    const handleUndo = () => {
        if (previousState.length === 0) return;
        setItems(previousState);
    };

    return (
        <div className={styles.card}>
            <h1 className={styles.cardHeading}>This is a technical proof</h1>
            
            <p className={styles.cardDescription}>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec inceptos. 
                Lacinia habitasse arcu molestie maecenas cursus quam nunc, hendrerit posuere augue 
                fames dictumst placerat porttitor, dis mi pharetra vestibulum venenatis phasellus.
            </p>

            <List items={items} onSelect={handleSelect} onDelete={handleDelete} />

            <div className={styles.cardListButtons}>
                <div className={styles.buttonsBlock}>
                    <Button variant={'outline'} onClick={handleUndo}>↻</Button>
                    <Button variant={'outline'} onClick={handleDeleteSelected}>Delete</Button>
                </div>
                <div className={styles.buttonsBlock}>
                    <Button onClick={() => setIsModalOpen(true)}>Add</Button>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onAdd={handleAddItem}
                onCancel={() => setIsModalOpen(false)}
            />
        </div>
    );
}