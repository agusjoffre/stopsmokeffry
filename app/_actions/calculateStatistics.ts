export const calculateCigarettes = (
  cigarettesPerDay: number,
  daysPassed: number
) => {
  const total = cigarettesPerDay * daysPassed;
  return total;
};
export const calculateMoneySaved = (
  cigarettesPerDay: number,
  cigarettePrice: number,
  daysPassed: number
) => {
  const totalCigarettes = cigarettesPerDay * daysPassed;
  const totalSaved = totalCigarettes * cigarettePrice;
  return totalSaved;
};
