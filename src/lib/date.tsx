import day from 'dayjs';

const year = () => day().format('YYYY');
const month = () => day().format('MM');
const today = () => day().format('YYYY-MM-DD');

export {year, month, today};