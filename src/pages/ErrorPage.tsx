import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError() as Error;
  return (
    <>
      <h1>Ooops! Something went wrong...</h1>
      <h3>Error:</h3>
      <pre>{error.message}</pre>
    </>
  );
}

export default ErrorPage;
