import React, { useState } from 'react';

export default function Navbar(props) {
  const { languages, language } = props;

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary p-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Haberler</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 ">
            {props.category.map((category, id) => (
              <li className="nav-item" key={id}>
                <a className={`nav-link ${props.activeCategory === id ? "active" : ""}`} aria-current="page" href="#" onClick={() => props.setActiveCategoryId(id)}>{category}</a>
              </li>
            ))}
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Haber Ara" aria-label="Search" onChange={(e) => props.onSearch(e.target.value)} />

            <button className="btn btn-outline-success" type="submit">Ara</button>
          </form>
          <nav className='nav'>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownLanguage" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {languages.find(lang => lang.value === language).label}
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdownLanguage">
                {languages.map((lang, id) => (
                  <li key={id}>
                    <a className="dropdown-item" href="#" onClick={() => props.handleLanguageChange(lang.value)}>
                      {lang.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </nav>

        </div>
      </div>
    </nav>
  );
}
