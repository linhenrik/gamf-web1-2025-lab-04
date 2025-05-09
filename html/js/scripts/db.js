const apiUrl = 'https://nettuts.hu/jms/linhenrik/'

export const getAll = (entity = 'users') => {
    return fetch(apiUrl + entity).then(res => res.json());
};