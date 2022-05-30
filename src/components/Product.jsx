import React from "react";
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'

const Product = ({product1}) => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <Stack data-cy="product">
      <Image data-cy="product-image"   src ={product1.imageSrc} alt ="img" />
      <Text data-cy="product-category">{product1.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{product1.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{product1.title}</Heading>
      <Box data-cy="product-price">{product1.price}</Box>
    </Stack>
  );
};

export default Product;
