import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id:1,
          title: 'То авто',
          img: 'img_sto_1.png',
          desc: 'Запишитесь, на То для вашего авто.',
          category: 'То авто',
          price: '800 '
        },
        {
          id:2,
          title: 'Замена масла авто',
          img: 'img_sto_2.png',
          desc: 'Запишитесь, на замену масла для вашего авто.',
          category: 'То авто',
          price: '2800 '
        },
        {
          id:3,
          title: 'Диагностика ходовой авто',
          img: 'img_sto_3.png',
          desc: 'Запишитесь, диагностику для вашего авто.',
          category: 'Ходовая авто',
          price: '3800 '
        },
        {
          id:4,
          title: 'Диагностика рулевой рейки авто',
          img: 'img_sto_31.png',
          desc: 'Запишитесь, диагностику для вашего авто.',
          category: 'Ходовая авто',
          price: '3400 '        },
        {
          id:5,
          title: 'Диагностика CVT авто',
          img: 'img_sto_4.png',
          desc: 'Запишитесь, на диагностика CVT для вашего авто.',
          category: 'CVT авто',
          price: '4800 '
        }
      ],
      showFullItem: false,
      fulItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render(){
    return (
      <div className='wrapper'>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer/>  
    </div>
  );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
   
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  
  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]}, )
  }

}

export default App;
