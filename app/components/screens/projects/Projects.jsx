import Circles from "../../ui/cicrcles/Circles";
import MetaTitle from "../../ui/MetaTitle";
import Grid from "./grid/Grid";
import styles from "./Projects.module.scss";

const Projects = ({ works }) => {
  return (
    <section className={styles.section}>
      <MetaTitle title="Jeks Corsa | Проекты где работал" />
      <div className={styles.container}>
        <Grid links={works} />
      </div>
      <Circles />
    </section>
  );
};

export default Projects;
