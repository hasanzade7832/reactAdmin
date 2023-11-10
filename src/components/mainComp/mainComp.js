import { useText } from "../../contex/TextContext";

const MainComp = () => {
  const { text } = useText();
  const { data } = useText();

  return (
    <>
      <span>{text}</span> - <span>{data}</span>
    </>
  );
};

export default MainComp;
