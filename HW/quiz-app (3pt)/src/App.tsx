import QuestionStep from "./components/QuestionStep";
import Results from "./components/Results";
import { questions } from "./data/quiestions";
// import useQuiz from "./hooks/useQuiz";

const App = () => {
  // használd a custom hookot, hogy elérd a contextből a szükséges adatokat
  // const { currentStep, isFinished } = useQuiz();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        {/* {isFinished || currentStep >= questions.length ? (
          <Results />
        ) : (
          <QuestionStep />
        )} */}
      </div>
    </div>
  );
};

export default App;
