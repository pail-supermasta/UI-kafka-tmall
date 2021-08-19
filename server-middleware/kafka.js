import { Kafka } from 'kafkajs';
import express from 'express';
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
app.use(router);
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

const kafka = new Kafka({ brokers: ['94.143.46.236:9093'] });

const consumer = kafka.consumer({ groupId: '' + Date.now() });
const producer = kafka.producer();

async function runKafka() {
    try {
        await consumer.connect();
        await consumer.subscribe({ topic: 'MS_entity_get', fromBeginning: true });
        await consumer.run({
            eachMessage: data => {
                console.log('eachMessage');
            },
        });

        await producer.connect();

        console.log('Kafka s running');
    } catch (e) {
        console.log(e);
    }
}

runKafka();

router.get('/sendMessage', (req, res, next) => {
    console.log('sendMessage');
    producer
        .send({
            topic: 'MS_entity_get',
            messages: [{ value: req.query.message }],
        })
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.log(error);
            next(error);
        });
});

export default app;
