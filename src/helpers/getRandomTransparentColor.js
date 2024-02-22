export const getRandomTransparentColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const alpha = Math.random() * 0.5 + 0.1;

  const color = `rgba(${r}, ${g}, ${b}, ${alpha})`;

  return color;
};
