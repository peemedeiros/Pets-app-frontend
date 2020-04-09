const URL = 'http://127.0.0.1:8000/api/';

export const doRequest = async ( resourse , method, data='', urlParam='') => {
    console.log('enviando...')
    const params = {
        method:method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    if(!['GET', 'DELETE'].includes(method)){
        params.body = JSON.stringify(data)
    }
    return await fetch( URL + resourse + urlParam, params)
}

export const doDataRequest = async (resource, method, dados = '', urlParam = '') => {
	const data = new FormData()
	data.append('logo', dados.foto)
	const params = {
		method: method,
		headers: {
			'Content-type': 'multipart/form-data',
		},
	}
	params.body = data
	return await fetch(URL + resource + urlParam, params)
} 