import { ResponseData } from '../../models/common';
import axiosClient from './axiosClient';

const authApi = {
  signUp(data: any): Promise<ResponseData<any>> {
    const url = '/auth/register';
    return axiosClient.post(url, data);
  },

  login(data: any): Promise<ResponseData<any>> {
    const url = '/auth/login';
    return axiosClient.post(url, data);
  },

  verifyUser(data: any): Promise<ResponseData<any>> {
    const url = '/auth/verify';
    return axiosClient.post(url, data);
  },

  resendVerificationCode(data: any): Promise<ResponseData<any>> {
    const url = `/auth/resend/${data.email}`;
    return axiosClient.post(url);
  },

  forgotPassword(data: any): Promise<ResponseData<any>> {
    const url = '/auth/forgot';
    return axiosClient.post(url, data);
  },

  resetPassword({
    payload,
    token,
  }: {
    payload: Pick<any, 'password' | 'confirmPassword'>;
    token: string | undefined;
  }): Promise<any> {
    const url = `/auth/reset/${token}`;
    return axiosClient.post(url, payload);
  },

  changePassword(payload: any): Promise<any> {
    const url = `/user/password`;
    return axiosClient.post(url, payload);
  },

  getUser(): Promise<ResponseData<any>> {
    const url = `/user`;
    return axiosClient.get(url);
  },

  updateUser(payload: any): Promise<any> {
    const url = `/user`;
    return axiosClient.patch(url, payload);
  },
};

export default authApi;
