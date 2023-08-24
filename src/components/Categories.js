import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'Chairs'
                },
                {
                    key: 'table',
                    name: 'Table'
                },
                {
                    key: 'Sofa',
                    name: 'Sofa'
                },
                {
                    key: 'journal',
                    name: 'Journal'
                },
                {
                    key: 'door',
                    name: 'Door'
                },
                {
                    key:'chandelier',
                    name:'Chandelier'
                }

            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.id} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories