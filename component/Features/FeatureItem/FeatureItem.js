import React from 'react';
import styles from './FeatureItem.module.scss';
import Image from 'next/image';

const FeatureItem = ({img, title, text}) => {
    return (
        <div className={styles.FeatureItem}>
            <div className={styles.img}>
                <Image height={60} width={60} src={img}/>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default FeatureItem
