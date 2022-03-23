import { useState, useEffect } from "react";
import tableServices from "../services/tableServices";

export default function useFetch(service) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    service()
      .then((res) => setRows(res.data))
      .catch((e) => console.log(e));
  }, [service]);

  return [rows, setRows];
}
