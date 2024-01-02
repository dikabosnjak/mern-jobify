import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <nav></nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
