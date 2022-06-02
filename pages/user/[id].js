import UserDetailComponent from "../../components/user/UserDetailComponent";
import prisma from "../../utility/prisma";
const UserDetail = ({user})=>{
    return(
        <UserDetailComponent user={user}/>

    )
}
export async function getServerSideProps({  query : {id} }) {
    const user = await  prisma.user.findUnique({
        where: {id},
    })
    return { props: { user } }
}
export default UserDetail;
