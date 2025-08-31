export function formatDate(inputDate: Date, locale: string) {
  // Convert the input date string to a Date object
  const date = new Date(inputDate);

  // Get the current date
  const currentDate = new Date();

  // Function to format the date
  function formatDate(date: Date) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;

    return new Intl.DateTimeFormat(locale, options).format(date);
  }

  // Check if the input date is today
  if (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    // Format for "Today"
    return `${formatDate(date)}·(Today)`;
  }

  // Format for other dates
  return formatDate(date);
}

export function getYearDiff(from: Date, to: Date) {
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  return Math.floor(Math.abs((to.getTime() - from.getTime()) / msPerYear));
}

export function getYearDiffFromNow(to: Date) {
  return getYearDiff(new Date(), to);
}
