import axios from 'axios'

const cmsApiUri = import.meta.env.VITE_CMS_API

export const cmsApi = axios.create({
  baseURL: cmsApiUri,
  headers: {
    "Content-Type": "application/json",
  }
})