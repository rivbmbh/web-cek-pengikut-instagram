import TutorialImages from "@/components/ui/Wrapper/TutorialImages";
import tutorialData from "../data/tutorial.json";

const Tutorial = () => {
  return (
    <>
      <div className="w-full min-h-screen px-4">
        <div className="container mx-auto">
          <div className="w-full flex flex-col justify-center mt-10 pt-10">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-extrabold">
                Tutorial: Cara mendapatkan data JSON dari Instagram
              </h1>
              <p>
                simak langkah demi langkah berikut dengan baik dan benar agar
                bisa mendapatkan hasil yang maksimal.
              </p>
              {/* <h1 className="text-3xl font-extrabold">
                Tutorial: How to Get the JSON File from Instagram
              </h1>
              <p>
                Follow the step-by-step guide carefully to achieve the best
                results.
              </p> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-y-7 gap-x-0 md:px-5 mt-10 md:justify-evenly items-stretch p-5">
              {tutorialData.tutorial_data.map((data, index) => (
                <TutorialImages
                  key={index + data.imgTitle}
                  number={data.imgTitle}
                  imageUrl={`tutorial-image/${data.imgTitle}.webp`}
                  caption={data.imgCaption}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutorial;
