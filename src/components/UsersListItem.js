import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";


function UsersListItem({user}){
    const [doRemoveUser,isLoading,error]=useThunk(deleteUser)
    const handleClick =()=>{
doRemoveUser(user)
    }
    const header= <>
    <Button className="mr-3" loading={isLoading} onClick={handleClick}>
                            <GoTrash/>
                          </Button>
                        {error && <div>Error deleting User.</div>}
                        {user.name}
    </>
    return (
<ExpandablePanel header={header}>
  <AlbumList user={user}></AlbumList>
</ExpandablePanel>   
    )
}
export default UsersListItem;