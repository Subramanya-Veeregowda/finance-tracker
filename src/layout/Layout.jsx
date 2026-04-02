import Topbar from "../components/Topbar";
import ThemeToggle from "../components/ThemeToggle";

function Layout({ children, dark, setDark }) {
  return (
    <div className="flex h-screen transition all">
      <div className="flex-1 flex flex-col relative">
        <Topbar dark={dark} setDark={setDark}/>
      <main className="p-6 flex-1"> {children}</main>
      </div>
    </div>
  );
}

export default Layout;