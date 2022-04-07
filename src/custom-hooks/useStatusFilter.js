import { useState, useEffect } from "react";
import tableServices from "../services/tableServices";

export default function useStatusFilter(lookUpTableRef) {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    let ignore = false;

    tableServices
      .getStatuses()
      .then((res) => {
        if (!ignore) {
          const data = res.data;
          const lookUpTable = lookUpTableRef.current.statusTable;

          lookUpTable.clear();
          data.forEach(({ status_name, status_id }) => {
            lookUpTable.set(status_name, status_id);
          });
          setFilters(data.map((row) => ({ ...row, isChecked: true })));
        }
      })
      .catch((err) => console.log(err));

    return () => (ignore = true);
  }, [lookUpTableRef]);

  return [filters, setFilters];
}
