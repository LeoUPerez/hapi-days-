'use strict';

import Hapi from '@hapi/hapi'
import instanceRoutes from './routes/index.js';

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // route context -> it does not keep the state, it executes in every petition
    server.ext('onPreHandler', (request, h) => {
        request.app.context = {
            test: 'context test'
        }

        return h.continue;
    });

    const allRoutes = await instanceRoutes();
    await server.register(allRoutes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();