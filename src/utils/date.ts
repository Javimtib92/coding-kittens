export function formatDate(inputDate: Date, locale: string) {
  // Convert the input date string to a Date object
  const date = new Date(inputDate);

  // Get the current date
  const currentDate = new Date();

  // Function to format the date
  function formatDate(date: Date) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
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
    return formatDate(date) + ' (Today)';
  } else {
    // Format for other dates
    return formatDate(date);
  }
}

export function getYearDiff(from: Date, to: Date) {
  const diff = to.getTime() - from.getTime();

  const date = new Date(diff);

  return Math.abs(date.getFullYear() - 1970);
}
