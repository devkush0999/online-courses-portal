const MASTER_URL="https://ap-south-1.cdn.hygraph.com/content/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

import { gql, request } from 'graphql-request'

const getAllCourseList=async()=>{
    const query =gql`
    query MyQuery {
  courseLists {
    author
    name
    id
    description
    demoUrl
    banner {
      url
    }
    chapter {
      ... on Chapter {
        id
      }
    }
    free
  }
}
  `
  const result = await request(MASTER_URL,query);
  return result;
}
export default {getAllCourseList};