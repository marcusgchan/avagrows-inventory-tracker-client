import { useState, useEffect } from "react";
import tableServices from "../services/tableServices";

export default function useCategoryFilter(lookUpTableRef) {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    let ignore = false;
    tableServices
      .getDistinctCategories()
      .then((res) => {
        if (!ignore) {
          console.log(res.data);
          const data = res.data;
          const lookUpTable = lookUpTableRef.current.categoryTable;

          lookUpTable.clear();
          data.forEach(({ part_category_name, part_category_id }) => {
            lookUpTable.set(part_category_name, part_category_id);
          });
          setFilters(data.map((row) => ({ ...row, isChecked: true })));
        }
      })
      .catch((err) => console.log(err));

    return () => (ignore = true);
  }, [lookUpTableRef]);

  return [filters, setFilters];
}
