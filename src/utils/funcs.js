export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const formatedDate = (miliseconds) => {
  return `${new Date(miliseconds).getMonth()}/${new Date(
    miliseconds
  ).getDate()}/${new Date(miliseconds).getFullYear()} at ${formatAMPM(
    new Date(miliseconds)
  )}`;
};

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  return strTime;
}
