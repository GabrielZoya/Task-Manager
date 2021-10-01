import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" color="blue" onClick={onClick} />
    </header>
  );
};

export default Header;
