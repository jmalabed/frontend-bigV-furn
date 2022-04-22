import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <div className="mx-5">
      <h1>URL Not found... :(</h1>
      <p>
        Please return <Link to="/">home</Link> and try again.
      </p>
    </div>
  );
};

export default NotFound;
