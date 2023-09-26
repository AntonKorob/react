import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'То авто',
                    name: 'То авто'
                },
                {
                    key: 'То авто',
                    name: 'Замена масла авто'
                },
                {
                    key: 'Ходовая авто',
                    name: 'Диагностика ходовой авто'
                },
                {
                    key: 'CVT авто',
                    name: 'Диагностика CVT авто'
                }
            
            ]
        }
    }

    render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories