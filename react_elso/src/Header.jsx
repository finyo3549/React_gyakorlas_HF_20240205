import './Header.css'

const headertext = "Első React alkalmazás";
function Header() {
    return (
        <header>
        <h1 className="first-header">
            {headertext}      
        </h1>
        </header>
    )
}
export default Header