const NotFound = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img src="/masbro.webp" alt="capybara" className="mx-auto" />
            <div className="mt-5">
              <p className="text-7xl font-bold">404</p>
              <p className="text-2xl font-semibold my-4">Page Not Found</p>
            </div>
            <div className="text-center mt-14">
              <button className="btn btn-dash btn-accent text-lg uppercase">
                <a href="/" className="py-5">
                  Back to home
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
