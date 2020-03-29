// Definindo o servidor do Express.js
const express = require('express');
const server = express();

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at debitis ut qui reprehenderit! Doloribus, omnis nihil aperiam assumenda quos hic blanditiis sed quam explicabo esse autem voluptas necessitatibus. Ipsa!",
        url: "https://rocketseat.com.br/"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercicios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at debitis ut qui reprehenderit! Doloribus, omnis nihil aperiam assumenda quos hic blanditiis sed quam explicabo esse autem voluptas necessitatibus. Ipsa!",
        url: "https://www.youtube.com/watch?v=dIBzGVv69E0"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at debitis ut qui reprehenderit! Doloribus, omnis nihil aperiam assumenda quos hic blanditiis sed quam explicabo esse autem voluptas necessitatibus. Ipsa!",
        url: "https://www.youtube.com/watch?v=710Dg1jiTuY"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum at debitis ut qui reprehenderit! Doloribus, omnis nihil aperiam assumenda quos hic blanditiis sed quam explicabo esse autem voluptas necessitatibus. Ipsa!",
        url: "https://www.youtube.com/watch?v=kBfxF0aY3Mg"
    },
];

// Configurando arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"));

// Configuração do nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

// Criação de rota e capturando pedido do cliente
server.get("/", function(req, res) {
    const reversedIdeas = [...ideas].reverse();

    let lastIdeas = [];
    for(let idea of reversedIdeas.reverse()) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea);
            // lastIdeas = lastIdeas.reverse();
        }
    }

    return res.render("index.html", { ideas: lastIdeas });
});

server.get("/ideias", function(req, res) {
    
    const reversedIdeas = [...ideas].reverse();

    return res.render("ideias.html", { ideas: reversedIdeas });
})

// Servidor irá escutar a porta 3001
server.listen(3001);