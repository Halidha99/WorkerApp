export const generateWorkerId = (index: number): string => {
  return `W-${index.toString().padStart(3, '0')}`;
};