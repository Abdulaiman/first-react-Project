import { Component } from "react";
import "./card.styles.css";
class Card extends Component {
  render() {
    const { id, name, email, source, className } = this.props;
    return (
      <div className={className} key={id}>
        <img src={source} alt={`'monster' ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
export default Card;
