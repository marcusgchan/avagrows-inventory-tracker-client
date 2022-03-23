import { useState, useEffect } from "react";
import tableServices from "../services/tableServices";

export default function useCategoryFilter(lookUpTableRef) {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    tableServices
      .getCategories()
      .then((res) => {
        const data = res.data;
        const lookUpTable = lookUpTableRef.current.categoryTable;

        lookUpTable.clear();
        data.forEach(({ part_category_name, part_category_id }) => {
          lookUpTable.set(part_category_name, part_category_id);
        });
        setFilters(data.map((row) => ({ ...row, isChecked: true })));
      })
      .catch((err) => console.log(err));
  }, [lookUpTableRef]);

  return [filters, setFilters];
}
