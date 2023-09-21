import { AuthContext, useAuth } from "@hilla/react-auth";
import router from "Frontend/routes.js";
import { RouterProvider } from "react-router-dom";

export default function App() {
  const auth = useAuth();
  return (
    <AuthContext.Provider value={auth}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}
