const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'mydb',
    charset: 'UTF8_GENERAL_CI'
});

// Conectando ao banco de dados
db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL');
});

const insert_sql = "INSERT INTO people(name) VALUES ('João Paulo');"
db.query(insert_sql)

// Rota para obter nomes da tabela "people"
app.get('/', (req, res) => {
    

    db.query('SELECT name FROM people', (err, results) => {
        if (err) throw err;

        // Montando a resposta HTML
        let html = '<h1>Full Cycle Rocks!</h1>';
        results.forEach(row => {
            html += `<p>${row.name}</p>`;
        });

        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.send(html);
    });

    // db.end();
});



// Iniciando o servidor
app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});
