import React from 'react'
import { signIn, signOut, useSession, getSession } from 'next-auth/react'



export default function EmailLogin() {

    const { data: session } = useSession();
    // console.log({ data: session })
    return (
        <>
            <div>
                {session ? (
                    <>
                        Signed in as {session.user.email} <br />
                        <button onClick={() => signOut()}>Sign out</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => signIn()}>Sign in</button> <br />
                        Not signed in
                    </>
                )}
            </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
};
