import React, { Component } from "react";
import IconSwitch from "./components/IconSwitch";
import CardsView from "./components/CardsView";
import ListView from "./components/ListView";


const viewList = "view_list";
const viewModule = "view_module";

class Store extends Component {
  state = {
    view: viewList,
  };

  
  handleSwitchView = () => {
    this.setState(({ view }) => ({
      view: view === viewList ? viewModule : viewList,
    }));
  };

  render() {
    const { products } = this.props;
    const { view } = this.state;
    const icon = view === viewList ? viewModule : viewList;

    return (
      <div>
        <IconSwitch icon={icon} onSwitch={this.handleSwitchView} />
        {view === viewList ? (
          <ListView items={products} />
        ) : (
          <CardsView cards={products} />
        )}
      </div>
    );
  }
}

export default Store;