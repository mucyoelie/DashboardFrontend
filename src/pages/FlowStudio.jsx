import { Outlet} from "react-router-dom";
import SideBarFlowStudio from "../components/SideBarFlowStudio";

const FlowStudio = () => {
  return (
    <div className="flex justify-between my-10 dark:bg-black">
    {/* ✅ Sidebar stays visible */}
    <SideBarFlowStudio />

    {/* ✅ Content changes inside this div */}
    <main className="flex-grow  px-6 mx-auto">
      <Outlet /> {/* This will render nested routes */}
    </main>
  </div>
  )
}

export default FlowStudio;