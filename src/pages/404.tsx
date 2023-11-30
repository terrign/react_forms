import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <div>
        <Link to="/">Back to Main</Link>
      </div>
    </>
  );
}

export default PageNotFound;
