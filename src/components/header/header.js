import { Car, User } from "phosphor-react";
import { Fragment } from "react";


const Header = () => {
  return (
    <Fragment>
      <header className="bg-stone-200" >
        <div className="py-2 flex justify-center items-center">
          <div className="flex items-center mx-auto gap-2 ">
            <Car className="text-xl" />
            <h1 className="text-lg">Cars App Home</h1>
          </div>
          <div className="pr-8">
            <a href="#">
              <User className="text-xl" />
            </a>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header