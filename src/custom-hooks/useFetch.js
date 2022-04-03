import { useState, useEffect } from "react";
import tableServices from "../services/tableServices";

export default function useFetch(service) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    service()
      .then((res) => {
        const dataWithId = res.data.map((row) => ({ ...row, id: row.serial }));
        console.log(dataWithId);
        setRows(dataWithId);
      })
      .catch((e) => console.log(e));
  }, [service]);

  return [rows, setRows];
}
