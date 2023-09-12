import React from "react";
import ProfileTabs from "../components/myProfile/ProfileTabs";
import ProfileDetails from "../components/myProfile/ProfileDetails";

import AboutBody from "../components/about/AboutBody";
import ExecutiveReport from "../components/delivery/ExecutiveReport";
import ComplainMessage from "../components/complain/ComplainMessage";
function Blank() {
  return (
    <div className="container my-20 md:my-28 lg:my-40">
      <div className="grid items-center gap-12 place-content-between lg:grid-cols-5">
        <div className="lg:col-span-1">
          <ProfileTabs />
        </div>
        <div className="lg:col-span-4">
          <div className="font-rubik">
            

            <div className="my-8 md:my-14">

              <AboutBody />
              <ExecutiveReport/>
              <ComplainMessage/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blank;
