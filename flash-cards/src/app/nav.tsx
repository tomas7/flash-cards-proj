
export default function Nav() {
    return <nav className="relative bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
     
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
       
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="/" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</a>
            <a href="/admin" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Admin</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
   

  

            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Your profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Sign out</a>
      </div>
    </div>
  </div>

</nav>

} 
