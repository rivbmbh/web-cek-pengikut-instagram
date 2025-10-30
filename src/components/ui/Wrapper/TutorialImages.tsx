import { useImageFullView } from "@/components/image/FullViewContext";
import type { TutorialImagesProps } from "@/types";

const TutorialImages: React.FC<TutorialImagesProps> = ({
  number,
  imageUrl,
  caption,
}) => {
  const { openImage } = useImageFullView();

  const handleClickFullView = () => {
    openImage(imageUrl);
  };
  return (
    <>
      <div className="w-full flex items-baseline gap-5 justify-center">
        <div className="flex justify-center items-center w-5 h-5 bg-accent p-4 rounded-full text-base font-bold">
          <p>{number}</p>
        </div>
        <div className="flex flex-col justify-center gap-4 w-3/5">
          <p className="text-justify text-base">{caption}.</p>
          <img
            src={imageUrl}
            alt="image"
            onClick={handleClickFullView}
            className="cursor-pointer w-60 sm:w-52 md:w-72 lg:w-80"
          />
        </div>
      </div>
    </>
  );
};
export default TutorialImages;
