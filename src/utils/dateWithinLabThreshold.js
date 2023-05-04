import { transformTime } from "./transformTme.js";
export const dateWithinLabThreshold = (endDate) => {
  const endDateTimeStamp = transformTime(endDate);
  const dateToday = new Date();
  let withinlabThresholdDate = new Date();
  withinlabThresholdDate.setDate(dateToday.getDate() + 14);
  const withinLabThresholdDateTimeStamp = Date.parse(withinlabThresholdDate);
  return withinLabThresholdDateTimeStamp > endDateTimeStamp;
};
