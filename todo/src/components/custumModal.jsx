import React from 'react'

function custumModal({isOpen, onClose, onConfirm}) {
    if(!isOpen){
        return null;
    }
  return (
    <div className="modal-overlay">
        <div className="modal-content">
        <p>Você quer excluir a tarefa?</p>
        <button onClick={onConfirm}>Sim</button>
        <button onClick={onClose}>Não</button>

        </div>
    </div>
  )
}

export default custumModal;