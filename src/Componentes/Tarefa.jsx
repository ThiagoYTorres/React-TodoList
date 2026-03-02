import React from 'react'
import trashIcon from '../imgs/traash.svg'
import editIcon from '../imgs/edit.svg'

function Tarefa(prop) {
  
  const [done,setDone] = React.useState(false)

  function confirmarEdit(event){
    
      event.preventDefault()
      console.log(event.target)
      const formData = new FormData(event.target);
      const novaTarefa = formData.get('novaTarefa')
      prop.saveEdit(novaTarefa)
      console.log('prop',prop.edit)
  }

  function feito(){
    setDone(prev => !prev)
  }
  
  return (
    <>
    <div className='task'>
      <div className={done ? 'tarefa' : 'tarefa'} onClick={feito}>{ prop.edit ?
        <form className='editForm' onSubmit={confirmarEdit}>
          <input name='novaTarefa' type='text'/>
          <button type='submit'>SALVAR</button> 
          <button onClick={prop.cancelEdit} className='closeE'>x</button> 
        </form>
          : prop.tarefa}</div>
        <div className='icons'>
          <span className='material-symbols-outlined editicon' onClick={prop.editarTarefa}> edit </span>
          <span onClick={prop.deletarTarefa} className='material-symbols-outlined lixo'>delete</span>
        </div>
    </div>
    </>
  )
}

export default Tarefa