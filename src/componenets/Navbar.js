import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  const { languages, language } = props;
  const { t, i18n } = useTranslation();
  const [searh,setSearch]=useState();
  

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  const activeCategory = props.activeCategory || 0;

  function searchBtn (e){
    e.preventDefault();
     props.onSearch(searh)
  }
  return (
    <nav className="navbar navbar-expand-xl bg-body-tertiary " id="navbar">
      <div className="container-fluid ">
        <span className="navbar-brand" >
         <h2> {t('Haberler')}</h2>
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5 ">
            {props.category.map((category, id) => (
              <li className="nav-item" key={id}>
                <NavLink
                  className={`nav-link ${activeCategory === id || (!activeCategory && id === 0)
                    ? 'active'
                    : ''
                    }`}
                  aria-current="page"
                  to={id === 0 ? '/' : '/' + category}
                  onClick={() => props.setActiveCategoryId(id)} >
                  <p>{t(category)}</p>
                </NavLink>
              </li>
            ))}
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder={t('HaberAra')} aria-label="Search"
              onChange={(e) => setSearch(e.target.value)} />
            <button className="btn btn-outline-success"  onClick={searchBtn}>
              Ara
            </button>
          </form>
          <nav className="nav">
            <li className="nav-item dropdown border  mx-2 my-2 text-center" id="dropdown" >
              <span className="nav-link dropdown-toggle"  id="navbarDropdownLanguage" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                {languages.find((lang) => lang.value === language).label}
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownLanguage" >
                {languages.map((lang, id) => (
                  <li key={id}>
                    <span className="dropdown-item" onClick={() => props.handleLanguageChange(lang.value)} >
                      {lang.label}
                    </span>
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
