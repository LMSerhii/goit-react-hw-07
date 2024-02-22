import { RotatingLines } from 'react-loader-spinner';
import css from './Loading.module.css';

export default function Loading() {
  return (
    <div className={css.loading}>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
