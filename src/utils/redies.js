const { createClient } = require("redis");

const client = createClient({
    // username: "default",
    // password: "BgIaN4cbI3unGOWGKdt4Waus5WlD6Nli",
    // socket: {
    //     host: "redis-13207.c90.us-east-1-3.ec2.redns.redis-cloud.com",
    //     port: 13207,
    // },
    username: "default",
    password: "yPBLu9OvoD72j5ZCmorO9qRzetMmVU08",
    socket: {
        host: "redis-16961.c90.us-east-1-3.ec2.cloud.redislabs.com",
        port: 16961,
    },
});

client.on("error", (err) => console.log("Redis Client Error", err));

module.exports = client;

(async () => {
    await client.connect();
    // const keys = await client.keys(`company:${companyId}:project:${projectId}:*`);

    await client.set("foo", "bar");
    const result = await client.get("foo");
    console.log(result); // >>> bar
})();