import React from 'react'
import Tarefa from './Tarefa'
import { v4 as uuidv4 } from 'uuid'

function ListaTarefa() {

    const [tarefas, setTarefas] = React.useState([])
    const [eInput, setEinput] = React.useState(true)

    console.log(tarefas)

    function gerarTarefa(formData){
        const tarefa = formData.get('tarefa')
        if (tarefa == ''){
            setEinput(false)
        }
        else{
            setTarefas( prevTarefas => ([...prevTarefas,
                {
                    texto: tarefa, 
                    id: uuidv4(),
                    isEditing: false
                }
            ])
            )
            setEinput(true)
        }
    }
    


    
   function saveEdit(index, novoTexto){
        setTarefas(prevTarefas => prevTarefas.map((e, i) => i === index ? 
        ({...e,
            isEditing:!e.isEditing,
            texto: novoTexto === '' ? e.texto : novoTexto
        }) : e
            
        ))
        console.log(index, `Tarefa`)
   }

    const lista = tarefas.map((el,index) => (
            <Tarefa 
                tarefa={el.texto} 
                tarefas={tarefas}
                key={el.id} 
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
        setTarefas(prevTarefas => prevTarefas.map((e, i) => i === index ? 
        ({...e,isEditing:!e.isEditing}) : e
    ))
        
    }
    function cancelEdit(index){
         setTarefas(prevTarefas => prevTarefas.map((e, i) => i === index ? 
         ({...e,isEditing:!e.isEditing}) : e
    ))
    }
    console.log(eInput)
  return (
    <>
        <main>
            <header className='header'>
                <h1>To Do List</h1>
                <p>Escreva uma tarefa e clique em ADD para adiciona-la na lista</p>
            </header>
        <form className='gerarT' action={gerarTarefa}>
            <div className='tarefa-inp'>
            <input 
                    name='tarefa' 
                    placeholder='Adicione uma tarefa' 
                    className='addTarefa'
                    type='text'
                />
                <button className='add'>ADD</button>
            </div>
            { eInput ? null : <div className='warning'>
                <p>ERRO: Input vazio!</p>
            </div>  }
        </form>
            <ul className='lista-tarefas'>
                <h2 className='list'>Tarefas</h2>
                <div>
                {lista}
            {tarefas.length == 0 ? <h1 className='vazio'>Sua lista de tarefas está vazia, adicione uma tarefa...</h1> : null}
                </div>
            </ul>
        </main>
    </>
  )
}

export default ListaTarefa