export const calculateHoursPassed = (date: string) => {
  const currentDate = new Date() as any;
  const startDate = new Date(date) as any;

  const timeDifference = currentDate - startDate;
  const hoursPassed = Math.floor(timeDifference / (1000 * 60 * 60));

  return hoursPassed;
};

export const calculateDaysPassed = (date: string) => {
  const currentDate = new Date() as any;
  const startDate = new Date(date) as any;
  const timeDifference = currentDate - startDate;

  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysPassed;
};
