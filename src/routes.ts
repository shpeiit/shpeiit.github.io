import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // root.tsx renders Topbar + Footer + <Outlet/>
    index("./pages/Home.jsx"),
    route("sponsorships", "./pages/Sponsorships.jsx"),
    route("executive-board", "./pages/ExecutiveBoard.jsx"),
    route("resources", "./pages/Resources.jsx"),
    route("events", "./pages/Events.jsx"),
    route("shpejr", "./pages/Shpejr.jsx"),
    route("shpetinas", "./pages/Shpetinas.jsx"),
    route("admin", "./pages/Admin.jsx"),
] satisfies RouteConfig;