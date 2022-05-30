import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useState } from "react";

const Pagination = ({count1,limit1}) => {
  // TODO: Remove below const and instead import them from chakra

  const handlech =(e)=>{
limit1(e)

  }
  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" >First</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>count1(-1)}>Previus</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>handlech(e)} >
        <option data-cy="pagination-limit-3" value ={3}>3</option>
        <option data-cy="pagination-limit-6" value ={6}>6</option>
        <option data-cy="pagination-limit-9" value ={9}>9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>count1(+1)}>Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
