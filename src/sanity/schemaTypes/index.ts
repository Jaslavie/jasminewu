import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { writingPost } from "./writing";

export const schemaTypes = [postType, writingPost];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
