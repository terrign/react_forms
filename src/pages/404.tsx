import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
      <h1 style={{ margin: '50px 0', textAlign: 'center' }}>Page Not Found</h1>
      <h2 style={{ textAlign: 'center' }}>
        <Link to="/">Back to Main</Link>
      </h2>
    </>
  );
}

export default PageNotFound;
