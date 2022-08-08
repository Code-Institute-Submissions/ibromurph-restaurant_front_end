export default function TimeConvert(props) {
  if (props !== undefined) {
    const timeString = props;
    const timeString12hr = new Date(
      "1970-01-01T" + timeString + "Z"
    ).toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
    return timeString12hr;
  } else return "00:00 PM";
}
