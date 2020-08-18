import React from "react";
import Box from "./Box";
import './Placeholder.scss'

export default class Placeholder extends React.Component {
  state = {
    toggleInfo: false,
    data: [
      {
        id: 1,
        src:
          "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        name: "London",
        specs: "London bridge",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab natus, perferendis consectetur officia aut praesentium nam vitae. Beatae, aut pariatur.",
      },
      {
        id: 2,
        src:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
        name: "Paris",
        specs: "Eifel",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab natus, perferendis consectetur officia aut praesentium nam vitae. Beatae, aut pariatur.",
      },
      {
        id: 3,
        src:
          "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&auto=format&fit=crop&w=2060&q=80",
        name: "New York",
        specs: "Colon street",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab natus, perferendis consectetur officia aut praesentium nam vitae. Beatae, aut pariatur.",
      },
    ],
  };

  handleChange = () => {
    this.setState({
      toggleInfo: !this.state.toggleInfo,
    });
  };

  handleDelete = (id) => {
    const sortedList = this.state.data.filter((item) => item.id !== id);
    
    this.setState({
        data: sortedList
    })
  };

  render() {
    return (
      <article className='tourlist'>
        {this.state.data.map((item, index) => (
          <Box
            data={item}
            handleChange={this.handleChange}
            key={index}
            toggleInfo={this.state.toggleInfo}
            handleDelete={this.handleDelete}
          />
        ))}
      </article>
    );
  }
}
