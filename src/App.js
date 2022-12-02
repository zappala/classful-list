import React, { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props);
    // setup state
    this.state = {
      items: [],
      name: ''
    };

    // bind the handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleNewItem = this.handleNewItem.bind(this);
  }

  // handle a change in the input so it is stored
  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  // handle 
  handleNewItem(event) {
    event.preventDefault();
    const id = this.state.items.length
    this.state.items.push({ id: id, title: this.state.name });
    this.setState({ items: this.state.items })
    this.setState({ name: '' });
  }

  render() {
    return (
      <div>
        <ItemList items={this.state.items} />
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={this.handleNewItem}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Add an item
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="item" />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

class ItemList extends Component {
  render() {
    return (

      <div className="container mb-5 w-1/2">

        <ul className="flex flex-col p-4">
          {this.props.items.map(item => (
            <li className="border-gray-400 mb-2" key={item.id}>
              <div className="rounded-md p-4 select-none cursor-pointer bg-gray-300 hover:bg-blue-200 hover:shadow-lg">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">{item.title}</div>

                </div>
              </div>
            </li>

          ))}
        </ul>

      </div>
    )
  }
}

export default App;
