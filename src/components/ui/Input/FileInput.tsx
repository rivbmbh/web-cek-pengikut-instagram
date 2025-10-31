import type { FileInputProps } from "@/types";

const FileInput = ({ id }: FileInputProps) => {
  return (
    <>
      <input id={id} type="file" className="file-input file-input-accent" />
    </>
  );
};
export default FileInput;
