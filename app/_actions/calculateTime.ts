export const calculateHoursPassed = (date: any) => {
  const currentDate = new Date() as any;
  const startDate = new Date(date) as any;
  const timeDifference = currentDate - startDate;
  const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));

  return hoursPassed;
};

export const calculateDaysPassed = (date: any) => {
  const currentDate = new Date() as any;
  const startDate = new Date(date) as any;
  const timeDifference = currentDate - startDate;

  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysPassed;
};
