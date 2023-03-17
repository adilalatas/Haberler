import React, { Component } from "react";
import Navbar from "./componenets/Navbar";
import New from "./componenets/NewsHome";

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


  render() {
    if(this.state.category[this.state.activeCategoryId]){
      console.log(this.state.category[this.state.activeCategoryId])
    }
  
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
            {/* <New country={this.state.language} search={this.state.search} key={this.state.newKey} onSearch={this.searchValue} /> */}
              {/* burada key vererek React ın, componentların render edilmesi sırasında hangi componentin değiştini anlaması için */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
