import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SubTabs from "../components/homeTabs/tabs";
import tabData from "../components/homeTabs/dataTabs";
import MainComp from "../components/mainComp/mainComp";
// import { TextContext } from "../contex/TextContext";
import {useText} from "../contex/TextContext";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [tabIndex, setTabIndex] = React.useState(1);
  const [subTabsContent, setSubTabsContent] = React.useState([]);
  const { changeText } = useText();

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
    changeText("");
  };

  const allSubTabs = tabData;

  useEffect(() => {
    console.log(allSubTabs)
    console.log(tabIndex)
    if (tabIndex >= allSubTabs.length) {
      setSubTabsContent(1);
      return;
    }

    setSubTabsContent(allSubTabs[tabIndex].subTabs);
  }, [tabIndex]);

  return (
    <>
      <div>
        <h4 className="headerTitle">Neco organizational Project Management </h4>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="tabs"
          >
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="secondary"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              {allSubTabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.tabName}
                  {...a11yProps(index)}
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    marginTop: "30px",
                  }}
                />
              ))}
            </Tabs>
          </Box>

          <CustomTabPanel value={tabIndex} index={tabIndex} className="subTabsStyles">
            <SubTabs content={subTabsContent} />
          </CustomTabPanel>
        </Box>
        <MainComp />
      </div>
    </>
  );
}
