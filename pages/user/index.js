import UsersComponent from "../../components/user/UsersComponent";
import { gql, useQuery } from "@apollo/client";
import { getAuthServerSideProps } from "../../utility/requireAuthentication";


const getUsersQuery = gql`
  query {
    users {
      id
      name
      email
      image
      address
      streetAddress
      city
      state
      zipCode
      country
      phone
      description
    }
  }
`;

export default function User() {
  const { data, loading, error } = useQuery(getUsersQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <UsersComponent users={data.users} />
    </>
  );
}
export const getServerSideProps = getAuthServerSideProps;
