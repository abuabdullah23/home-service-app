import { request, gql } from 'graphql-request'

const MASTER_URL = 'https://api-us-west-2.hygraph.com/v2/clu43v6u70kkb07upk5jkfe6w/master'

const getSlider = async () => {
    const query = gql`
        query GetSlider {
            sliders {
            id
            name
            image {
                url
            }
            }
        }
    `
   const result = await request(MASTER_URL, query);
   return result;
}

export default {
    getSlider
}