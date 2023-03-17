import React, { Component } from "react";
import Navbar from "./componenets/Navbar";
import New from "./componenets/New";

export default class App extends Component {
  state = {
    search: "",
    category: ["Anasayfa", "İş", "Eğlence", "Sağlık", "Bilim", "Spor", "Teknoloji"],
    activeCategoryId: "",
    language: "us",
    languages: [
      { label: 'Türkçe', value: 'tr' },
      { label: 'English', value: 'us' },
      { label: 'Deutsch', value: 'de' },
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


  render() {
    return (
      <div>
        <div className="container-fluid">
          <Navbar
            onSearch={this.searchValue}
            category={this.state.category}
            activeCategory={this.state.activeCategoryId}
            setActiveCategoryId={(id) => this.setState({ activeCategoryId: id })}
            language={this.state.language}
            languages={this.state.languages}
            handleLanguageChange={this.handleLanguageChange}
          />

          {this.state.search}
        </div>
        <div className="container-fluid my-2">
          <div className="row">
            <div className="col border">
              <New country={this.state.language}  category={"sports"} key={this.state.newKey}/> {/* burada key vererek React ın, componentların render edilmesi sırasında hangi componentin değiştini anlaması için */}
            </div>

          </div>
        </div>
      </div>
    );
  }
}
