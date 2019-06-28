import moment from 'moment';
let current = new Date();
const daysWeek = (actual = current) => {
  const isToday = date => Boolean(date.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD'));
  const startOfWeek = moment(actual).startOf('isoWeek');
  const fillDays = (_,index) => ({
    date: moment(startOfWeek).add(index, 'days'), 
    isToday: isToday(moment(startOfWeek).add(index, 'days'))
  });
  return Array.from({length: 7}, fillDays);
};

export const getWeek = () => daysWeek();
export const setToday = () => {
  current = new Date();
};
const setCurrentDate = offset => {
  var dateOffset = (24*60*60*1000) * offset; //5 days
  current.setTime(current.getTime() + dateOffset);
};


export const getNextWeek = () => {
  setCurrentDate(7);
  return daysWeek(current);
};
export const getPrevWeek = () => {
  setCurrentDate(-7);
  return daysWeek(current);
};

export const getMonthName =  (actual = current) => moment(actual).format('MMMM');
