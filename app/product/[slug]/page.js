import { getFetch } from "@/utils/fetch";
import pic1 from "@/public/img/portfolio-one.png";
import pic2 from "@/public/img/portfolio-two.png";
import Image from "next/image";
import RedbasketShop from "@/public/icon-shahriarh/products/redBasket.png";
import StarRating from "@/components/StarRating";

export default async function ProductSolo({ params }) {
  const soloProduct = await getFetch(`/1234/product/${params.slug}`)
 
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <div className="my-10">
            <div className="w-full h-full flex flex-col lg:flex-row items-center gap-5">
              {/* Description */}
              <div className="lg:w-4/5 mx-4">
                <div>
                  <h1
                    className="text-3xl mb-10 lg:text-5xl lg:mb-20"
                    data-aos="fade-down"
                  >
                    {soloProduct.title}
                  </h1>
                  <ul className=" list-disc px-4 ">
                    <li
                      className="my-5 text-lg lg:text-xl tracking-wider leading-loose text-TGray "
                      data-aos="fade-right"
                      data-aos-delay="300"
                      data-aos-duration="700"
                    >
                     {soloProduct.description}
                    </li>
                  </ul>
                </div>
                <div
                  className="flex gap-10 mt-24"
                  data-aos="fade-right"
                  data-aos-delay="900"
                  data-aos-duration="900"
                >
                  <StarRating rating={soloProduct.points} />
                  <div className="flex items-center gap-3 ">
                    <div className="flex items-center gap-3">
                      <Image src={RedbasketShop} width={16} />
                      <del className="tracking-widest text-xs">${soloProduct.main_price}</del>
                    </div>
                    <h1 className="lg:pb-4 text-redBody font-black text-2xl lg:text-3xl tracking-widest">
                      ${soloProduct.discount_price}
                      <span className="hidden lg:inline-block mx-2">
                        (toman)
                      </span>
                    </h1>
                  </div>
                </div>
                <button
                  className="p-4 mt-12 lg:p-6 lg:mt-16 transition duration-700 shadow-3xl text-white bg-redBody rounded-lg hover:bg-transparent hover:text-redBody"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="500"
                  data-aos-anchor-placement="top-bottom"
                >
                  <span className="mr-3">65,485,555</span>buy
                </button>
              </div>

              <div className="px-5">
                <Image
                  className="rounded-3xl my-5"
                  width={550}
                  src={pic1}
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="500"
                />
                <Image
                  className="rounded-3xl my-5 hidden lg:inline-block"
                  width={550}
                  src={pic2}
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
