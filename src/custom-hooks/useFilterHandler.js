function useFilterHandler(setCategories, setStatuses, setLocations) {
  function handleFilter(e, name) {
    const setter = (cur) => {
      const copy = cur.map((props) => ({ ...props }));
      const objToModify = copy.find((rows) => {
        const targetName = rows[name];
        return targetName === e.target.name;
      });
      objToModify.isChecked = !objToModify.isChecked;
      return copy;
    };
    switch (name) {
      case "location_name":
        setLocations(setter);
        return;
      case "status_name":
        setStatuses(setter);
        return;
      case "part_category_name":
        setCategories(setter);
        return;
      default:
        throw new Error("Invalid column name");
    }
  }
  return handleFilter;
}

export default useFilterHandler;
