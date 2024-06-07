import React from 'react';
import styles from './ActionCard.module.css';

function ActionCard({ title, actionText, onActionClick, backgroundColor }) {
  const style = { '--card-bg-color': backgroundColor }; 

  return (
    <div className={styles.card} style={style}>
      <h2 className={styles.title}>{title}</h2>
      <button className={styles.actionButton} onClick={onActionClick}>
        {actionText}
      </button>
    </div>
  );
}

export default ActionCard;
