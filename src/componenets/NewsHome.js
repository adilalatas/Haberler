import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
export default function Newshome(props) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const apiKey = '03fc8c06bf2e4cbbbacb8a3a0be845c4';
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${apiKey}`;
    if (props.category) {
      apiUrl += `&category=${props.category}`;
    }
    const searchUrl = `https://newsapi.org/v2/everything?q=${props.search}&apiKey=${apiKey}`;
    fetch(props.search ? searchUrl : apiUrl)
      .then(response => response.json())
      .then(data => {
        setCards(data.articles);
        console.log(data.articles)
      });
  }, [props.country, props.category, props.search]);
  const { t, } = useTranslation();
  return (
    <div className='container text-center'>
       <h1>{t(props.pages)}</h1>
      {props.search}
      <div className="row py-3">
        {cards.map((card, index) => {
          return (
            <div key={index} className="col-md-4 mb-3">
              <div className="card text-center" style={{ width: "100%" }}>
                <img src={card.urlToImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href={card.url} className="btn btn-primary">Devamını Oku</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
