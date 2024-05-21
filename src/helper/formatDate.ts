export const formatDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
};
