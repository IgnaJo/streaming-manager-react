import React from 'react'
import { moneyFormat } from '../helpers'
const SingleItem = ({price, type, id, deleteItem, editItem}) => {
const urlImage = `/src/Images/${type}.png`
const HandleDelete = (e) =>{
    e.preventDefault();
    const answer = window.confirm(`Eliminar Subscripción a ${type}`)
    if(answer){
        deleteItem(id);

    }
}

const HandleEdit = (e) =>{
    e.preventDefault();
    editItem(id);
}
  return (
    <div className='single-item'>
        <img src={urlImage} alt='service'/>
        <h3>Precio: {moneyFormat(Number(price))}</h3>
        <a href='' onClick={HandleDelete}>Borrar</a>
        <a href='' onClick={HandleEdit}>Editar</a>
        
        </div>
  )
}

export default SingleItem