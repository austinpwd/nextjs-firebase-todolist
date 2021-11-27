function List ({children, ...props}){
    return <ul>{children}</ul>
}

function ListItem({name,children,onClick, ...props}) {
    function test() {
        console.log()
    }
    return (
        <li onClick={test}>
            {children}  
        </li>
    )
}

export {List, ListItem}