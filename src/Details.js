import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams(); // it automagically works
  return <h2>{id}</h2>;
};

export default Details;
