let livrosCadastrados = [
    {
        id: 1,
        titulo: 'O Enigma do Tempo',
        autor: 'Carlos Andrade',
        anoLancamento: 2015,
        notaAvaliacao: 4.7,
        genero: 'Ficção Científica'
    },
    {
        id: 2,
        titulo: 'Segredos do Submundo',
        autor: 'Mariana Costa',
        anoLancamento: 2019,
        notaAvaliacao: 4.5,
        genero: 'Mistério'
    },
    {
        id: 3,
        titulo: 'As Sombras da Noite',
        autor: 'Fernando Ribeiro',
        anoLancamento: 2021,
        notaAvaliacao: 4.8,
        genero: 'Terror'
    },
    {
        id: 4,
        titulo: 'A Jornada do Infinito',
        autor: 'Ana Beatriz Martins',
        anoLancamento: 2017,
        notaAvaliacao: 4.6,
        genero: 'Fantasia'
    },
    {
        id: 5,
        titulo: 'O Código Perdido',
        autor: 'Lucas Fernandes',
        anoLancamento: 2020,
        notaAvaliacao: 4.9,
        genero: 'Aventura'
    },
    {
        id: 6,
        titulo: 'Ecos do Passado',
        autor: 'Camila Duarte',
        anoLancamento: 2018,
        notaAvaliacao: 4.4,
        genero: 'Drama'
    }
];

const listarLivros = (req, res) => {
    res.json({
        error: false,
        data: livrosCadastrados
    });
};

const buscarLivro = (req, res) => {
    const resultado = livrosCadastrados.filter(livro => livro.id == req.params.id);
    if (resultado.length === 1) {
        res.json({
            error: false,
            data: resultado[0]
        });
    } else {
        res.status(404).json({
            error: true,
            message: `Nenhum livro encontrado com o ID ${req.params.id}.`
        });
    }
};

const cadastrarLivro = (req, res) => {
    const { id, titulo, autor, anoLancamento, notaAvaliacao, genero } = req.body;

    if (!id || !titulo || !autor || !anoLancamento || !notaAvaliacao || !genero) {
        return res.status(400).json({
            error: true,
            message: "Todos os campos são obrigatórios."
        });
    }

    if (typeof notaAvaliacao !== 'number' || notaAvaliacao < 0) {
        return res.status(400).json({
            error: true,
            message: "A nota de avaliação precisa ser um número maior ou igual a zero."
        });
    }

    const idExistente = livrosCadastrados.filter(livro => livro.id === id);
    
    if (idExistente.length > 0) {
        return res.status(400).json({
            error: true,
            message: "Já existe um livro registrado com esse ID."
        });
    }

    const novoLivro = {
        id,
        titulo,
        autor,
        anoLancamento,
        notaAvaliacao,
        genero
    };

    livrosCadastrados.push(novoLivro);

    res.json({
        error: false,
        message: "Livro cadastrado com sucesso.",
        data: novoLivro
    });
};

const atualizarLivro = (req, res) => {
    const { id } = req.params;
    const indexLivro = livrosCadastrados.findIndex(livro => livro.id == id);

    if (indexLivro === -1) {
        return res.status(404).json({
            error: true,
            message: `Livro com ID ${id} não localizado.`
        });
    }

    const { titulo, autor, anoLancamento, notaAvaliacao, genero } = req.body;

    if (!titulo || !autor || !anoLancamento || !notaAvaliacao || !genero) {
        return res.status(400).json({
            error: true,
            message: "Todos os campos são obrigatórios."
        });
    }

    if (typeof notaAvaliacao !== 'number' || notaAvaliacao < 0) {
        return res.status(400).json({
            error: true,
            message: "A nota de avaliação deve ser um valor positivo."
        });
    }

    livrosCadastrados[indexLivro] = {
        ...livrosCadastrados[indexLivro],
        titulo,
        autor,
        anoLancamento,
        notaAvaliacao,
        genero
    };

    res.json({
        error: false,
        message: `Livro de ID ${id} atualizado com sucesso.`,
        data: livrosCadastrados[indexLivro]
    });
};

const removerLivro = (req, res) => {
    const { id } = req.params;
    const idConvertido = Number(id);

    if (!idConvertido) {
        return res.status(400).json({
            error: true,
            message: "ID inválido."
        });
    }

    const novaLista = livrosCadastrados.filter(livro => livro.id !== idConvertido);

    if (novaLista.length === livrosCadastrados.length) {
        return res.status(404).json({
            error: true,
            message: `Livro de ID ${id} não encontrado.`
        });
    }

    livrosCadastrados = novaLista;

    res.json({
        error: false,
        message: "Livro removido com sucesso.",
        data: livrosCadastrados
    });
};

export { listarLivros, buscarLivro, cadastrarLivro, atualizarLivro, removerLivro };
