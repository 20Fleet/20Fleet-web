import { Fragment } from "react"
import { Outlet } from "react-router"
import { NavComponent } from "../../components/nav/nav-component"

export const Navigation = () => {
    return (
        <Fragment>
            <NavComponent />
            <Outlet />
        </Fragment>
    )
}