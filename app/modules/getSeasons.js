export const getSeasons = () => {
  const now = new Date();
  const month = now.getMonth() + 1; 

  if ([12, 1, 2].includes(month)) {
    return 'winter';
  } else if ([3, 4, 5].includes(month)) {
    return 'spring';
  } else if ([6, 7, 8].includes(month)) {
    return 'summer';
  } else if ([9, 10, 11].includes(month)) {
    return 'autumn';
  }
};
