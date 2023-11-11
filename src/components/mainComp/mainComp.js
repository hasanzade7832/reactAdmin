import { useText } from "../../contex/TextContext";


const MainComp = () => {
  const { tableComponent } = useText();

  return (
    <>
      <span>{tableComponent}</span>
    </>
  );
};

export default MainComp;
