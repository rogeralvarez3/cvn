const express = require('express');
const app = express();
const routes = require("./routes")
const path = require("path")

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.json())
app.use('/api',routes)

let port = 3000;
app.listen(process.env.PORT || port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

//npm start, open your browser and run localhost:port