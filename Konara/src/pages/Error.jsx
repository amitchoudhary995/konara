import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = ({ error }) => {
  const message = error?.statusText || 'Something went wrong.';
  const status = error?.status || 500;

  return (
    <>
      <Helmet>
        <title>{`${status} – Konara`}</title>
        <meta name="description" content="Error page for Konara BIPV website" />
      </Helmet>
      <section className="flex min-h-screen items-center justify-center bg-background text-text">
        <div className="max-w-xl text-center p-8">
          <h1 className="text-6xl font-extrabold text-primary mb-4">{status}</h1>
          <p className="text-2xl font-medium text-muted mb-6">{message}</p>
          <p className="text-lg text-muted mb-8">
            We couldn't find the page you were looking for or something went wrong.
          </p>
          <Link
            to="/"
            className="inline-block bg-secondary text-white font-bold py-3 px-6 rounded-full hover:bg-secondary/90 transition"
          >
            Return Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
