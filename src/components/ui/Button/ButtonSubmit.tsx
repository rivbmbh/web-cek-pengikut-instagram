interface ButtonSubmitProps {
  name: string;
}
const ButtonSubmit = ({ name }: ButtonSubmitProps) => {
  return (
    <>
      <button className={`btn btn-soft btn-accent w-full capitalize`}>
        {name}
      </button>
    </>
  );
};

export default ButtonSubmit;
