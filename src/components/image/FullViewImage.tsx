// ImageModal.js
import { useState } from "react";
import { useImageFullView } from "./FullViewContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function FullViewImage() {
  const { viewingImage, closeImage } = useImageFullView();
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  if (!viewingImage) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center h-screen p-8 text-white font-pixel bg-slate-950/50 backdrop-blur-xs">
        <button
          type="button"
          onClick={closeImage}
          className="relative right-0 -top-5 w-8 h-8 text-center text-white font-extrabold z-50 bg-gray-400 rounded-full hover:bg-gray-500 focus:bg-gray-500 active:scale-105 transition-colors ease-in-out"
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        <img
          src={viewingImage}
          alt="Zoomed"
          className={`max-w-[90%] max-h-[90%] rounded shadow-xl transition-all duration-300 ${
            loading ? "opacity-0 hidden" : "opacity-100 block"
          }`}
          onLoad={handleImageLoad}
        />
      </div>
    </>
  );
}
