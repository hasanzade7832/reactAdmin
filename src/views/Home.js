import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SubTabs from "../components/home/tabs";
import tabData from "../components/home/dataTabs";

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
  const [tabIndex, setTabIndex] = React.useState(0);
  const [subTabsContent, setSubTabsContent] = React.useState([]);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const allSubTabs = tabData;

  useEffect(() => {
    if (tabIndex >= allSubTabs.length) {
      setSubTabsContent();
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
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="tabs">
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
                  style={{ fontSize: "0.8rem", fontWeight: "bold",marginTop:"30px" }}
                />
              ))}
            </Tabs>
          </Box>

          <CustomTabPanel value={tabIndex} index={tabIndex}>
            <SubTabs content={subTabsContent} />
          </CustomTabPanel>
        </Box>

      </div>
    </>
  );
}
