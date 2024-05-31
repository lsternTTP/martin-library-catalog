import './AllRequests.css';
import Request from "./Request.jsx";

export default function AllRequests(props) {
  function liftRequestToRemoveHandler(bookToRemove) {
    props.removeFromRequestListHandler(bookToRemove);
  }

  return (
    <section id="all-requests-list">
      <h2 className="title">Requests</h2>

      {props.requestList.map((thisRequest) => (
        <Request
          liftRequestToRemoveHandler={liftRequestToRemoveHandler}
          book={thisRequest}
          key={thisRequest.id}
        ></Request>
      ))}
    </section>
  );
}
