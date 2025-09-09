import deleteAuthorsHandler from "../handlers/author/deleteAuthorsHandler.js";
import getAuthorsHandler from "../handlers/author/getAuthorsHandler.js";
import patchAuthorsHandler from "../handlers/author/patchAuthorsHandler.js";
import postAuthorsHandler from "../handlers/author/postAuthorsHandler.js";
import putAuthorsHandler from "../handlers/author/putAuthorsHandler.js";

export default {
    name: 'author',
    version: '1.0.0',
    register: async function (server, options) {
        server.route([
            {
                method: 'GET',
                path: '/authors',
                handler: getAuthorsHandler
            },
            {
                method: 'POST',
                path: '/authors',
                handler: postAuthorsHandler
            },
            {
                method: 'PATCH',
                path: '/authors',
                handler: patchAuthorsHandler
            },
            {
                method: 'DELETE',
                path: '/authors',
                handler: deleteAuthorsHandler
            },
            {
                method: 'PUT',
                path: '/authors',
                handler: putAuthorsHandler
            },
        ]);
    }
};
