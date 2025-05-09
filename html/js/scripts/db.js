const apiUrl = 'https://nettuts.hu/jms/linhenrik/'

export const getAll = (entity = 'users') => {
    return fetch(apiUrl + entity).then(res => res.json());
};

export const remove = (id = 0, entity = 'products') => {
    return fetch(apiUrl + entity + "/" + id, {
        method: 'DELETE',
    })
    .then( response => response.json() );
};