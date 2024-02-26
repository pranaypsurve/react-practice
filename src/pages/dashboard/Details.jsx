import { useParams } from "react-router-dom";

export default function Details() {
  const params = useParams();
  return <div>Details {params?.id}</div>;
}
