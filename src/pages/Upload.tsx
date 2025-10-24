import Submit from "@/components/ui/Button/Submit";
import FileInput from "@/components/ui/Input/FileInput";

const Upload = () => {
  return (
    <>
      <div className="flex justify-center w-full items-center pt-32 sm:pt-20 h-[55dvh] sm:h-[70dvh]">
        <div className="container px-4 sm:px-0 mx-auto">
          <h2 className="text-3xl text-center mt-20 sm:mt-14 font-bold py-5">
            Find out who’s not following you back on Instagram
          </h2>
          <form className="flex flex-col mx-auto gap-y-7 mt-8 w-max">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="followersFile"
                className="font-semibold text-base"
              >
                Upload JSON file (e.g., followers_1.json)
              </label>
              <FileInput id="followersFile" />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="followersFile"
                className="font-semibold text-base"
              >
                Upload JSON file (e.g., following.json)
              </label>
              <FileInput id="followersFile" />
            </div>
            <div className="mt-7">
              <Submit name="checking" />
            </div>
          </form>
          <p className="text-sm text-center my-7">
            If you don’t have the JSON files yet, visit the&nbsp;
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
