const URI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.5";

module.exports=async () => {
    try {
        await (require("mongoose")).connect(URI);
        console.log("Connection to Server... [accepted]");
    } catch(err) {
        console.error("Connection to Server... [rejected]", err);
    }
}