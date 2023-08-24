import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id:1,
          title:'Chairs',
          img:'chairs-1.webp',
          desc: 'CasaComforts',
          category: 'chairs',
          price: '139.99'
        },
        {
          id:2,
          title:'Table',
          img:'table-1.webp',
          desc: 'CasaComforts',
          category: 'table',
          price: '99.99'
        },
        {
          id:3,
          title:'Sofa',
          img:'sofa-3.jpg',
          desc: 'CasaComforts',
          category: 'Sofa',
          price: '69.99'
        },
        {
          id:4,
          title:'Journal',
          img:'journal.jpg',
          desc: 'CasaComforts',
          category: 'journal',
          price: '89.99'
        },
        {
          id:5,
          title:'Door',
          img:'door-5.jpg',
          desc: 'CasaComforts',
          category: 'door',
          price: '129.99'
        },
        {
          id:6,
          title:'Chandelier',
          img:'chandelier.jpg',
          desc: 'CasaComforts',
          category: 'chandelier',
          price: '169.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteToOrder = this.deleteToOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render () {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteToOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items = {this.state.currentItems} onAdd = {this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer/>
      </div>
    );
  }

  onShowItem (item) {
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory (category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteToOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }


  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({orders: [...this.state.orders, item]})
    }
  }
}
export default App;