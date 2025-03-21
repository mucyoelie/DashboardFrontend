import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SmsApi from "./pages/SmsApi";
import Introduction from "./pages/Introduction";
import Authentication from "./pages/Authentication";
import APIEndpoint from "./pages/APIEndpoint";
import DeliveryReport from "./pages/DeliveryReport";
import SendingSMS from "./pages/SendingSMS";
import RetrievingSMS from "./pages/RetrievingSMS";
import Profile from "./pages/CheckBalance";
import RequestDetail from "./pages/RequestDetail";
import RateLimits from "./pages/RateLimits";
import SingleSms from "./pages/SingleSms";
import ScheduleSms from "./pages/ScheduleSms";
import BulkSms from "./pages/BulkSms";
import UssdApi from "./pages/UssdApi";
import HowitWork from "./pages/HowitWork";
import Simulator from "./pages/Simulator";
import SampleCode from "./pages/SampleCode";
import HandleUssdSession from "./pages/HandleUssdSession";
import ViewLogs from "./pages/ViewLogs";
import ViewAllLogs from "./pages/ViewAllLogs";
import AccountInfo from "./pages/AccountInfo";
import CheckBalance from "./pages/CheckBalance";
import ViewAllContactGroup from "./pages/ViewAllContactGroup";
import CreateContactGroup from "./pages/CreateContactGroup";
import ShowContactGroup from "./pages/ShowContactGroup";
import EditContactGroup from "./pages/EditContactGroup";
import DeleteContactGroup from "./pages/DelectContactGroup";
import FlowStudio from "./pages/FlowStudio";
import GetStart from "./pages/GetStart";
import Flows from "./pages/Flows";
import Channels from "./pages/Channels";
import Contacts from "./pages/Contacts";
import Messages from "./pages/Messages";
import Triggers from "./pages/Triggers";
import WebHook from "./pages/WebHook";
import AdvancedFeatures from "./pages/AdvancedFeatures";
function App() {
  useEffect(() => {
    document.body.classList.add("scrollbar-custom");
    return () => document.body.classList.remove("scrollbar-custom");
  }, []);
  return (
    <div className="flex flex-col min-h-screen w-full font-poppins dark:bg-black bg-white overflow-y-auto">
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow overflow-hidden sm:overflow-auto  ">
          <main className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-10">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Route for SMS API with nested routes */}
              <Route path="/sms-api" element={<SmsApi />}>
                <Route path="introduction" element={<Introduction />} />
                <Route path="authentication" element={<Authentication />} />
                <Route path="api-endpoint" element={<APIEndpoint />} />
                <Route path="delivery-report" element={<DeliveryReport />} />
                <Route path="sending-sms" element={<SendingSMS />} />
                <Route path="retrieving-sms" element={<RetrievingSMS />} />
                <Route path="profile" element={<Profile />} />
                <Route path="single-sms" element={<SingleSms />} />
                <Route path="schedule-sms" element={<ScheduleSms />} />
                <Route path="bulk-sms" element={<BulkSms />} />
                <Route path="request-detail" element={<RequestDetail />} />
                <Route path="rate-limits" element={<RateLimits />} />
                <Route path="view-logs" element={<ViewLogs />} />
                <Route path="view-all-logs" element={<ViewAllLogs/>} />
                <Route path="account-info" element={<AccountInfo/>} />
                <Route path="check-balance" element={<CheckBalance/>} />
                <Route path="view-all-contact-group" element={<ViewAllContactGroup/>} />
                <Route path="create-contact-group" element={<CreateContactGroup/>} />
                <Route path="show-contact-group" element={<ShowContactGroup/>} />
                <Route path="edit-contact-group" element={<EditContactGroup/>} />
                <Route path="delete-contact-group" element={<DeleteContactGroup/>} />
              </Route>
               {/* ✅ Add this route for UssdApi */}
           <Route path="/ussd-api" element={<UssdApi />} >
           <Route path="how-it-work" element={<HowitWork/>}/>
           <Route path="simulator" element={<Simulator/>}/>
           <Route path="sample-code" element={<SampleCode/>}/>
           <Route path="handle-ussd-session" element={<HandleUssdSession/>}/>
           </Route>
            {/* ✅ Add this route for FlowStudio */}
            <Route path="/flow-studio" element={<FlowStudio />} >
           <Route path="get-start" element={<GetStart/>}/>
           <Route path="flows" element={<Flows/>}/>
           <Route path="channels" element={<Channels/>}/>
           <Route path="contacts" element={<Contacts/>}/>
           <Route path="messages" element={<Messages/>}/>
           <Route path="triggers" element={<Triggers/>}/>
           <Route path="web-hook" element={<WebHook/>}/>
           <Route path="advanced-features" element={<AdvancedFeatures/>}/>
           </Route>
            </Routes>
          </main>
        </div>

        {/* Footer */}
       
      </Router>
    </div>
  );
}

export default App;
