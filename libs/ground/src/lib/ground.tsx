import styles from './ground.module.scss';

/* eslint-disable-next-line */
export interface GroundProps {}

export function Ground(props: GroundProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ground!</h1>
    </div>
  );
}

export default Ground;
