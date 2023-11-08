import axiosIns from "axios";
import { baseUrl } from "./baseUrl";
export const axios = axiosIns.create({
  baseURL: baseUrl,
});
