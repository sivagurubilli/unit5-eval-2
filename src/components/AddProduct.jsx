import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import { Input } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'



const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
 

  const [prod1,setprod1] = useState({
title:"",
cat:"",
gender:"",
price:""

  })


  

  return (
    <>


      <Button my={4} data-cy="add-product-button">Add product</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" id="title"/>
          <Select data-cy="add-product-category" id ="cat">
            <option data-cy="add-product-category-shirt"  >shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" id ="gender">
            <Radio data-cy="add-product-gender-male">male</Radio>
            <Radio data-cy="add-product-gender-female">female</Radio>
            <Radio data-cy="add-product-gender-unisex">unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" id ="price" />
          <Button data-cy="add-product-submit-button">submit</Button>
        </ModalBody>
      </Modal>

      
    </>
  );
};

export default AddProduct;
