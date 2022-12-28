import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const toggleMode = () => {
    if (props.mode === "light") {
      props.setMode("dark")
      document.body.style.backgroundColor = "#242526"
    } else {
      props.setMode("light")
      document.body.style.backgroundColor = "white"
    }
    props.setAlert({typ:"success", msg:`Dark mode ${props.mode === "light" ? "enabled":"disbled"}!`})
    setTimeout(() => {
      props.setAlert(null)
    }, 1500)
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="block h-8 w-auto lg:hidden" src="/public/favicon-96x96.png" alt="Text Utils logo" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" className="text-white px-3 py-2 rounded-md text-2xl font-medium" aria-current="page">{props.title}</Link>

                <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"><div>About the App</div></Link>
              </div>
            </div>
          </div>

          <label className="hidden sm:inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onClick={toggleMode} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-white">Enable Dark Mode</span>
          </label>

        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <div className='w-[50vw] mx-auto flex justify-center'>
            <label className="sm:hidden inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onClick={toggleMode} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-white">Enable Dark Mode</span>
            </label>
          </div>
          <Link to="/" className="text-white px-3 py-2 rounded-md text-2xl font-medium mx-auto block w-[40vw] text-center" aria-current="page">{props.title}</Link>

          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center w-[40vw] mx-auto"><div>About the App</div></Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
}

Navbar.defaultProps = {
  title: "Enter Title Here",
  mode: "light"
}