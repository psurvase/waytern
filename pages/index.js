import {useSession} from "next-auth/react"
import DashboardComponent from "../components/dashboard/DashboardComponent";
import {getAuthServerSideProps} from "../utility/requireAuthentication";


export default function Home() {
  const { data: session, status } = useSession()
  /*if (state === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }*/


  if (status === "authenticated") {
    return <DashboardComponent></DashboardComponent>
  }

  return <a href="/api/auth/signin">Sign in</a>
}


export const getServerSideProps = getAuthServerSideProps
