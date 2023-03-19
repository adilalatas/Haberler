import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Category(props) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}`;
    if (props.search) {
      apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&q=${props.search}&apiKey=${props.apiKey}`;
    }
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCards(data.articles);
        console.log(data.articles);
      });
  }, [props.country, props.category, props.search, props.apiKey]); // apiKey değişkenini de bağımlılık dizisine ekledik.
  
  const { t } = useTranslation();
  return (
    <div className="container text-center my-2">
      <div className="container w-50 my-3">
        <h1 className="pagesname p-2">{t(props.pagesName)}</h1>
      </div>
      <div className="row py-3">
        {cards.map((article, index) => {
          return (
            <div key={index} className="col-md-4 mb-3">
              <div className="card text-center" style={{ width: "100%" }}>
                <img src={article.urlToImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} className="btn btn-primary">
                    {t("ReadMore")}
                  </a>
                </div>
              </div>
            </div>  
          );
        })}
      </div>
    </div>
  );
}
