import config from "@config/config.json";
import theme from "@config/theme.json"
import Base from "@layouts/Baseof";
import dateFormat from "@lib/utils/dateFormat";
import readingTime from "@lib/utils/readingTime";
import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { DiscussionEmbed } from "disqus-react";
import Image from "next/image";
import ImageFallback from "./components/ImageFallback";
import Post from "./partials/Post";
import { TinaMarkdown } from "tinacms/dist/rich-text";


const PostSingle = ( data ) => {
  const { disqus } = config;
  const { colors, fonts } = theme;
  return (
    <Base title={data.blog.title} description={"description"}>
      <section className="section pt-0">
        <div className="container">
          <article>
            <div className="row justify-center">
              <div className="lg:col-10">
                {data.blog.image && (
                  <Image
                    src={data.blog.image}
                    height="700"
                    width="1120"
                    alt={data.blog.title}
                    priority={true}
                    className="fade w-full rounded-lg opacity-0"
                  />
                )}
              </div>
              <div className="lg:col-10">
                {markdownify(data.blog.title, "h1", "h2 mt-6")}
                <div className="mt-6 flex items-center">
                  <div className="overflow-hidden rounded-full border-2 border-white shadow-[0_0_0_2px] shadow-primary">
                    <ImageFallback
                      src={data.blog.author.avatar}
                      width={50}
                      height={50}
                      alt="author"
                    />
                  </div>
                  <div className="pl-5">
                    <p className="font-medium text-dark">{data.blog.author.name}</p>
                    <p>
                      {dateFormat(data.blog.date)}
                    </p>
                  </div>
                </div>
                <div style={{backgroundColor : data.blog.color ? data.blog.color : colors.default.theme_color.body}}>
                  <>
                    <div className="content mt-16 mb-16 mx-4 py-0.5 text-left" >
        
                      <TinaMarkdown content={data.blog.body} components={shortcodes}/>
                    </div>
                  </>
                </div>
              </div>
              {disqus.enable && (
                <div className="fade row justify-center opacity-0">
                  <div className="lg:col-8">
                    <DiscussionEmbed
                      shortname={disqus.shortname}
                      config={disqus.settings}
                    />
                  </div>
                </div>
              )}
            </div>
          </article>

          <div className="section mt-16">
            <h2 className="section-title text-center">Recent Articles</h2>
            <div className="row justify-center">
              {data.recentPosts.slice(0, 2).map((post, index) => (
                <div key={"post-" + index} className="animate mt-16 lg:col-5">
                  <Post post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default PostSingle;
