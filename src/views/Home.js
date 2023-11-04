import * as React from "react";
import PropTypes from "prop-types";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import File from "../components/file/file";
import General from "../components/general/general";
import Form from "../components/form/form";
import ApprovalFlow from "../components/approvalflow/approvalflow";
import Program from "../components/program/program";
import Project from "../components/project/project";
import Logs from "../components/logs/logs";
import AccessApi from "../components/accessapi/accessapi"

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <h4 className="headerTitle">Neco organizational Project Management </h4>
      </div>
      <div style={{marginTop:"20px"}}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="tabs">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary"  variant="scrollable" scrollButtons allowScrollButtonsMobile>

              <Tab label="File" {...a11yProps(0)} />
              <Tab label="General" {...a11yProps(1)} />
              <Tab label="Form" {...a11yProps(2)} />
              <Tab label="ApprovalFlow" {...a11yProps(3)} />
              <Tab label="Program" {...a11yProps(4)} />
              <Tab label="Project" {...a11yProps(5)} />
              <Tab label="Logs" {...a11yProps(6)} />
              <Tab label="AccessApi" {...a11yProps(7)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <File/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <General/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Form/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <ApprovalFlow/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Program/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <Project/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
            <Logs/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={7}>
            <AccessApi/>
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
}
