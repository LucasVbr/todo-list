import { SpeedInsights } from "@vercel/speed-insights/react"

import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import TodoCard from './components/todos/TodoCard.tsx';

export default function App() {

  return (
      <div className={"min-h-screen bg-base-300"}>
        <Navbar/>
        <main className={"w-full min-h-screen flex justify-center items-center"}>
          <TodoCard/>
        </main>
        <Footer/>
        <SpeedInsights/>
      </div>
  )
}
