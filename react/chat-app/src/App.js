import React from "react";

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id="main">
          <section id="messages-list">Message List</section>
          <section id="new-message">New Message</section>
        </section>
      </div>
    );
  }
}

export default App;
