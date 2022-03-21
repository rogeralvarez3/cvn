const express = require('express');
const app = express();

app.get('path', (req, res) => {
return 	body
});

let port = 3000;
app.listen(process.env.PORT || port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

//npm start, open your browser and run localhost:port