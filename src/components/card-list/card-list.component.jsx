import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
class CardList extends Component {
  render() {
    console.log("render from crd list");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, id, email } = monster;
          return (
            <Card
              name={name}
              id={id}
              email={email}
              source={`https://robohash.org/${id}?set=set2&size=180x180`}
              className={"card-container"}
            />
          );
        })}
      </div>
    );
  }
}
export default CardList;
