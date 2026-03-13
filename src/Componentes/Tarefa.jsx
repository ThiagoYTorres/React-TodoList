import React from 'react'

function Tarefa(prop) {
  
  const [done,setDone] = React.useState(false)

  function confirmarEdit(event){
    
      event.preventDefault()
      console.log(event.target)
      const formData = new FormData(event.target);
      const novaTarefa = formData.get('novaTarefa')
      prop.saveEdit(novaTarefa)
      console.log('prop',prop.edit)
      console.log(done)
  }

  function feito(){
    setDone(prev => !prev)
  }
  



  return (
    <>
    <div className='task'>
      <div>
        { prop.edit ?
          <form className='editForm' onSubmit={confirmarEdit}>
            <input name='novaTarefa' type='text' className='editTarefa'/>
            <button type='submit' className='save'>SALVAR</button> 
            <button onClick={prop.cancelEdit} className='closeE'>x</button> 
          </form>
            : <p className={done ? 'done' : 'tarefa'}>{prop.tarefa}</p> }
        </div>
        <div className='icons'>
          <input type='checkbox' className='chk' checked={done} onChange={feito} />
          <span className='material-symbols-outlined editicon' onClick={prop.editarTarefa}> edit </span>
          <span onClick={prop.deletarTarefa} className='material-symbols-outlined lixo'>delete</span>
        </div>
    </div>
    </>
  )
}

export default Tarefa