import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import TodoCard from './components/todo/TodoCard.tsx';

export default function App() {

  return (
    <div className={"w-screen min-h-screen bg-base-300"}>
      <Navbar/>

      <main className={"w-full min-h-screen flex justify-center items-center"}>
        <TodoCard/>
      </main>

      <Footer/>
    </div>
  )
}