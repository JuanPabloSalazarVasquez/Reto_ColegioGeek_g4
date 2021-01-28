const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Servidor barppi corriendo');
});

app.set('port', process.env.PORT || 6666);
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});