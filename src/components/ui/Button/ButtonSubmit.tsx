interface ButtonSubmitProps {
  name: string;
}
const ButtonSubmit = ({ name, click, loading }: ButtonSubmitProps) => {
  return (
    <>
      <button
        onClick={click}
        className={`btn btn-soft btn-accent w-full capitalize`}
      >
        {name}
      </button>
    </>
  );
};

export default ButtonSubmit;
