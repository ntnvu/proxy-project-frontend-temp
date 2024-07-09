const express = require('express');
const path = require('path');

const app = express();

// Phục vụ các file tĩnh trong thư mục hiện tại
app.use(express.static(path.join(__dirname)));

// Route mặc định để phục vụ file index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 3021;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});