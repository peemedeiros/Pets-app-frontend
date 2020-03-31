import { doRequest } from './base-api-services';

const RESOURSE = 'empresas/'

export const inserir = (empresa) => {
    return doRequest(RESOURSE, 'POST', empresa);
}