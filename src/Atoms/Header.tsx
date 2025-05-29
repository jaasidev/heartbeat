function Header() {
  return (
    <header className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          HeartBeat 🫀
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#">Información</a>
          </li>
          <li>
            <a>Calculadora</a>
          </li>
          <li>
            <a>Acerca de Nosotros</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
