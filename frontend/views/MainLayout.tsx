import { logout } from "@hilla/frontend";
import { AuthContext } from "@hilla/react-auth";
import { AppLayout } from "@hilla/react-components/AppLayout.js";
import { Avatar } from "@hilla/react-components/Avatar.js";
import { Button } from "@hilla/react-components/Button.js";
import { DrawerToggle } from "@hilla/react-components/DrawerToggle.js";
import { useRouteMetadata } from "Frontend/util/routing";
import { Suspense, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

const navLinkClasses = ({ isActive }: any) => {
  return `block rounded-m p-s ${
    isActive ? "bg-primary-10 text-primary" : "text-body"
  }`;
};

export default function MainLayout() {
  const currentTitle = useRouteMetadata()?.title ?? "My App";
  const { state } = useContext(AuthContext);
  return (
    <AppLayout primarySection="drawer">
      <div slot="drawer" className="flex flex-col justify-between h-full p-m">
        <header className="flex flex-col gap-m">
          <h1 className="text-l m-0">My App</h1>
          <nav>
            {state.user ? (
              <NavLink className={navLinkClasses} to="/">
                Hello World
              </NavLink>
            ) : null}
            {state.user ? (
              <NavLink className={navLinkClasses} to="/about">
                About
              </NavLink>
            ) : null}
          </nav>
        </header>
        <footer className="flex flex-col gap-s">
          {state.user ? (
            <>
              <div className="flex items-center gap-s">
                <Avatar
                  theme="xsmall"
                  img={state.user.profile}
                  name={state.user.name}
                />
                {state.user.name}
              </div>
              <Button onClick={async () => logout()}>Sign out</Button>
            </>
          ) : (
            <a href="/login">Sign in</a>
          )}
        </footer>
      </div>

      <DrawerToggle slot="navbar" aria-label="Menu toggle"></DrawerToggle>
      <h2 slot="navbar" className="text-l m-0">
        {currentTitle}
      </h2>

      <Suspense fallback={<Placeholder />}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
}
