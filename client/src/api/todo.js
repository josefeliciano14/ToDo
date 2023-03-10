import API from './index.js'

export const getToDo  = () => API.get('/todo/');
export const postToDo = (todo) => API.post('/todo/', todo);
export const deleteToDo = (tid) => API.delete('/todo/' + tid);
export const editToDo = (data) => API.put('/todo/', data);
