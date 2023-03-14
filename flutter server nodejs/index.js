const express = require ('express');

const mangoose = require('mongoose');

const authRouter = require('./routes/auth');

const adminRouter = require('./routes/admin');

const DBC = "mongodb+srv://mon-souq:JwdGdfhwDhvqtmUB@cluster0.fiuh6ql.mongodb.net/?retryWrites=true&w=majority";

const PORT = 522;

const app = express();

app.use(express.json());

app.use(authRouter);

app.use(adminRouter);

mangoose.connect(DBC).then(() => {

    console.log('Conneced :(');

}).catch((e) => {console.log(e);});

app.listen(PORT, "0.0.0.0", () => {

    console.log(`its working in Port ${PORT}`);
});
