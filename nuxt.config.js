import {config} from "dotenv";

config();
export default {
    components: true,
    plugins: [
        {
            src: "~/plugins/kafka.js",
            ssr: false
        }
    ],
    serverMiddleware: [
        {path: '/kafka', handler: '~/server-middleware/kafka.js'}
    ],
    server: {
        port: process.env.PORT
    }
}