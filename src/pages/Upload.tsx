import UploadForm from "@/components/forms/UploadForm";

const Upload = () => {
  return (
    <>
      <div className="flex justify-center w-full items-center pt-9 sm:pt-7 ">
        <div className="container px-4 sm:px-0 mx-auto">
          <h2 className="text-3xl text-center font-bold py-5">
            Find out who’s not following you back on Instagram
          </h2>
          <UploadForm />
          <p className="text-sm text-center my-7">
            If you don't have the JSON files yet, visit the&nbsp;
            <a href="/tutorial" className="underline font-semibold">
              tutorial
            </a>{" "}
            page to learn how to get them
          </p>
        </div>
      </div>
    </>
  );
};

export default Upload;
