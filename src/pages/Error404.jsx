import { Link, useRouteError } from "react-router-dom"


export const Error404 = () => {

    const error = useRouteError();
    console.log(error);


  return (
    <div className="text-center mt-5">
            <h1 className="text-danger mt-5">404</h1>
            <p className="mt-3">Page not found</p>
            <p className="mt-3">{error.statusText || error.message}</p>
            <Link to='/' className="btn btn-danger fw-bold mt-3" >Volver Al Home</Link>
    </div>
  )
}
