import React from "react";
import { useEffect,useState } from "react";
import axios from "axios"
import { Flex} from '@chakra-ui/react'
import { Grid} from '@chakra-ui/react'
import Product from "./Product"
import Pagination from "./Pagination"
import AddProduct from "./AddProduct"




const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [prods,setProds] = useState([])
const [limit,setlimit]   = useState(3)
  const [count,setcount ]= useState(1)


const count1 =(v)=>{
  setcount(count+v)
 
}


const limit1=(e)=>{
  setlimit(limit+e)
  console.log(limit)
 
}
 

 useEffect(()=>{
getdata()

 },[count,limit])


 const getdata =()=>{
   axios.get(`http://localhost:8080/products?_page=${count}&limit=${limit}`).then(r=>
   
   setProds(r.data))
 }




  return (
<>

<AddProduct />
    <Flex>



      {/*  AddProduct */}

      {prods.map((e)=>(
        <Grid>{/* List of Products */}
      <Product product1={e}/></Grid>
      ))}
      
      {/* Pagination */}

     
    </Flex>
    <Pagination count1 ={count1} limit1 ={limit1} />
    </>

  );
};

export default Products;
