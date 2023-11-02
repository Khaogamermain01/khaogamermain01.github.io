import { FaAddressBook, FaBarsStaggered, FaHouse, FaNewspaper } from "react-icons/fa6"

export default () => {
  return <>
    <div className="navbar text-primary-content bg-[#2b479b]">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Khao C.</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost normal-case">Tools</label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 shadow bg-blue-600 rounded-box">
            <li><a>Minecraftle</a></li>
            <li><a>Enchantment Ordering</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn"><FaBarsStaggered /></label>
              <ul className="menu dropdown-content z-[1] mt-4 p-2 shadow bg-blue-600 rounded-box w-fit">
                <li><a><FaHouse />Homepage</a></li>
                <li><a><FaNewspaper />Portfolio</a></li>
                <li><a><FaAddressBook />About</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}