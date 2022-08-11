import moment from "moment-timezone";

export default function DateGetter(props) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date(props);
  let day = d.getDay();
  let month = d.getMonth();
  let dateString = moment(d).format("Do");
  if (props !== undefined) {
    return weekday[day] + " " + dateString + " " + months[month];
  } else return "NO DAY";
}
