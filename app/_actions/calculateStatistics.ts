export const calculateCigarettes = (
  cigarettesPerDay: number,
  hoursPassed: number
) => {
  const cigarettesPerHour = cigarettesPerDay / 24;

  const total = cigarettesPerHour * hoursPassed;
  return Number(total.toFixed(0));
};
export const calculateMoneySaved = (
  cigarettesPerDay: number,
  cigarettePrice: number,
  hoursPassed: number
) => {
  const cigarettesPerHour = cigarettesPerDay / 24;
  const totalCigarettes = cigarettesPerHour * hoursPassed;
  const totalSaved = totalCigarettes * cigarettePrice;
  return Number(totalSaved.toFixed(0));
};

