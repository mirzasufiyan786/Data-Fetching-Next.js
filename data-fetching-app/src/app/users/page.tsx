type User={
    id:number,
    name:string,
    username:string,
    email:string,
    phone:string
}
export default async function userPage(){
    await new Promise((resolve)=> setTimeout(resolve,2000))
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const users = await response.json()
return(
        <>
        <div className="grid grid-cols-2 gap-2 p-4 ">
            {users.map((user:User)=>(
<div key={user.id} className="flex items-center justify-between bg-slate-600 rounded-lg shadow-lg p-2 ">
<div className="space-y-3">
   <div> {user.name}</div>
    {user.username}
</div>
<div className="space-y-3">
  <div>  {user.email}</div>
    {user.phone}
</div>
</div>
            ))}
        </div>
        </>
    )
}