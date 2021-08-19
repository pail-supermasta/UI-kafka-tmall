/*PRODUCER*/
const {Kafka} = require("kafkajs");


const kafka = new Kafka({brokers: ["94.143.46.236:9093"]});

const consumer = kafka.consumer({groupId: "" + Date.now()});


/*const producer = kafka.producer();
await producer.connect();*/


/* producer.send({
    topic: "MS_entity_get",
    messages: [
        {value: "фыва фыва фыва фыва фыва"},
    ]
});*/

async function runKafka() {
    try {
        await consumer.connect();
        await consumer.subscribe({topic: "MS_entity_get", fromBeginning: true});
        await consumer.run({
            eachMessage: async (data) => {
                console.log(data);
            }
        });
    } catch (e) {
        console.log(e);
    }

}

// runKafka();
export default ({}, inject) => {
    inject('consumer', consumer)
}



