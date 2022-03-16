import { useState, useEffect } from "react";
import partsServices from "../services/partsServices";

export default function useStatusFilter(lookUpTableRef) {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    partsServices
      .getStatuses()
      .then((res) => {
        const data = res.data;
        const lookUpTable = lookUpTableRef.current.statusTable;

        lookUpTable.clear();
        data.forEach(({ status_name, status_id }) => {
          lookUpTable.set(status_name, status_id);
        });
        setFilters(data.map((row) => ({ ...row, isChecked: true })));
      })
      .catch((err) => console.log(err));
  }, [lookUpTableRef]);

  return [filters, setFilters];
}
