import React from 'react';
import SubscriptionInfo from './SubscriptionInfo';
import styles from './Membership.module.css';

function MyMembership() {
  return (
    <div className={styles.app}>
      <SubscriptionInfo />
    </div>
  );
}

export default MyMembership;
