import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const { id, cover, title } = this.props;

    return (
      <Link to={`/places/${id}`} className="card_detail-link">
        <div className="card_detail">
          <img className="card_detail-img" src={cover} alt={title} />
          <h3 className="card_detail-txt">{title}</h3>
        </div>
      </Link>
    );
  }
}

export default Card;
