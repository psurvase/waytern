import React from 'react'
import { gql, useQuery } from "@apollo/client";
import { getAuthServerSideProps } from "../../utility/requireAuthentication";
import UserReportComponent from '../../components/user/UserReportComponent';

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

export default function report() {
const { data, loading, error } = useQuery(getUsersQuery);
if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <UserReportComponent users={data.users} />
  )
}

export const getServerSideProps = getAuthServerSideProps;
