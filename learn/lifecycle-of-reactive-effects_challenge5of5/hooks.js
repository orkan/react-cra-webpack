import { fetchData } from "./api.js";

export function useFetchData(placeId = "") {
  const [list, setList] = React.useState([]);
  const [id, setId] = React.useState("");

  const url = placeId ? `/planets/${placeId}/places` : "/planets";

  React.useEffect(() => {
    let ignore = false;

    try {
      fetchData(url).then((result) => {
        if (!ignore) {
          console.log("Fetched url: " + url);
          setList(result);
          setId(result[0].id);
        }
      });
    } catch (error) {
      console.log(error);
    }

    return () => {
      ignore = true;
    };
  }, [url]);

  return [list, id, setId];
}
