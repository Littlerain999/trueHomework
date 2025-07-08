console.clear();

const port = 8000;
const app = (require("express"))();

app.listen(port, () => console.log(`Server Listening at port: ${port}`));
(require("./config/database"))();
app.use(require("./router/mobile.router"));