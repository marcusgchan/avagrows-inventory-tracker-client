import { useState, useEffect } from "react";
import tableServices from "../services/tableServices";

export default function useLocationFilter(lookUpTableRef) {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    let ignore = false;

    tableServices
      .getLocations()
      .then((res) => {
        if (!ignore) {
          const data = res.data;
          const lookUpTable = lookUpTableRef.current.locationTable;

          lookUpTable.clear();
          data.forEach(({ location_id, location_name }) => {
            lookUpTable.set(location_name, location_id);
          });
          setFilters(data.map((row) => ({ ...row, isChecked: true })));
        }
      })
      .catch((err) => console.log(err));

    return () => (ignore = true);
  }, [lookUpTableRef]);

  return [filters, setFilters];
}
