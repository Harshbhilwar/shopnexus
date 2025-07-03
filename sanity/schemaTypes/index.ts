import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType'
import { productType } from './productType'
import { brandType } from './brandTypes'
import { blogType } from './blogType'
import { blogCategoryType } from './blogCategoryType'
import { authorType } from './authorType'
import { addressType } from './addressType'
import { orderType } from './orderType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    blockContentType,
    productType,
    brandType,
    orderType,
    blogType,
    blogCategoryType,
    authorType,
    addressType, 
  ],
};
