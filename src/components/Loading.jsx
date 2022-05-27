import React from 'react'
import styles from '../stylesheets/loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingContainer}>
        <div className={styles.loader}>
            <div>Loading...</div>
        </div>
    </div>
  );
};
export default Loading;