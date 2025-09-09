import { promises as fs } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default async function instanceRoutes() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    try {
        const files = (await fs.readdir(__dirname)).filter(file => file != 'index.js');
        let routes = [];

        for (const file of files) {
            const module = await import(`./${file}`);
            routes.push(module.default);
        }

        return routes;
    } catch (error) {
        console.error(error)
    }
}