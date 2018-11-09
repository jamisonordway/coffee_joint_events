export const startDateCleaner = (startTime) => {
  const splitTimeFromDate = startTime.split('T')
  const cleanDate = splitTimeFromDate[0].split('-');
  // use a template literal instead of concating
  const date = cleanDate[1] + '-' + cleanDate[2] + '-' + cleanDate[0];

  return date + ' @ ' + startTimeCleaner(splitTimeFromDate[1]);
}

export const startTimeCleaner = (time) => {
  const hour = time.split(':')[0];
  const minutes = time.split(':')[1];
  // removes logs!
  console.log('hour', hour)
  if (hour >= 12) {
    return hour - 12 + ':' + minutes + 'pm'
  } else {
    return hour + ':' + minutes + 'am'
  }
}
