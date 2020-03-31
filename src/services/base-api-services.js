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