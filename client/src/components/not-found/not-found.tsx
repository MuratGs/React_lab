

function NotFoundPage() {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Page not found</p>
      <a className="not-found__link" href="/">
        Go back to main page
      </a>
    </section>
  );
}

export default NotFoundPage;
