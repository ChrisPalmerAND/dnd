export const transformTime = (date) => {
  let splitDate = date.split("/");
  splitDate.reverse();
  const formattedDate = splitDate.join("-");
  return Date.parse(formattedDate);
};
