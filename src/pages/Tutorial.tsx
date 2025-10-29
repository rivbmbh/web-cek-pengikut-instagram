import { useImageFullView } from "@/components/image/FullViewContext";

const Tutorial = () => {
  const { openImage } = useImageFullView();
  const imageUrl = "/tutorial-image/1.webp";

  const handleClickFullView = () => {
    openImage(imageUrl);
  };

  return (
    <>
      <div className="w-full min-h-screen px-4">
        <div className="container mx-auto">
          <div className="w-full flex flex-col justify-center mt-10 pt-10">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-extrabold">
                Tutorial get JSON file from Instagarm
              </h1>
              <p>
                simak langkah demi langkah berikut dengan baik dan benar agar
                bisa mendapatkan hasil yang maksimal.
              </p>
            </div>
            <div className="grid grid-cols-3 w-3/5 justify-center">
              <div className="flex gap-5 justify-between">
                <p>1</p>
                <div>
                  <img
                    src={imageUrl}
                    alt="image"
                    onClick={handleClickFullView}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutorial;
