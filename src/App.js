import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import NewsHome from "./componenets/pages/NewsHome";
import Category from "./componenets/pages/Category";
export default class App extends Component {
  state = {
    search: "",
    categories: [
      "Home",
      "Business",
      "Entertainment",
      "Health",
      "Science",
      "Sports",
      "Technology",
      "General",
    ],
    activeCategoryIndex: 0,
    language: "tr",
    languages: [
      { label: "Türkiye", value: "tr" },
      { label: "United States", value: "us" },
      { label: "Germany", value: "de" },
    ],
    apiKey: "b0233383aaaf46a2a63e8b9bde8097dc",
  };

  handleSearchValue = (search) => {
    this.setState({ search });
  };

  handleActiveCategoryIndex = (activeCategoryIndex) => {
    this.setState({ activeCategoryIndex });
  };

  handleLanguageChange = (language) => {
    this.setState({ language, newKey: Date.now() });
  };

  render() {
    const { search, categories, activeCategoryIndex, language, languages, apiKey } = this.state;
    return (
      <div>
        <div className="container-fluid ">
          <Navbar
            onSearch={this.handleSearchValue}
            category={categories}
            activeCategory={activeCategoryIndex}
            setActiveCategoryId={this.handleActiveCategoryIndex}
            language={language}
            languages={languages}
            handleLanguageChange={this.handleLanguageChange}
          />
        </div>
        <div className="container-fluid my-2 border ">
          <div className="row-md-12 ">
            <div className="col-md-12 ">
              <Routes>
                <Route path="/" element={<NewsHome pages={categories[0]} country={language} search={search} key={Date.now()} apiKey={apiKey} />} />
                {categories.map((category, index) => (
                  <Route key={index} path={`/${category.toLowerCase()}`} element={<Category category={category} country={language} search={search} apiKey={apiKey} pagesName={categories[index]} />} />
                ))}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
