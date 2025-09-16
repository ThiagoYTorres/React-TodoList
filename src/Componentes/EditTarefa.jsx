import React from 'react'
import Tarefa from './Tarefa'

function EditTarefa() {

    const [tarefasEdit, setTarefasEdit] = React.useState('')

    function gerarTarefa(formData){
        
        const tarefa = formData.get('tarefa')
        if (tarefa == ''){
            alert('[ATENÇÃO] input vazio adicione uma tarefa')
        }
        else{
        setTarefasEdit( prevTarefas => prevTarefas = tarefasEdit )
        console.log(tarefasEdit)
        }
    }

    function delTarefa(index) {
        setTarefasEdit(prevTarefas => prevTarefas.filter((e, i) => i !== index))
    }


  return (
 <>      
    <form className='editT' action={gerarTarefa}>
        <input 
            name='tarefa' 
            placeholder='Adicione uma tarefa' 
            type='text'
        />
    </form>
        

 </>
  )
}

export default EditTarefa