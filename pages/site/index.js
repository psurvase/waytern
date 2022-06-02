import prisma from "../../utility/prisma";import ListComponent from "../../components/site/ListComponent";const SiteList = ({sites}) => {    return(<>        <ListComponent sites={sites}></ListComponent>    </>)}export async function getServerSideProps() {    const sites = await prisma.site.findMany()    return { props: { sites }  }}export default SiteList;