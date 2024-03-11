import { useEffect} from "react";
import { useSelector} from "react-redux";
import { fetchUsers,addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button"
import  {useThunk } from"../hooks/use-thunk"
import UsersListItem from "./UsersListItem";


function UsersList(){
    // const [isLoadingUsers,setIsLoadingUsers]=useState(false);
    // const [loadingUsersErrors,setLoadingUsersErrors]=useState(null)
    const [doFetchUsers,isLoadingUsers,loadingUsersErrors]=useThunk(fetchUsers)


    // const [isCreatingUser,setIsCreatingUser]=useState(false);
    // const [creatingUserError,setCreatingUserError]=useState(null);
    const [doCreateUser,isCreatingUser,creatingUserError]=
    useThunk(addUser);



    //en sona empty array koyarsak useeffect sadece bir kez çalışıcak o da render sırasında
    useEffect(()=>{
        doFetchUsers()
    },[doFetchUsers]);

    const handleUserAdd=()=>{
       doCreateUser();
    }

const {data} = useSelector((state)=>{
    return state.users;
})
let content;

if(isLoadingUsers){
    content= <Skeleton className="h-10 w-full]" times={6}></Skeleton>
}else if(loadingUsersErrors){
  content=  <div>Error fetching data</div>
}else {
    content=data.map((user)=>{
        return <UsersListItem key={user.id} user={user}></UsersListItem>
     
    })
}
   

  return  <div >
    <div className="flex flex-row justifiy-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {  
        <Button loading={isCreatingUser} onClick={handleUserAdd}> +Add User</Button>
        }
      {creatingUserError &&  "Error creating User"}
        </div>
        {content}
        </div>


}export default UsersList;