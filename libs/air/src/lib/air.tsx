import styles from './air.module.scss';

/* eslint-disable-next-line */
export interface AirProps {}

export function Air(props: AirProps) {
  return (
    <div className={styles['container']}>
      <h1>Air Datas</h1>
    </div>
  );
}

export default Air;
