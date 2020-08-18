import React, { Component } from "react";
import "./Box.scss";

export default class Box extends Component {
  render() {
    const { src, name, specs, info, id } = this.props.data;
    const { handleChange, handleDelete } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={src} alt="city tours" />
          <span className="close-btn">
            <i
              onClick={() => handleDelete(id)}
              className="fas fa-window-close"
            />
          </span>
        </div>
        <div className="tour-info">
          <h3>{name}</h3>
          <h4>{specs}</h4>
          <h5 onClick={handleChange}>
            info
            <span>
              <i className="far fa-arrow-alt-circle-down"></i>
            </span>
          </h5>

          {this.props.toggleInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
