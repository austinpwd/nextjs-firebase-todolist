import { useAuth } from "/libs/hooks/useAuth";
import { AppBar } from "/components/appbar";
import {Title} from "/ui/title"


function ToDoPage(props) {
  const user = useAuth()

   if (!user) {
     <>
     <AppBar/>
     <Title>YOURE NOT WELCOME HERE. GO AWAY</Title>
     </>
   }

   return (
    <>
    <AppBar/>
    <Title>Render To-Do List</Title>
    </>
   )

  
}

export default ToDoPage;
