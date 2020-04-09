import { doRequest , doDataRequest } from './base-api-services';

const RESOURSE = 'empresas/'

export const inserir = (empresa) => {
    return doRequest(RESOURSE, 'POST', empresa);
}

export const uploadFoto = (empresa) => {
    return doDataRequest(RESOURSE + 'logo/', 'POST', empresa, empresa.id)
}