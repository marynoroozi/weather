export const formatUTCToLocalTime = (
  localTimestamp: number,
  timezone: number
) => {
  // Convert Unix timestamp to milliseconds
  const utcTimestamp = localTimestamp * 1000;

  // Create a Date object in UTC
  const utcDate = new Date(utcTimestamp);

  // Calculate the offset in minutes
  const offsetMinutes = timezone / 60;

  // Adjust the UTC date by the offset
  const localDate = new Date(utcDate.getTime() + offsetMinutes * 60 * 1000);
  // Extract two-digit hour and minutes
  const hours = localDate.getUTCHours();
  const minutes = localDate.getUTCMinutes();

  // Convert to AM/PM format
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};
