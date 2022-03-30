// export function addParts(
//   internal_part_number,
//   part_name,
//   manufacture_name,
//   manufacture_part_number,
//   item_description,
//   unit_price,
//   line_price,
//   lead_time,
//   total_quantity,
//   category_id
// ) {
//   return new Promise((resolve, reject) => {
//     tableServices
//       .addParts({
//         internal_part_number: internal_part_number,
//         part_name: part_name,
//         manufacture_name: manufacture_name,
//         manufacture_part_number: manufacture_part_number,
//         item_description: item_description,
//         unit_price: unit_price,
//         line_price: line_price,
//         lead_time: lead_time,
//         total_quantity: total_quantity,
//         category_id: category_id,
//       })
//       .then((res) => {
//         setRows(res.data.rows);
//       })
//       .catch((err) => {
//         console.log(err);
//         reject();
//       });
//   });
// }
// export function deleteParts(internal_part_number) {
//   return new Promise((resolve, reject) => {
//     tableServices
//       .deleteParts({
//         internal_part_number: internal_part_number,
//       })
//       .then((res) => {
//         setRows(res.data.rows);
//       })
//       .catch((err) => {
//         console.log(err);
//         reject();
//       });
//   });
// }
// export function editParts(
//   internal_part_number,
//   old_internal_part_number,
//   part_name,
//   manufacture_name,
//   manufacture_part_number,
//   item_description,
//   unit_price,
//   line_price,
//   lead_time,
//   total_quantity,
//   category_id
// ) {
//   return new Promise((resolve, reject) => {
//     tableServices
//       .editParts({
//         internal_part_number: internal_part_number,
//         old_internal_part_number: old_internal_part_number,
//         part_name: part_name,
//         manufacture_name: manufacture_name,
//         manufacture_part_number: manufacture_part_number,
//         item_description: item_description,
//         unit_price: unit_price,
//         line_price: line_price,
//         lead_time: lead_time,
//         total_quantity: total_quantity,
//         category_id: category_id,
//       })
//       .then((res) => {
//         setRows(res.data.rows);
//       })
//       .catch((err) => {
//         console.log(err);
//         reject();
//       });
//   });
// }
