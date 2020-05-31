import { LOCALES } from '../constants/vacancyConstant';

export const currencyFormat = (currency, number) => new Intl.NumberFormat(
  LOCALES[currency], { style: 'currency', currency }
).format(number);

export default currencyFormat;
