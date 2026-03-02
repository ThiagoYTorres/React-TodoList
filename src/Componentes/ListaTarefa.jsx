import React from 'react'
import Tarefa from './Tarefa'
import EditTarefa from './EditTarefa'

function ListaTarefa() {

    const [tarefas, setTarefas] = React.useState([])

    console.log(tarefas)

    function gerarTarefa(formData){
        const tarefa = formData.get('tarefa')
        if (tarefa == ''){
            alert('[ATENÇÃO] input vazio adicione uma tarefa')
        }
        else{
            setTarefas( prevTarefas => ([...prevTarefas,
                {
                    texto: tarefa, 
                    id: prevTarefas.length + 1,
                    isEditing: false
                }
            ])
            )
            console.log(tarefas)
        }
    }
    
   function saveEdit(index, novoTexto){
        setTarefas(prevTarefas => prevTarefas.map((e, i) => i == index ? 
        ({...e,
            isEditing:!e.isEditing,
            texto: novoTexto
        }) : e
            
        ))
        console.log(index, `Tarefa`)
   }

    const lista = tarefas.map((el,index) => (
            <Tarefa 
                tarefa={el.texto} 
                tarefas={tarefas}
                key={index} 
                saveEdit={(novoTexto) => saveEdit(index,novoTexto)}
                edit={el.isEditing}
                deletarTarefa={() => delTarefa(index)}
                editarTarefa={() => editTarefa(index)}
                cancelEdit={() => cancelEdit(index)}
            />
        ))

    // Quando clicar em editar quero que apareça um input
    // Defina o valor daquela tarefa como o valor do input
    function delTarefa(index) {
        setTarefas(prevTarefas => prevTarefas.filter((e, i) => i !== index))
    }

    function editTarefa(index){
        setTarefas(prevTarefas => prevTarefas.map((e, i) => i == index ? ({...e,isEditing:!e.isEditing}) : 
        e
    ))
        
    }
    function cancelEdit(index){
         setTarefas(prevTarefas => prevTarefas.map((e, i) => i == index ? ({...e,isEditing:!e.isEditing}) : 
        e
    ))
    }
    
  return (
    <>
    <main>
        <header className='header'>
            <h1>To Do List</h1>
            <p>Escreva uma tarefa e clique em ADD para adiciona-la na lista</p>
        </header>
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