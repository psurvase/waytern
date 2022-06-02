import { getSession } from "next-auth/react"
import UserViewProfileComponent from "../../components/profile/UserViewProfileComponent";
import prisma from "../../utility/prisma";
import { SIGN_IN_PAGE } from "../../utility/PageConstant";
const UserProfile = ({ profileUser }) => {
    return (
        <UserViewProfileComponent profileUser={profileUser} />
    )
}
export default UserProfile;

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session || !session.user) {
        return {
            redirect: {
                permanent: false,
                destination: SIGN_IN_PAGE,
            },
        };
    }
    const { email } = session.user;
    const profileUser = await prisma?.user?.findUnique({
        where: { email: email }
    })
    if (!profileUser) {
        return {
            redirect: {
                permanent: false,
                destination: SIGN_IN_PAGE,
            },
        };
    }
    return {
        props: {
            profileUser
        }
    }
}
