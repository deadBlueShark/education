import React, { Component } from "react";

class UserCard extends Component {
  state = {
    name: "Alex Bakery",
    description: "Software Engineer, Speaker, and Occasional Model",
    likes: "Cats, Wine, and Black dresses",
    location: "localhost"
  };
  render() {
    const { name, description, likes, location } = this.state;

    return (
      <div className="card-user-container">
        <div className="card-user">
          <section className="User__img">
            <img src={"https://image.ibb.co/jj1FGp/user.png"} alt="user" />
          </section>

          <section className="User__info">
            <p>
              {" "}
              <span className="faint">I am</span> a {description}
            </p>
            <p>
              {" "}
              <span className="faint">I like</span> {likes}
            </p>

            <p className="User__info__details User__info__divider faint">
              <span>Name: </span>
              <span>{name}</span>
            </p>
            <p className="User__info__details faint">
              <span>Location: </span>
              <span>{location}</span>
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default UserCard;
