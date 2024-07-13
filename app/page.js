import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Resume from "@/components/MyResume/MyResume";
import MyPortfolio from "@/components/Portfolio";
import Products from "@/components/Products";
import { getFetch } from "@/utils/fetch";



export default async function Home() {
  const productTab = await getFetch('/1234/products/')
  const blogCard = await getFetch('/1234/articles/')

  return (
    <>
    <Hero/>
    <Features/>
    <MyPortfolio/>
    <Resume/>
    <Products products={productTab.Products}/>
    <Blog items={blogCard.articles} />
    <Contact />
    </>
  );
}
