import React from 'react';
import styles from '../components/custumModal.module.css'
function custumModal({isOpen, onClose, onConfirm}) {
    if(!isOpen){
        return null;
    }
  return (
    <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
        <h4>Deseja excluir esse item?</h4>
        <h5>Colocar as descrições das tarefas aqui.</h5>
        <div className={styles.button}>
        <button className={styles.btnLeft} onClick={onClose}>Não</button>
        <button className={styles.btnRight}  onClick={onConfirm}>Sim</button>
        </div>
       

        </div>
    </div>
  )
}

export default custumModal;