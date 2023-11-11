import React from "react";
import { Grid } from "@mui/material";
import { useText } from "../../contex/TextContext";

export default function SubTabs({ content }) {
  const { changeText } = useText();

  const handleClick = (itemName) => {
    changeText(itemName);
  };

  if (content == [] || content == null) {
    return;
  }

  return (
    <Grid container spacing={5}>
      {content.map((item, index) => {
        // console.log("item", item);
        return (
          <Grid
            item
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => handleClick(item.name)}
          >
            <img src={item.imageURL} width="30" />
            <span style={{ fontSize: "1rem" }}>{item.name}</span>
          </Grid>
        );
      })}
    </Grid>
  );
}
