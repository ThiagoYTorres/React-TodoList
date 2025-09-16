import React from 'react'
import trashIcon from '../imgs/traash.svg'
import editIcon from '../imgs/edit.svg'

function Tarefa(prop) {
  const [done,setDone] = React.useState(false)
  function feito(){
    setDone(prev => !prev)
  }
  
  return (
    <>
    <div className='task'>
    <p className={done ? 'done' : 'tarefa'} onClick={feito}>{prop.tarefa}</p>
    <div className='icons'>
      <img src={editIcon} alt='edit-icon' className='editicon' onClick={prop.editarTarefa}/>
      <span  alt="trash-icon" onClick={prop.deletarTarefa} className='material-symbols-outlined lixo'>delete</span>
        
    </div>
    </div>
    </>
  )
}

export default Tarefa