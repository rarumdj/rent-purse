import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import { Location } from 'history';
import { parsePhoneNumber } from 'libphonenumber-js';
import numeral from 'numeral';
import {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  getCountryCallingCode,
} from 'react-phone-number-input';

export const cellType = {
  STRING: 'string',
  DOUBLE_STRING: 'double-string',
  ACTION: 'action',
  STRING_BOLD: 'string-bold',
  STRING_BADGE: 'string-badge',
  BADGE: 'badge',
  SELECTION: 'selection',
  DOTTED_BADGE: 'dotted-badge',
  EXPANDER: 'expander',
};

export const capitalizeString = (str: string): string => {
  if (!str) return '';

  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export interface timeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const calculateTimeLeft = (otp: any) => {
  const difference = +otp - new Date().getTime();
  let timeLeft: timeLeft | Record<string, never> = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const getFormattedDate = (date?: string) => {
  if (date) {
    const jsDate = new Date(date);
    const formatTemplate = isToday(jsDate)
      ? 'hh:mm aa'
      : 'MMM do, yyyy hh:mm aa';
    return format(jsDate, formatTemplate);
  }
};

export const getInitails = (name: string) => {
  const splitName = name?.split(' ');

  return splitName?.length > 1
    ? `${splitName[0]?.charAt(0)?.toUpperCase()}${splitName[1]
        ?.charAt(0)
        ?.toUpperCase()}`
    : `${name?.charAt(0)?.toUpperCase()}`;
};

export const truncateText = (text: string, start: number, end: number) => {
  return text?.length > end ? `${text?.substr(start, end)}...` : text;
};

export const getPhoneNumber = (phone_number: string) => {
  const iso = parsePhoneNumber(formatPhoneNumberIntl(phone_number));
  const countryCode = getCountryCallingCode(iso.country as any);
  const localFormat = formatPhoneNumber(phone_number);

  return { countryCode, localFormat };
};
export const getStatus = (name?: string) => {
  switch (name?.toLowerCase()) {
    case 'verified':
    case 'successful':
    case 'success':
    case 'active':
    case 'approved':
    case 'paid':
      return 'success';
    case 'unverified':
    case 'pending':
    case 'part payment':
    case 'inactive':
    case 'deactivated':
    case 'processing':
      return 'processing';
    case 'failed':
    case 'declined':
    case 'deleted':
    case 'outstanding':
      return 'failed';
    case 'initiated':
      return 'inactive';
  }
};
export enum txStatus {
  INITIATED = 'INITIATED',
  PROCESSED = 'PROCESSED',
  PROCESSING = 'PROCESSING',
  APPROVED = 'APPROVED',
  FAILED = 'FAILED',
  REJECTED = 'REJECTED',
}

export const byteConverter = (bytes: number) => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  let i = 0;
  for (i; bytes > 1024; i++) {
    bytes /= 1024;
  }
  return bytes.toFixed(1) + ' ' + units[i];
};

export function removeAmountFraction(
  amount: number | string = 0,
  currency?: string,
  isAmount = false
) {
  const numberValue = Number(amount);
  if (isNaN(numberValue)) {
    return 0;
  }
  return (
    (currency ? `${getCurrency[currency]} ` : '') +
      numeral((amount as number) / 100).format(isAmount ? '0,0' : '0,0.00') ||
    'NA'
  );
}

export function removeDuplicates<T>(arr: T[], property: keyof T): T[] {
  const propertySet = new Set<T[keyof T]>();
  const result: T[] = [];

  for (const obj of arr) {
    const value = obj[property];
    if (!propertySet.has(value)) {
      propertySet.add(value);
      result.push(obj);
    }
  }

  return result;
}

export function updateObjectProperties(obj: any) {
  const updatedObj: any = {};

  for (const key in obj) {
    if (
      typeof obj[key] === 'object' &&
      obj[key] !== null &&
      'value' in obj[key]
    ) {
      updatedObj[key] = obj[key].value;
    } else if (typeof obj[key] === 'object') {
      updatedObj[key] = updateObjectProperties(obj[key]);
    } else {
      updatedObj[key] = obj[key];
    }
  }

  return updatedObj;
}

export const getInitialKey = (location: Location): string => {
  const locationArray = location.pathname.split('/');
  return locationArray[locationArray.length - 1];
};

export const getCurrency: any = {
  EUR: '€',
  ZAR: 'R',
  USD: '$',
  UGX: 'UGX',
  RWF: 'RF',
  NGN: '₦',
  KES: 'K',
  GHS: 'GH¢',
};

export function transformSchoolPayments<T>(originalData?: {
  [key: string]: Array<T>;
}): Array<{ session: string; data: Array<T> }> {
  const transformedData: Array<{ session: string; data: Array<T> }> = [];

  for (const session in originalData) {
    if (originalData.hasOwnProperty(session)) {
      transformedData.push({
        session: `${session} :`,
        data: originalData[session],
      });
    }
  }

  return transformedData;
}

export const paymemtType = {
  PARTPAYMENT: 'install-mental',
  LUMPSUM: 'lump-sum',
  NOPAYMENT: 'no-payment',
};

export const getTotalAmount = (array = [], keyName: string) => {
  if (!(Array.isArray(array) && array.length)) return 0;
  return array.reduce((total, data) => {
    return +total + (+data[keyName] || 0);
  }, 0);
};

export const sortAscending = <T, K extends keyof T>(
  arrObject?: T[],
  key?: K
) => {
  if (arrObject && key)
    return [...arrObject].sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return [];
};
