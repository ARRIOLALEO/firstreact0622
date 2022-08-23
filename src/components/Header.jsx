import Menu from "./Menu"
function Header({greeting,userName,tacos}){
    return(
        <div>
        <h1>this is my first component {greeting} {userName} and i dont like {tacos} tacos</h1>
        <Menu/>
        </div>
    )
}

export default Header   