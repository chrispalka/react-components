// var GroceryList = () => (
//   <ul>
//     <li>Cheese</li>
//     <li>Pasta</li>
//   </ul>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));

// var GroceryList = () => (
//   <ul>
//     <Cheese />
//     <Pasta />
//   </ul>
// );


// var Cheese = () => (
//   <li>Cheese</li>
// );

// var Pasta = () => (
//     <li>Pasta</li>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// );

// var GroceryList = () => (
//   <GroceryListItem groceryItems = {['Cheese', 'Pasta']}/>
// );



// ReactDOM.render(<GroceryList />, document.getElementById("app"));



// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render () {
//     return (
//       <li>{this.props.groceryItem}</li>
//     );
//   }
// }

// var GroceryList = (props) => (
//   <ul>
//     {props.groceryItems.map(groceryItem =>
//       <GroceryListItem groceryItem={groceryItem} />
//     )}
//   </ul>
// )


// ReactDOM.render(<GroceryList groceryItems = {['Cheese', 'Pasta']} />, document.getElementById("app"));

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render () {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style = {style} onMouseOver = {this.onListItemHover.bind(this)} onMouseOut = {this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
)


ReactDOM.render(<GroceryList groceryItems = {['Cheese', 'Pasta']} />, document.getElementById("app"));