import {axiosClient} from './instance';

export async function getRequest(URL, params) {
  const res = await axiosClient.get(`${URL}`, {params: params});
  return res;
}
export async function postRequest(URL, payload) {
  const res = await axiosClient.post(`${URL}`, payload);
  return res;
}
export async function patchRequest(URL, payload) {
  const res = await axiosClient.patch(`${URL}`, payload);
  return res;
}
export async function deleteRequest(URL) {
  const res = await axiosClient.delete(`${URL}`);
  return res;
}
