import { useStoreInfoContext } from '../context/GetStoreInfoContext';
import { message } from 'antd';

export const toTimeString = (totalSeconds) => {
  const totalMs = totalSeconds * 1000;
  const result = new Date(totalMs).toISOString().slice(14, 19);
  return result;
};

export const validateName = (input) => {
  if (!input) {
    message.error('Name is required');
    return;
  } else if (input?.length < 3) {
    message.error('Name must be 3 characters or more');
    return;
  }
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)?.toLowerCase();
};

export function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function separateWords(string) {
  return string.split('_').join(' ');
}

export const numberWithCommas = (x) => {
  x = x?.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
  return x;
};

export const currencyHandler = (amount, currencies) => {
  let currencyLogo = '';

  switch (currencies) {
    case 'NGN':
      currencyLogo = String.fromCharCode(8358);
      break;

    case 'USD':
      currencyLogo = String.fromCharCode(36);

    default:
      currencyLogo = String.fromCharCode(8358);
      break;
  }

  const value = currencyLogo + numberWithCommas(amount);

  return value;
};
