const Dashboard = () => {
    return (
      <div className="lg:ml-[7%] ml-[8%] xl:ml-64 p-5 w-[83vw] relative top-20">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        
        <div className="grid xl:grid-cols-3 grid-cols-1 sm:grid-cols-1 gap-4 my-5 sm:mx-auto">
          <div className="bg-[#003366] p-5 text-white rounded-lg">
            <h1>Total Income</h1>
            <p></p>
          </div>
          <div className="bg-[#B0B0B0] p-5 text-white rounded-lg">
            <h1>Total Expense</h1>
           <p></p>
          </div>
          <div className="bg-[#006242] p-5 text-white rounded-lg">
            <h1>Total Budget</h1>
            <p></p>
          </div>
        </div>
  
        <div className="bg-white p-5 rounded-lg shadow-lg flex space-x-5">
          <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
            <span className="text-5xl">👤</span>
          </div>
          <div>
            <h2 className="text-xl font-bold">Elie Joseph MUCYO</h2>
            <p>Bachelor of Science with Honours in Computer Science</p>
            <button className="bg-red-500 text-white px-4 py-2 mt-3 rounded">Make Payment</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  