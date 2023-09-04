import React from 'react';
import styles from '../components/custumModal.module.css'
function custumModal({isOpen, onClose, onConfirm}) {
    if(!isOpen){
        return null;
    }
  return (
    <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
        <p>Você quer excluir a tarefa?</p>
        <p>Colocar as descrições das tarefas aqui.</p>
        <div className={styles.btn}>
        <button className={styles.btn} onClick={onClose}>Não</button>
        <button className={styles.btn} onClick={onConfirm}>Sim</button>
        </div>
       

        </div>
    </div>
  )
}

export default custumModal;