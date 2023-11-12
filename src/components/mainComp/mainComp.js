import { useText } from "../../contex/TextContext";
import SplitPane from "react-split-pane";

const MainComp = () => {
  const { tableComponent, showSplitPane } = useText();

  return (
    <>
      {showSplitPane && (
        <SplitPane
          split="vertical"
          minSize={50}
          defaultSize="55%"
          flex="1"
          minWidth={100}
        >
          <div
            style={{
              backgroundColor: "#e1e1e1",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                backgroundColor: "#e1e1e1",
                width: "100%",
                height: "100%",
                // اجزای درون split باید حداقل 100px عرض و ارتفاع داشته باشند
                flex: "1",
              }}
            >
              {tableComponent}
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#e1e1e152",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </SplitPane>
      )}
    </>
  );
};

export default MainComp;
