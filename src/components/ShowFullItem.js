import React, { Component } from 'react'
import {FaRegShareFromSquare} from "react-icons/fa6"

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
          <img src={"./img/" + this.props.item.img} onClick={()=> this.props.onShowItem(this.props.item)}/>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>
          <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
          <div className='svg' onClick={() => this.props.onShowItem(this.props.item)}>x</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem

/* 7:51 #8 */