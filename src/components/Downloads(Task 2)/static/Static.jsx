import downloads from 'dates/downloads.json';
import { ContainerForDownloads } from '../container/Container';
import css from './static.module.css';
export const AppForDownloads = () => {
  return (
    <div className={css.mainContainer}>
      <ContainerForDownloads title="Upload Stats" stats={downloads} />
    </div>
  );
};
