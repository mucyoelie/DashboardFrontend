import Card from "../components/Card";
const Home = () => {
  return (
    <div className="flex flex-col xl:flex-col items-center justify-center py-10 my-20 bg-white min-h-[50vh] px-6 dark:bg-black dark:text-white h-80 xl:my-[12rem] my-[40rem]">
      <div className="text-center max-w-2xl py-10 ">
        <h1 className="text-3xl font-bold text-black mb-4">Mista.io API Documentation</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
        Explore our comprehensive API documentation to integrate Mista.io powerful communication tools into your applications.
        </p>
      </div>
      <Card />
    </div>
  );
};

export default Home;

