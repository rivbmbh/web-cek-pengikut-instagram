import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center py-7 mt-14 justify-center gap-3">
        <h1 className="bg-linear-to-r from-accent via-teal-200 to-emerald-300 bg-clip-text text-6xl font-extrabold text-transparent ...">
          Insta
          <span className="bg-linear-to-r bg-clip-text from-emerald-200 via-teal-200 to-accent">
            Cik
          </span>
        </h1>
        <div className="py-10">
          <img src="cool.webp" alt="capybara" className="w-44" />
        </div>
        <div className="space-y-4">
          <p className="text-3xl font-bold text-center">
            <TypeAnimation
              sequence={[
                "Find out who’s following, unfollowing, or ghosting you!",
                500,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </p>
        </div>
        <div className="text-center mt-14">
          <button className="btn btn-dash btn-accent text-lg uppercase">
            <a href="/upload" className="py-5">
              Get Started
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
