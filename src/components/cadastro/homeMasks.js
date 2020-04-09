export const cnpjMask = value => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2') 
        .replace(/(\d{3})(\d)/, '$1.$2')   
        .replace(/(\d{3})(\d{1,4})/, '$1/$2')
        .replace(/(\d{4})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})(\d)/, '$1')
}

export const telefoneMask = value => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1)$2')
        .replace(/(\d{4,5})(\d)/, '$1-$2')
        .replace(/(-\d{4})(\d)/, '$1')
}

export const cepMask = value => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})(\d)/, '$1')
        
}
