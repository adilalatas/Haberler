import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Newshome from "./componenets/pages/NewsHome";
import Business from "./componenets/pages/Business";
import Entertainment from "./componenets/pages/Entertainment";
import Healt from "./componenets/pages/Healt";
import Science from "./componenets/pages/Science";
import Sports from "./componenets/pages/Sports";
import Technology from "./componenets/pages/Technoloogy";
import General from "./componenets/pages/General";

export default class App extends Component {
  state = {
    search: "",
    category: ["Home", "Business", "Entertainment", "Health", "Science", "Sports", "Technology", "General",],
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
    const apiKey = 'b0233383aaaf46a2a63e8b9bde8097dc';
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
        <div className="container-fluid my-2 border ">
          <div className="row-md-12 ">
            <div className="col-md-12 ">
              <Routes>
                <Route path={`/`} element={<Newshome pages={this.state.category[0]} country={this.state.language} search={this.state.search} key={this.state.newKey} apiKey={apiKey} />} />
                <Route path={`/` + this.state.category[1]} element={<Business pages={this.state.category[1]} category={this.state.category[1]} country={this.state.language} search={this.state.search}  apiKey={apiKey}/>} />
                <Route path={`/` + this.state.category[2]} element={<Entertainment pages={this.state.category[2]}  category={this.state.category[2]} country={this.state.language} search={this.state.search}  apiKey={apiKey}/>} />
                <Route path={`/` + this.state.category[3]} element={<Healt pages={this.state.category[3]}  category={this.state.category[3]} country={this.state.language} search={this.state.search}  apiKey={apiKey}/>} />
                <Route path={`/` + this.state.category[4]} element={<Science pages={this.state.category[4]} category={this.state.category[4]} country={this.state.language} search={this.state.search}  apiKey={apiKey}/>} />
                <Route path={`/` + this.state.category[5]} element={<Sports pages={this.state.category[5]}  category={this.state.category[5]} country={this.state.language} search={this.state.search} apiKey={apiKey}/>} />
                <Route path={`/` + this.state.category[6]} element={<Technology pages={this.state.category[6]}  category={this.state.category[6]} country={this.state.language} search={this.state.search} apiKey={apiKey}/>} />
                <Route path={`/` + this.state.category[7]} element={<General pages={this.state.category[7]} category={this.state.category[7]} country={this.state.language} search={this.state.search} apiKey={apiKey} />} />
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
