const express = require('express');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes/index.js');
const endrouteRouter = require('./routes/endroute.js');

app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})