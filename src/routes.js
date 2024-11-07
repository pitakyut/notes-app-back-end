const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler
  } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,  // Menggunakan addNoteHandler untuk menambahkan catatan
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,  // Menggunakan getAllNotesHandler untuk mengambil semua catatan
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,  // Menggunakan getNoteByIdHandler untuk mengambil catatan berdasarkan ID
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },

  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
