import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/home/Login";
import AdminHomePage from "./pages/admin/AdminHomePage";
import ViewUsers from "./pages/admin/ViewUsers";
import RegisterUser from "./pages/admin/RegisterUser";
import ViewVolunteers from "./pages/admin/ViewVolunteers";
import AddVolunteers from "./pages/admin/AddVolunteers";
import ViewVillages from "./pages/admin/ViewVillages";
import AddVillage from "./pages/admin/AddVillage";
import VillageHomePage from "./pages/village/VillageHomePage";
import ViewProblemsVillage from "./pages/village/ViewProblemsVillage";
import ViewMyVillage from "./pages/village/ViewMyVillage";
import UserHomePage from "./pages/user/UserHomePage";
import ViewProblemsUser from "./pages/user/ViewProblemsUser";
import AddProblems from "./pages/user/AddProblems";
import ViewVillagesUser from "./pages/user/ViewVillagesUser";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddFeedbacks from "./pages/user/AddFeedbacks";
import ViewFeedbacksUser from "./pages/user/ViewFeedbacksUser";
import ViewProfileUser from "./pages/user/ViewProfileUser";
import VolunteerHomePage from "./pages/volunteer/VolunteerHomePage";
import AddPrograms from "./pages/volunteer/AddPrograms";
import ErrorPage from "./ErrorPage";
import ViewProgramsVolunteer from "./pages/volunteer/ViewProgramsVolunteer";
import ViewProblemsVolunteer from "./pages/volunteer/ViewProblemsVolunteer";
import ViewUsersVolunteer from "./pages/volunteer/ViewUsersVolunteer";
import ViewVolunteerVillage from "./pages/village/ViewVolunteerVillage";
import ViewUsersVillage from "./pages/village/ViewUsersVillage";
import ViewFeedbacksVillage from "./pages/village/ViewFeedbacksVillage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewVillageVolunteer from "./pages/volunteer/ViewVillageVolunteer";
import ViewProgramsUser from "./pages/user/ViewProgramsUser";
import ViewProgramsVillage from "./pages/village/ViewProgramsVillage";
import ViewProfileVolunteer from "./pages/volunteer/ViewProfileVolunteer";
function App() {
  
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<AdminHomePage />}>
            <Route path="users" element={<ViewUsers />} />
            <Route path="villages" element={<ViewVillages />} />
            <Route path="add-village" element={<AddVillage />} />
            <Route path="add-volunteer" element={<AddVolunteers />} />
            <Route path="volunteers" element={<ViewVolunteers />} />
          </Route>
          <Route path="/village" element={<VillageHomePage />}>
            <Route path="users" element={<ViewUsersVillage />} />
            <Route path="volunteers" element={<ViewVolunteerVillage />} />
            <Route path="problems" element={<ViewProblemsVillage />} />
            <Route path="programs" element={<ViewProgramsVillage />} />
            <Route path="village" element={<ViewMyVillage />} />
            <Route path="feedbacks" element={<ViewFeedbacksVillage />} />
          </Route>
          <Route path="/user" element={<UserHomePage />}>
            <Route path="add-problem" element={<AddProblems />} />
            <Route path="add-feedback" element={<AddFeedbacks />} />
            <Route path="feedbacks" element={<ViewFeedbacksUser />} />
            <Route path="villages" element={<ViewVillagesUser />} />

            <Route path="problems" element={<ViewProblemsUser />} />
            <Route path="programs" element={<ViewProgramsUser/>} />
            <Route path="profile" element={<ViewProfileUser />} />
          </Route>
          <Route path="/volunteer" element={<VolunteerHomePage />}>
            <Route path="profile" element={<ViewProfileVolunteer />} />
            <Route path="add-user" element={<RegisterUser />} />
            <Route path="edit-user/:userId" element={<RegisterUser />} />

            {/* <Route path='problems' element={<ViewProblemsUser/>}/> */}
            <Route path="village" element={<ViewVillageVolunteer />} />
            <Route path="add-program" element={<AddPrograms />} />
            <Route path="programs" element={<ViewProgramsVolunteer />} />
            <Route path="problems" element={<ViewProblemsVolunteer />} />
            <Route path="users" element={<ViewUsersVolunteer />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" newestOnTop />
    </div>
  );
}

export default App;
