import React from "react";
import { Avatar, Image, Tabs } from "antd";
import AccountSetting from "./AccountSetting";
import ChangePassword from "./ChangePassword";
import MyAccount from "./MyAccount";
import Profile from "./Profile";
import profile from "../../assets/profile.jpeg";

export default function UserProfile() {
  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-md-4 mb-2">
          <div className="col-md-12 text-center bg-white p-2">
            <Avatar
              class
              Name="text-center"
              size={100}
              src={<Image src={profile} />}
            />
          </div>

          <div className="bg-white p-2">
            <div className="col-md-12">
              <hr className="my-2" />
              <div className="row">
                <div className="col-md-6">Username</div>
                <div className="col-md-6 text-end">Gowtamkumar</div>
              </div>
              <hr className="my-2" />
              <div className="row">
                <div className="col-md-6">E-mail</div>
                <div className="col-md-6 text-end">gowtampaul0@gmail.com</div>
              </div>
              <hr className="my-2" />
              <div className="row">
                <div className="col-md-6">Status</div>
                <div className="col-md-6 text-end">Active</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8 bg-white">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Profile" key="1">
              <Profile />
            </Tabs.TabPane>

            <Tabs.TabPane tab="My Account" key="2">
              <MyAccount />
            </Tabs.TabPane>

            <Tabs.TabPane tab="Change Password" key="3">
              <ChangePassword />
            </Tabs.TabPane>

            <Tabs.TabPane tab="Account Setting" key="4">
              <AccountSetting />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
