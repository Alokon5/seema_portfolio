export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView()
  }

  return (
    <nav className="fixed top-0 left-0 w-screen h-24 bg-black/70 backdrop-blur z-50 px-10 flex items-center justify-between">
      <h1 className="font-bold cursor-pointer" onClick={() => scrollTo('home')}>
        PORTFOLIO
      </h1>

      <ul className="flex gap-8 text-sm">
        {['home', 'about','skills', 'projects', 'contact'].map((item) => (
          <li
            key={item}
            onClick={() => scrollTo(item)}
            className="cursor-pointer hover:text-gray-300 transition"
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  )
}
