import LeftSideBar from "@renderer/components/LeftSideBar";
import HeaderChat from "@renderer/components/headerChat";

export default function Chat() {
 return (
  <div className="flex">

    <LeftSideBar/>

    <main className="flex-1 min-w-screen overflow-x-hidden">
      <header>
        <HeaderChat/>
      </header>

      <div className="content">
        {/* Seu conteúdo aqui */}
      </div>

      <footer className="absolute bottom-1 m-4 w-4/6">
        <input type="text" className="border border-gray-200 rounded-md w-full p-1" placeholder="Enter your message"/>
      </footer>
    </main>


  </div>
 );
}