import React from 'react'
import trashIcon from '../imgs/traash.svg'
import editIcon from '../imgs/edit.svg'

function Tarefa(prop) {
  
  const [done,setDone] = React.useState(false)
  const [texto, setTexto] = React.useState(prop.tarefa)

  function feito(){
    setDone(prev => !prev)
  }
  
  console.log(prop.edit)
  return (
    <>
    <div className='task'>
      <p className={done ? 'done' : 'tarefa'} onClick={feito}>{ prop.edit ?
      <form className='editForm'>
         <input></input> <button onClick={prop.editarTarefa}>SALVAR</button> 
         <button onClick={prop.cancelEdit}>x</button> 
      </form>
          : texto}</p>
        <div className='icons'>
          <img src={editIcon} alt='edit-icon' className='editicon' onClick={prop.editarTarefa}/>
          <span  alt="trash-icon" onClick={prop.deletarTarefa} className='material-symbols-outlined lixo'>delete</span>
        </div>
    </div>
    </>
  )
}

export default Tarefa