/* Estilos gerais */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background: #f7f7f7;
    color: #333;
    transition: background 0.3s, color 0.3s;
}

/* Modo escuro */
body.dark {
    background: #121212;
    color: #eaeaea;
}

/* Header */
header {
    background: #222;
    color: #fff;
    text-align: center;
    padding: 40px 20px;
    position: relative;
}

/* Botão modo escuro */
#dark-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
}
body.dark #dark-toggle {
    color: #f1c40f;
}

/* Seções */
section {
    background: #fff;
    padding: 30px 20px;
    margin: 20px auto;
    max-width: 800px;
    border-radius: 8px;
    transition: background 0.3s;
}
body.dark section {
    background: #1e1e1e;
}

/* Títulos */
h2 {
    color: #333;
    border-left: 5px solid #222;
    padding-left: 10px;
}
body.dark h2 {
    color: #fff;
    border-left-color: #f1c40f;
}

/* Lista */
ul {
    list-style: none;
    padding: 0;
}

ul li {
    background: #eee;
    margin: 5px 0;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    transition: background 0.3s;
}
body.dark ul li {
    background: #2a2a2a;
}

/* Ícones dentro da lista */
ul li i {
    margin-right: 8px;
    color: #444;
    font-size: 18px;
}
body.dark ul li i {
    color: #f1c40f;
}

/* Rodapé */
footer {
    text-align: center;
    padding: 20px;
    color: #555;
}
body.dark footer {
    color: #ccc;
}
