import moment from "moment-timezone";

export default function TimeGetter(DateEvent, props) {
  const date = new Date();
  const now = new Date().toLocaleString();
  const today =
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getUTCFullYear() +
    " ";
  const d = new Date(DateEvent + " " + props);
  let TimeArray = [];
  TimeArray.push(props);
  for (let i = 0; i < 16; i++) {
    const d_ = new Date(DateEvent + " " + TimeArray[TimeArray.length - 1]);
    const newDateObj = moment(d_).add(15, "m").toDate();
    if(newDateObj.getDate()<=d.getDate()){
      const timeString12hr_ = new Date(newDateObj + "Z").toLocaleTimeString(
        "en-US",
        {
          timeZone: "UTC",
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }
      );
      TimeArray.push(timeString12hr_);
    }
  }
  return TimeArray;
}
