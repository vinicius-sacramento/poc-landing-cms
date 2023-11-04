
import { cmsApi } from "./api/cms-api"

export const getContents = async () => {
  return (await cmsApi.get('/contents')).data
}