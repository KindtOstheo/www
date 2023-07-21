import config from "@config/config.json";
import { getSinglePage } from "@lib/contentParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import { client } from "../../tina/__generated__/client";
import { useTina } from 'tinacms/dist/react'
import PostSingle from "@layouts/PostSingle";
const { blog_folder } = config.settings;

// post single layout
export function Article(props){
  console.log(props);

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
 
  return (
    <PostSingle 
       {...data}
       recentPosts={props.recentPosts}
    />
  );
};

// get post single slug
export const getStaticPaths = async () => {
  //const allSlug = getSinglePage(`content/${blog_folder}`);
  const blogsResponse = await client.queries.blogConnection();
  const posts = blogsResponse.data.blogConnection.edges.map((post) => {
    return { slug: post.node._sys.filename };
  })
  const paths = posts.map((item) => ({
    params: {
      single: item.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// get post single content
export const getStaticProps = async ({ params }) => {
  const { single } = params;
  const post = await client.queries.blog({
    relativePath: `${params.single}.mdx`,
  });
  const posts = getSinglePage(`content/${blog_folder}`);
  const recentPosts = sortByDate(posts).filter((post) => post.slug !== single);
  return {
    props: {
      ...post,
      slug: single,
      recentPosts: recentPosts,
    },
  };
};

export default Article;
