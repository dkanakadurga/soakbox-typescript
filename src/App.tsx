import React, { Component } from 'react';
import NavTop from './components/NavTop';

class App extends Component {

public render() {
  const navigation = {
    brand: { name: "NavbarScroller", to: "/" },
    links: [
      { name: "About Me", to: "/about" },
      { name: "Blog", to: "/blog" },
      { name: "Developement", to: "/dev" },
      { name: "Graphic Design", to: "/design" },
      { name: "Contact", to: "/contact" },
    ]
  }

  const { brand, links } = navigation;
  return (
    <div className="App">
      <NavTop brand={brand} links={links} />
    </div>
  );
}

}

export default App;
