import React from 'react'
import Tarefa from './Tarefa'
import EditTarefa from './EditTarefa'

function ListaTarefa() {

    const [tarefas, setTarefas] = React.useState([])

    function gerarTarefa(formData){
        
        const tarefa = formData.get('tarefa')
        if (tarefa == ''){
            alert('[ATENÇÃO] input vazio adicione uma tarefa')
        }
        else{
        setTarefas( prevTarefas => [...prevTarefas,tarefa])
        console.log(tarefas)
        }
    }
    const lista = tarefas.map((el,index) => (
        <Tarefa 
            tarefa={el} 
            key={index} 
            deletarTarefa={ () => delTarefa(index)}
            editarTarefa={() => editTarefa(index)}
        />
        ))
    // Quando clicar em editar quero que apareça um input
    // Defina o valor daquela tarefa como o valor do input
    function delTarefa(index) {
        setTarefas(prevTarefas => prevTarefas.filter((e, i) => i !== index))
    }

    function editTarefa(index){
        setTarefas(prevTarefas => prevTarefas.map(el => el = <EditTarefa/>))
    }

  return (
    <>
    <main>
        <h1>To Do List</h1>
    <form className='gerarT' action={gerarTarefa}>
        <input 
            name='tarefa' 
            placeholder='Adicione uma tarefa' 
            type='text'
        />
        <button>ADD</button>
        
    </form>
        <ul className='lista-tarefas'>
            {lista}
        </ul>
    </main>
    </>
  )
}

export default ListaTarefa