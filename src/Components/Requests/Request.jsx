import './Request.css';

export default function Request(props) {
  function clickRemoveRequestHandler() {
    props.liftRequestToRemoveHandler(props.book);
  }
  
  return (
    <div id="request-card">
      <img className="request-image" src={props.book.img}></img>
      <div className="request-details">
        <h2 className="request-title">{props.book.title}</h2>
        <h3 className="request-author">{props.book.author}</h3>
        <button className="remove-button" onClick={clickRemoveRequestHandler}>Remove</button>
      </div>
      
    </div>
  )
}