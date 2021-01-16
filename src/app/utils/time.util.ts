export function timeConverter(UNIX_timestamp): any {
  var date = new Date(UNIX_timestamp);
  var year = date.getFullYear();
  var mounth = date.getMonth();
  var day = date.getDate();

// Will display time in 10:30:23 format
  var formattedTime = year + '-' + (mounth + 1) + '-' + day;
  return formattedTime;
}
