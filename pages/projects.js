import axios from "axios";
import Projects from "../app/components/screens/projects/Projects";
import { API_URL } from "../app/constants";

export default function ProjectPage(props) {
  return <Projects {...props} />;
}

export const getStaticProps = async () => {
  const works = await axios.get(`${API_URL}/works`).then(({ data }) => data);
  return {
    props: {
      works
    },
    revalidate: 60
  };
};
