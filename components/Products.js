
import basketShop from '@/public/icon-shahriarh/products/basket.png'
import Image from 'next/image'
import Link from 'next/link'
import StarRating from './StarRating'

export default function Products ({ products }) {
  
    return (
      <div className="container mx-auto px-5 mb-50 lg:p-28">
         <div className="my-20 lg:my-5">
           <div data-aos="fade-up">
           <p className="text-redBody lg:text-lg  font-bold text-center"  >VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
            <h1 className="mt-5 mb-20 text-4xl lg:text-7xl font-black text-center"  id="product-section">Site products</h1>
           </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
            {products.map(card => (
                <div key={card.id} className='transition-transform duration-700 ease-in-out transform  rounded-3xl trasition btn-h bg-bgray btn-color p-10 aos-init' data-aos="fade-up">
                    <div>
                    <div className="overflow-hidden rounded-2xl transition duration-500">
                     <Image src={card.image} className='transition border border-redBody duration-500 relative w-full h-72 rounded-2xl hover:scale-110' alt="product-img" width={100} height={100}/>
                    </div>
                   
                      <div className="flex justify-between my-8">
                    
                        <StarRating rating={card.points}/>
                      <div className='flex items-center gap-3 '>
                       <div className='flex items-center gap-1'>
                       <Image src={basketShop} width={15}/>
                        <del className='tracking-wide text-xs'>${card.main_price}</del>
                       </div>
                        <h1 className='text-redBody font-black text-xl'>${card.discount_price}</h1>
                      </div>
                      </div>
                      
                      <div>
                     <div className='my-5'><h1 className='text-3xl font-bold'>{card.title}</h1></div>
                     <div>
                        <p className='leading-normal font-thin	'>{card.pre_view}</p>
                     </div>
                   
                        </div>
                        <div className="my-12 items-center "><Link href={`/product/${card.slug}`} products={card} className="btn-h bg-bgray btn-color text-xs  text-redBody">Create Project!</Link></div>
                    </div>
                 </div>
                   ))}
                    </div>
         </div>
      </div> 
    )
}