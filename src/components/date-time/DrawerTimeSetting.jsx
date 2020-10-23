export const today = new Date();
export const nextWeekDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7
);
export const afterNextWeek = new Date(
  nextWeekDate.getFullYear(),
  nextWeekDate.getMonth(),
  nextWeekDate.getDate() + 7
);
export const lastMonth = new Date(
  today.getFullYear(),
  today.getMonth() - 1,
  today.getDate()
);
export const formatMonth = (month) => {
  if (month < 10) {
    return `0${month}`;
  }
};
