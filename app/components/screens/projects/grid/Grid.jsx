import styles from "./Grid.module.scss";
import GridItem from "./GridItem";

const Grid = ({ works }) => {
  return (
    <div className={styles.grid}>
      {works.map(work => (
        <GridItem key={work._id} item={work} />
      ))}
    </div>
  );
};

export default Grid;
