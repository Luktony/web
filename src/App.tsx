import { Header } from "./components/Header";
import AudioPlayer from "./components/musica";

export function App() {
  return (
    <> 
        <div className="text-center text-5xl font-bold my-5 p-5 text-slate-200">Pomodoro Timer</div>

      <Header />

      <AudioPlayer/>

    </>
  );
}
