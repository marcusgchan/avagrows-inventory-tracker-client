import { useState, useEffect } from "react";

export default function useFetch(service) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let ignore = false;

    service()
      .then((res) => {
        if (!ignore) {
          const data = res.data.map((row) => ({ ...row }));
          setRows(data);
        }
      })
      .catch((e) => console.log(e));
    return () => (ignore = true);
  }, [service]);

  return [rows, setRows];
}
