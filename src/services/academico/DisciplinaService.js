class DisciplinaService {
    
    getAll() {
        const disciplina = localStorage.getItem('disciplina')
        return disciplina ? JSON.parse(disciplina) : []
    }

    get(id) {
        const disciplina = this.getAll()
        return disciplina[id]
    }

    create(dados) {
        const disciplina = this.getAll()
        disciplina.push(dados)

        localStorage.setItem('disciplina', JSON.stringify(disciplina))
    }

    update(dados, id) {
        const disciplina = this.getAll()
        disciplina.splice(id, 1, dados)
        localStorage.setItem('disciplina', JSON.stringify(disciplina))
    }

    delete(id) {
        const disciplina = this.getAll()
        disciplina.splice(id, 1)
        localStorage.setItem('disciplina', JSON.stringify(disciplina))
    }
}

export default new DisciplinaService()