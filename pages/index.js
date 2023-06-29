import Base from "@layouts/Baseof";
import Circle from "@layouts/components/Circle";
import Cta from "@layouts/components/Cta";
import ImageFallback from "@layouts/components/ImageFallback";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTina, tinaField  } from 'tinacms/dist/react'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { client } from "../tina/__generated__/client";
import Image from 'next/image'

export default function Home(props) {

  const paginationRef = useRef(null);
  
  // Pass our data through the "useTina" hook to make it editable
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })  
  const Styles = {
    baner :{
      fontSize: data.page_d_accueil.banner.f_title ? data.page_d_accueil.banner.f_title : 16,
      textAlign: data.page_d_accueil.banner.a_title ? data.page_d_accueil.banner.a_title : "center"
    },
    feature : {
      fontSize: data.page_d_accueil.features.f_title ? data.page_d_accueil.features.f_title : 16,
      textAlign: data.page_d_accueil.features.a_title ? data.page_d_accueil.features.a_title : "center"
    },
  };
  useEffect(() => {
    if (window && window.location.pathname.startsWith("/admin")) {
    } 
    const ctx = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerBg = document.querySelector(".banner-bg");
      const bannerContent = document.querySelector(".banner-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

      tl.fromTo(
        ".banner-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      )
        .fromTo(
          ".banner-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".banner-img",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          ">-.5"
        );

      //parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });
    if (data.page_d_accueil.banner.b_svg){
      const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.4;
      
      parallaxTl
        .fromTo(
          bannerBg,
          {
            y: 0,
          },
          {
            y: -position,
          }
        )
        .fromTo(
          bannerContent,
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        )
        .fromTo(
          ".banner-bg .circle",
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        );
    }
    });

    return () => ctx.revert();
  }, []);
  

  return (
    <Base>
      <section className="section banner py-0">
        <div className="container-xl">
          <div className="relative">
            { data.page_d_accueil.banner.b_svg &&
              <div className="bg-theme banner-bg col-12 absolute top-0 left-0">
                <Circle
                  className="circle left-[10%] top-12"
                  width={32}
                  height={32}
                  fill={false}
                />
                <Circle
                  className="circle left-[2.5%] top-[29%]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="circle left-[22%] bottom-[48%]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="circle left-[15%] bottom-[37%]"
                  width={47}
                  height={47}
                  fill={false}
                />
                <Circle
                  className="circle left-[6%] bottom-[13%]"
                  width={62}
                  height={62}
                  fill={false}
                />
                <Circle
                  className="circle right-[12%] top-[15%]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="circle right-[2%] top-[30%]"
                  width={73}
                  height={73}
                  fill={false}
                />
                <Circle
                  className="circle right-[19%] top-[48%]"
                  width={37}
                  height={37}
                  fill={false}
                />
                <Circle
                  className="circle right-[33%] top-[54%]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="circle right-[3%] bottom-[20%]"
                  width={65}
                  height={65}
                />
              </div>
            }
            <div className="row overflow-hidden rounded-2xl">
              <div className="col-12">
                <div className="row relative justify-center pb-10 pt-10">
                  { (data.page_d_accueil.banner.b_title || data.page_d_accueil.banner.b_link) &&
                    <div className="banner-content col-10 pt-10 pb-10 text-center" >
                      { data.page_d_accueil.banner.b_title && 
                        <h1 className={`mb-8 banner-title opacity-0`} style={Styles.baner} data-tina-field={tinaField(data.page_d_accueil.banner, 'title')} >
                          {data.page_d_accueil.banner.title}
                        </h1>
                      }
                      { data.page_d_accueil.banner.b_link && 
                        <div className="banner-btn opacity-0" >
                          <Link className="btn btn-primary" 
                          href={data.page_d_accueil.banner.link.href} 
                          data-tina-field={tinaField(data.page_d_accueil.banner, 'link')}> 
                            {data.page_d_accueil.banner.link.label}
                          </Link>
                        </div>
                      }
                    </div>
                  }
                  { data.page_d_accueil.banner.b_image &&
                    <div className="col-10">
                      <ImageFallback
                        className="banner-img opacity-0"
                        src={data.page_d_accueil.banner.image}
                        width={1170}
                        height={666}
                        priority={true}
                        alt=""
                        data-tina-field={tinaField(data.page_d_accueil.banner, 'image')}
                      />
                    </div>
                  }
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container text-center">
          <div className="animate">
            <p className="uppercase" data-tina-field={tinaField(data.page_d_accueil.features, 'sub_title')}>{data.page_d_accueil.features.sub_title}</p>
            <h2 className="mt-4 section-title" style={Styles.feature} data-tina-field={tinaField(data.page_d_accueil.features, 'title')}>{data.page_d_accueil.features.title}</h2>
            <div className="mt-10" data-tina-field={tinaField(data.page_d_accueil.features, 'description')}> <TinaMarkdown content={data.page_d_accueil.features.description} /></div>
          </div>
          <div className="animate from-right relative mt-10">
            <Swiper
              slidesPerView={1}
              pagination={{
                type: "bullets",
                el: paginationRef.current,
                clickable: true,
                dynamicBullets: true,
              }}
              // autoplay={{ delay: 3000 }}
              onBeforeInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
              }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.page_d_accueil.features.list.map((item, index) => (
                <SwiperSlide key={"feature-" + index} data-tina-field={tinaField(item)}>
                  <div className="feature-card m-4 rounded-md border border-transparent py-16 px-7 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300 hover:border-[#4a4a4a] hover:shadow-none">
                    <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#4a4a4a] text-primary">
                      {item.b_icon ?
                        <FeatherIcon data-tina-field={tinaField(item, 'icon')} icon={item.icon} />
                        : 
                        <Image
                          src={item.image? item.image : ""}
                          width={80}
                          height={80}
                          alt={item.title}
                          data-tina-field={tinaField(item, 'image')}
                        />
                      }
                    </div>
                    <h3 className="h4 mt-6 mb-5" data-tina-field={tinaField(item, 'title')}>{item.title}</h3>
                    <div className="TinaMarkdown"data-tina-field={tinaField(item, 'content')}><TinaMarkdown content={item.content} /></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="relative mt-9 flex justify-center">
              <div className="pagination " ref={paginationRef}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="section">
        <div className="container">
          {data.page_d_accueil.speciality.list.map((item, index) => (
            <div className="row items-center justify-center odd:flex-row-reverse" key={"speciality-" + index} data-tina-field={tinaField(item)}>
              <div className="animate lg:col-6 lg:order-1">
                <ImageFallback
                  className="mx-auto"
                  src={item.image? item.image : ""}
                  width={575}
                  height={511}
                  alt={"speciality-" + index}
                  data-tina-field={tinaField(item, 'image')}
                />
              </div>
              <div className="animate lg:col-5 lg:order-2">
                <p data-tina-field={tinaField(item, 'subtitle')}>{item.subtitle}</p>
                <h2 className="mt-4 section-title bar-left" data-tina-field={tinaField(item, 'title')}>{item.title}</h2>
                <div className="mt-10 TinaMarkdown" data-tina-field={tinaField(item, 'description')}> <TinaMarkdown content={item.description} /></div>
              </div>
            </div>
          ))}
          
          {/* <div className="row items-center" data-tina-field={tinaField(data.page_d_accueil.speciality, 'secondary')}>
            <div className="animate lg:col-6">
              <ImageFallback
                className="mx-auto"
                src={data.page_d_accueil.speciality.secondary.image}
                width={575}
                height={511}
                alt="secondary speciality"
                data-tina-field={tinaField(data.page_d_accueil.speciality.secondary, 'image')}
              />
            </div>
            <div className="animate lg:col-5">
              <p>{data.page_d_accueil.speciality.secondary.subtitle}</p>
              <h2 className="mt-4 section-title bar-left" data-tina-field={tinaField(data.page_d_accueil.speciality.secondary, 'title')}>{data.page_d_accueil.speciality.secondary.title}</h2>
              <div className="mt-10" data-tina-field={tinaField(data.page_d_accueil.speciality.secondary, 'description')}> <TinaMarkdown content={data.page_d_accueil.speciality.secondary.description} /></div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Cta */}
      <Cta />
    </Base>
  );
};


// for homepage data
export const getStaticProps = async () => {
  const homepage = await client.queries.page_d_accueil({
    relativePath: '_index.md'
  })

  return {
    props: {
      data: homepage.data,
      query: homepage.query,
      variables: homepage.variables,
    },
  };
};
