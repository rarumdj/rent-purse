export type blockType<DataType = any> = {
  loading: boolean;
  error: string;
  success: boolean;
  data?: DataType;
  meta?: IMeta;
};

export const block = {
  loading: false,
  error: '',
  success: false,
  data: undefined,
  meta: undefined,
};

export interface IMeta {
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPage: number;
}

export interface IPaginateParams {
  page?: number;
  perPage?: number;
}

export type ResponseData<DataType = any> = {
  success: boolean;
  message: string;
  data: DataType;
  meta: IMeta;
};

export interface FormOption<T = string | number> {
  label: string;
  value: T;
  isDisabled?: boolean;
}
export interface PhoneNumberType {
  countryCode?: string;
  localFormat?: string;
}
