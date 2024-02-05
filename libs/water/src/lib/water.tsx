import styles from './water.module.scss';

/* eslint-disable-next-line */
export interface WaterProps {}

export function Water(props: WaterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Water!</h1>
    </div>
  );
}

export default Water;
