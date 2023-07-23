import { fetchData } from "./api.js";

export function useFetchData(url) {
  const [list, setList] = React.useState([]);
  const [id, setId] = React.useState("");

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
      id && console.log(error);
    }

    return () => {
      ignore = true;
    };
  }, [url]);

  return [list, id, setId];
}
