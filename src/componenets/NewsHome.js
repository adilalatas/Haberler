import React, { useState, useEffect } from 'react';

export default function New(props) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const apiKey = '8a7e4c9d597f463b9244417e8de89a07';
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
  return (
    <div className='container'>
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
