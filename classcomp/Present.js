function List ({children, ...props}){
    return <ul>{children}</ul>
}

function ListItem({name,children,onClick, ...props}) {
    function onTemp () {
        console.log("Remove Something")
    }
    return (
        <li onClick={onTemp}>
            {children}  
        </li>
    )
}

export {List, ListItem}