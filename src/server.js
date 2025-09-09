'use strict';

import Hapi from '@hapi/hapi'
import instanceRoutes from './routes/index.js';

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
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