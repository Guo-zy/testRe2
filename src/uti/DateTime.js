export function getYear() {
  return new Date().getFullYear();
}
export function getMonth() {
  return new Date().getMonth() + 1;
}
export function getDate() {
  return new Date().getDate();
}

export function getFullDate() {
  return getYear() + "/" + getMonth() + "/" + getDate();
}

export function getWeek() {
  let date = new Date().getDay();
  let week = "";
  if (date == 0) {
    week = "星期日";
  } else if (date == 1) {
    week = "星期一";
  } else if (date == 2) {
    week = "星期二";
  } else if (date == 3) {
    week = "星期三";
  } else if (date == 4) {
    week = "星期四";
  } else if (date == 5) {
    week = "星期五";
  } else if (date == 6) {
    week = "星期六";
  }
  return week;
}

export function getHours() {
  return new Date().getHours();
}

export function getMinutes() {
  return new Date().getMinutes() < 10
    ? "0" + new Date().getMinutes()
    : new Date().getMinutes();
}
export function getTime() {
  return getHours() + ":" + getMinutes();
}
