import React, { useContext } from "react";
import { Menu } from "antd";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ReceiptIcon from "@material-ui/icons/Receipt";
import Typography from '@material-ui/core/Typography';
import "./components.css";
import { pinContext } from './Context';
import { makeStyles, fade } from "@material-ui/core/styles";
const { SubMenu } = Menu;


const useStyles = makeStyles((theme) => ({
  menuitems: {
    fontSize:"2.4rem",
    
  },
}))

const MyMenu = () => {
  const classes = useStyles();
  // Use Pincontext
  const { pin } = useContext(pinContext);

  return (
    <>
      <br />
      <br />
      <Menu
        style={{ width: 300 }}
        mode="vertical"
        theme="light"
        triggerSubMenuAction="click"
      >
        {/* Transaction */}
        <Menu.Item   className="menuitems">
          <MonetizationOnIcon fontSize="large" />

          &nbsp;&nbsp;&nbsp;&nbsp;  Transaction
        </Menu.Item>

        {/* Cash Management */}
        <Menu.Item className="menuitems">
          <AccountBalanceIcon fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cash management
        </Menu.Item>

        {/* Settlement */}

        <Menu.Item className="menuitems">
          <EventAvailableIcon fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settlement
        </Menu.Item>

        {/* Accounting */}

        <Menu.Item className="menuitems">
          <AccountBalanceWalletIcon fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accounting
        </Menu.Item>

        {/* Reporting */}
        <Menu.Item className="menuitems">
          <ReceiptIcon fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reporting
        </Menu.Item>

        {/* Master Data */}
        <SubMenu
          popupClassName={pin ? 'pinned-menu' : 'unpinned-menu'}
          className="menuitems"
          icon={<LocalAtmIcon fontSize="large" />}
          title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Master Data"
        >
          <SubMenu title="General">
            <Menu.Item className="menuitems">User</Menu.Item>
          </SubMenu>
          <SubMenu title="Currency">
            <Menu.Item className="menuitems">Currencies</Menu.Item>
            <Menu.Item className="menuitems">Currency Conversion</Menu.Item>
            <Menu.Item className="menuitems">Bank Clearing Code</Menu.Item>
          </SubMenu>
          <SubMenu title="Location">
            <Menu.Item className="menuitems">Location</Menu.Item>
            <Menu.Item className="menuitems">Holiday Schedule</Menu.Item>
          </SubMenu>
          <SubMenu title="Company">
            <Menu.Item className="menuitems">Legal Entity</Menu.Item>
            <Menu.Item className="menuitems">Company</Menu.Item>
            <Menu.Item className="menuitems">Company Bank Account</Menu.Item>
            <Menu.Item className="menuitems">Company Account Type</Menu.Item>
          </SubMenu>
          <SubMenu title="Counterparty">
            <Menu.Item className="menuitems">Financial Institution</Menu.Item>
            <Menu.Item className="menuitems" >CounterParty</Menu.Item>
            <Menu.Item className="menuitems">CounterParty Contact</Menu.Item>
            <Menu.Item className="menuitems">CounterParty Bank Account</Menu.Item>
          </SubMenu>
          <SubMenu title="User Defined Data">
            <Menu.Item className="menuitems">Portfolio</Menu.Item>
            <Menu.Item className="menuitems" >Group</Menu.Item>
            <Menu.Item className="menuitems">User Defined Fields</Menu.Item>
          </SubMenu>
        </SubMenu>

        {/* System Settings */}
        <Menu.Item className="menuitems">
          <SettingsIcon fontSize="large" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System Settings
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MyMenu;
