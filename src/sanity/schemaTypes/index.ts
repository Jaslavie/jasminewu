import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";

export const schemaTypes = [postType];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
