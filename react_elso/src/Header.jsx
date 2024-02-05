import './Header.css'

const headertext = "Első React alkalmazás";
function Header() {
    return (
        <header>
        <h1 className="first-header">
            {headertext}      
        </h1>
        <hr />
        </header>
    )
}
export default Header