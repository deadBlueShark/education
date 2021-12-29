import React, { Component } from "react";

import userStore from './stores/UserCardStore'

class UserCard extends Component {
  render() {
    const { name, description, likes, location } = userStore.getState()

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
