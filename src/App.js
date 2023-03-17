import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Newshome from "./componenets/NewsHome";
import Business from "./componenets/pages/Business";
import Entertainment from "./componenets/pages/Entertainment";
import Healt from "./componenets/pages/Healt";
import Science from "./componenets/pages/Science";
import Sports from "./componenets/pages/Sports";
import Technology from "./componenets/pages/Technoloogy";
import General from "./componenets/pages/General";
import Prolitics from "./componenets/pages/Politics";
export default class App extends Component {
  state = {
    search: "",
    category: ["Home", "Business", "Entertainment", "Health", "Science", "Sports", "Technology", "General", "Politics"],
    activeCategoryId: "",
    language: "tr",
    languages: [
      { label: 'Türkiye', value: 'tr' },
      { label: 'United States', value: 'us' },
      { label: 'Germany', value: 'de' },
    ],
    newKey: 0, // Add a key to the state
  };
  searchValue = search => {
    this.setState({ search: search });
  };
  handleLanguageChange = (value) => {
    // Update the key when the language changes
    this.setState({ language: value, newKey: this.state.newKey + 1 });
  };
  selectcategory() {
    if (this.state.category[this.state.activeCategoryId]) {
      return this.state.category[this.state.activeCategoryId]
    }
  }
  render() {
    return (
      <div>
        <div className="container-fluid ">
          <Navbar
            onSearch={this.searchValue}
            category={this.state.category}
            activeCategory={this.state.activeCategoryId}
            setActiveCategoryId={(id) => this.setState({ activeCategoryId: id })}
            language={this.state.language}
            languages={this.state.languages}
            handleLanguageChange={this.handleLanguageChange}
          />
        </div>
        <div className="container-fluid my-2">
          <div className="row">
            <div className="col border">
              <Routes>
                <Route path={`/`} element={<Newshome pages={this.state.category[0]} country={this.state.language} search={this.state.search} key={this.state.newKey} onSearch={this.searchValue} />} />
                <Route path={`/` + this.state.category[1]} element={<Business pages={this.state.category[1]} />} />
                <Route path={`/` + this.state.category[2]} element={<Entertainment pages={this.state.category[2]} />} />
                <Route path={`/` + this.state.category[3]} element={<Healt pages={this.state.category[3]} />} />
                <Route path={`/` + this.state.category[4]} element={<Science pages={this.state.category[4]} />} />
                <Route path={`/` + this.state.category[5]} element={<Sports pages={this.state.category[5]} />} />
                <Route path={`/` + this.state.category[6]} element={<Technology pages={this.state.category[6]} />} />
                <Route path={`/` + this.state.category[7]} element={<General pages={this.state.category[7]} />} />
                <Route path={`/` + this.state.category[8]} element={<Prolitics pages={this.state.category[8]} />} />
              </Routes>
              {/* <Newshome country={this.state.language}  search={this.state.search} key={this.state.newKey} onSearch={this.searchValue} /> */}
              {/* burada key vererek React ın, componentların render edilmesi sırasında hangi componentin değiştini anlaması için */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
