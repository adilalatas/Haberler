import React,{useState,useEffect} from 'react';
import { useTranslation } from 'react-i18next';
export default function Technology(props) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const apiKey = '03fc8c06bf2e4cbbbacb8a3a0be845c4';
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}`;
    if (props.search) {
      apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&q=${props.search}&apiKey=${apiKey}`;
    }
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setCards(data.articles);
        console.log(data.articles)
      });
  }, [props.country, props.category, props.search]);
  const { t, } = useTranslation();
  return (
    <div className='container text-center my-2' >
      <div className='container w-50 my-3'>
        <h1 className='pagesname p-2'>{t(props.pages)}</h1>
      </div>
      <div className="row py-3">
        {cards.map((card, index) => {
          return (
            <div key={index} className="col-md-4 mb-3">
              <div className="card text-center" style={{ width: "100%" }}>
                <img src={card.urlToImage} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <a href={card.url} className="btn btn-primary">{t("ReadMore")}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
