// Convert 12:10 PM to 24 hrs format

function railwayFormat(str) {
  let [time, modifier] = str.split(" ");
  let [hrs, mins] = time.split(":");
  if (hrs === "12") hrs = "00";
  if (modifier === "PM") hrs = parseInt(hrs) + 12;
  return `${hrs} : ${mins}`;
}
const time = railwayFormat("12:10 AM");
console.log(time);

// time = 14:10 => 02:10 PM
// time = 04:10 => 04:10 AM

function time24to12Fromat(str) {
  let [hrs, mins] = str.split(":");
  let modifier = "AM";
  if (hrs < 12) {
    modifier = "AM";
  } else if (hrs >= 12) {
    modifier = "PM";
  }
  if (hrs > 12 && modifier === "PM") {
    hrs = hrs - 12;
  }
  return `${hrs} : ${mins} ${modifier}`;
}

const time2 = time24to12Fromat("14:10");
console.log(time2);
