import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router";


export default function Layout({children}: { children: ReactNode }) {
  const links = ['projects', 'contact', 'playground']
  const footerlinks = [['github', 'https://github.com/0xgreenapple'], ['lastfm', "https://last.fm/user/xgreenapple"], ['mail','mailto:0xgreenapple@gmail.com']]
  const currentPath = useLocation();

  return (
    <main>
      <div className={"container"}>
        <section>
          {children}
          <div className={"spotify-wrapper"}>

          </div>
          <nav className={"nav-wrapper"}>
            <NavLink to={"/"} className={'special'} hidden={currentPath.pathname == '/'}>0xgreenapple</NavLink>
            {links.map((link) => {
              return <NavLink to={`/${link}`} hidden={currentPath.pathname == `/${link}`} key={link}> {link}</NavLink>
            })}
          </nav>
          <div className={"footer"}>
            {footerlinks.map((link) => {
              return <a target={"_blank"} href={`${link[1]}`}> <img src={`/${link[0]}.svg`}/></a>
            })}
          </div>
        </section>
      </div>
    </main>
  )
}