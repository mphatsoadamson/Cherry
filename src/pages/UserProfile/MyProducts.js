import React, {useState} from 'react'

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');

    const addProduct = () => {
      const newProduct = {
        name,
        price,
        amount
      };

    setProducts([...products, newProduct]);

      setName('');
      setPrice('');
      setAmount('');

    };
    

    
    return (
      <div className= 'w-9/10 mx-auto relative overflow-auto h-[31rem] scrollbar-thumb-rounded-full'>
          <h1 className = 'flex justify-center text-crimson text-[30px] font-[350] py-[5px] px-[10px] mt-2.5'>Your Produtcs</h1>
            
            <div className="mt-20 flex flex-col items-center w-1/3 rounded-md min-h-[30vh] float-left mr-12">
              <div className='flex flex-row items-center justify-center w-full border border-gray-300 rounded min-h-[30vh]'>
                <label htmlFor="uploadInput" className="text-gray-500 hover:underline cursor-pointer">Upload Photo</label>
                <input id="uploadInput" type="file" className="hidden" onChange="handleFileUpload" />
              </div>
             
              <button className='border border-crimson px-5 py-2.5 rounded-md text-base font-normal m-4 transition-transform duration-600 ease-in-out hover:bg-crimson hover:text-white hover:scale-110' onClick = {addProduct}>Add Product</button>
            </div>
            
        
          <div className = 'form mb-[50px]'>
            <div className = 'flex flex-col w-[45%] m-[10px]'>
                <label htmlFor='name' className='text-[1.2rem] font-light mb-[5px]'>Name Of Product</label>
                <input type = 'text' id = 'name' className='py-2.5 px-5 focus:border-crimson border border-gray-300 rounded outline-none' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              
              <div className = 'flex flex-col w-[45%] m-[10px]'>
                <label htmlFor='price' className='text-[1.2rem] font-light mb-[5px]'>Price in MWK</label>
                <input type = 'number' id = 'price' className='py-2.5 px-5 focus:border-crimson border border-gray-300 rounded outline-none' value={price} onChange={(e) => setPrice(e.target.value)}/>
              </div>

               
              <div className = 'flex flex-col w-[45%] m-[10px]'>
                <label htmlFor='amount' className='text-[1.2rem] font-light mb-[5px]'>Amount in Stock</label>
                <input type = 'number' id = 'amount' className='py-2.5 px-5 focus:border-crimson border border-gray-300 rounded outline-none' value={amount} onChange={(e) => setAmount(e.target.value)}/>
              </div>
    
              <div className = 'flex flex-col w-[45%] m-[10px]'>
                <label htmlFor='description' className='text-[1.2rem] font-light mb-[5px]'>Description</label>
                <input type = 'description' className='py-2.5 px-5 focus:border-crimson border border-gray-300 rounded outline-none'/>
              </div>
    
              
            
          </div>

          <div className='flex flex-col justify-center items-center text-crimson text-[30px] font-[350] py-[5px] px-[10px] mt-2.5'>List Of Produtcs</div>
          <div  id='product-list'>{products.map((product, index) => (
           <div className='mb-4'> 
              <div className='flex flex-row space-x-4 mt-4 mb-4' key={index}>
              <h3 className='text-[1.1rem] font-light mb-[1px]'>{index + 1}. {product.name}</h3>
              <p className='text-[1.1rem] font-light mb-[1px]'>MWK {product.price}</p>
              <p className='text-[1.1rem] font-light mb-[1px]'>{product.amount} available in stock</p>
              
            </div>
            <hr className='bg-crimson-300 opacity-50 border-none m-0 h-0.25'></hr> 
            </div>
          
          ))}

          </div>
    
        </div>
  )
}

export default MyProducts