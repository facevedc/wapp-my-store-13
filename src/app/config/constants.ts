import { environment } from '../../environments/environment';
const { baseUrl } = environment

export const endpointStore: string = `${baseUrl}/store`
export const endpointProduct: string = `${baseUrl}/product`