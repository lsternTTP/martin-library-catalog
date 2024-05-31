import './Book.css';

export default function Book(props) {
  function clickRequestHandler() {
    props.liftBookToAppHandler(props.book);
  }
  
  return (
    <div className="book-card">
      <img className="book-image" src={props.book.img}></img>
      <div className="book-details">
        <h2 className="book-title">{props.book.title}</h2>
        <h3 className="book-author">{props.book.author}</h3>
        <p className="book-description">{props.book.description}</p>
        <p className="book-info">Published {props.book.yearPublished} in {props.book.language}</p>
      </div>
      <button className="requests-button" onClick={clickRequestHandler}>Add +</button>
    </div>
  )
}
