import Box from "./components/Box";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="flex min-w-full min-h-[100vh] justify-center items-center">
        <Box />
      </div>
      <ToastContainer position="bottom-left" autoClose={3000} />
    </>
  );
}

export default App;
