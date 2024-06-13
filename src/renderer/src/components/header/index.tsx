import { CiSearch } from "react-icons/ci";

export default function Header() {
    return (
        <div className=" flex flex-col">
            <h1 className="font-semibold">Electron Chat</h1>

            <div className="relative mt-3">
                <input type="text" placeholder="Search chats" className="py-1 px-2 pl-10 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-1 focus:border-blue-300
                "/>
                <CiSearch className="absolute inset-y-0 left-0 m-3 text-gray-400"/>
            </div>

        </div>
    );
}