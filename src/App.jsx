import "./index.css";
import { ProgressBar } from "./components/ProgressBar";
import { ShowHideButton } from "./components/ShowHideButton";
import { Timer } from "./components/Timer";
import { SubmitFormData } from "./components/SubmitForm/SubmitFormData";


function App() {
  return (
    <>
      <h1>React Challenges</h1>
      <div className="challenges">
        <ShowHideButton />
        <Timer />
        <ProgressBar />
        <SubmitFormData />
      </div>
    </>
  );
}

export default App;
