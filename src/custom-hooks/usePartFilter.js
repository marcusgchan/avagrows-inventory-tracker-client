import { useState, useEffect } from "react";

export default function usePartFilter(service) {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    service()
      .then((res) =>
        setFilters(res.data.map((row) => ({ ...row, isChecked: true })))
      )
      .catch((err) => console.log(err));
  }, [service]);

  return [filters, setFilters];
}
