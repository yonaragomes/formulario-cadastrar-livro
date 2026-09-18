import { useState } from 'react'
import CampoTexto from './CampoTexto'
import Livro from './Livro'
import './FormularioAluno.css'

function FormularioAluno() {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [anoPublicacao, setAnoPublicacao] = useState('')
    const [genero, setGenero] = useState('')

    const [livros, setLivros] = useState([])

    function handleSubmit(evento) {
        evento.preventDefault()

        const novoLivro = {id: Date.now(), titulo, autor, anoPublicacao, genero}
        setLivros([...livros, novoLivro])

        setTitulo('')
        setAutor('')
        setAnoPublicacao('')
        setGenero('')
    }

    return (
        <section className='formulario-aluno'>
            <h1>Cadastro de Livro</h1>

            <form onSubmit={handleSubmit}>
                <CampoTexto
                    label="Título do livro"
                    name="titulo"
                    value={nome}
                    ></CampoTexto>
            </form>
        </section>
    )


}

export default FormularioAluno;