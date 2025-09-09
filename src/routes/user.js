import getUsersHandler from "../handlers/user/getUsersHandler.js";
import putUsersHandler from "../handlers/user/putUsersHandler.js";
import deleteUsersHandler from "../handlers/user/deleteUsersHandler.js";
import postUsersHandler from "../handlers/user/postUsersHandler.js";
import patchUsersHandler from "../handlers/user/patchUsersHandler.js";

export default {
    name: 'user',
    version: '1.0.0',
    register: async function (server, options) {
        server.route([
            {
                method: 'GET',
                path: '/users',
                handler: getUsersHandler
            },
            {
                method: 'POST',
                path: '/users',
                handler: postUsersHandler
            },
            {
                method: 'PATCH',
                path: '/users',
                handler: patchUsersHandler
            },
            {
                method: 'DELETE',
                path: '/users',
                handler: deleteUsersHandler
            },
            {
                method: 'PUT',
                path: '/users',
                handler: putUsersHandler
            },
        ]);
    }
};
