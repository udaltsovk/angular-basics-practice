import { maxLength, minLength, required, schema } from "@angular/forms/signals";
import { EMPTY_IMAGE_FORM_MODEL, ImageFormModel } from "../image/image.model";

export type RecipeMetadataFormModel = {
  title: string;
  description: string;
  image: ImageFormModel;
};

export const recipeMetadataSchema = schema<RecipeMetadataFormModel>(recipeMetadata => {
  required(recipeMetadata.title, { message: "Необходимо указать название рецепта" });
  minLength(recipeMetadata.title, 3, {
    message: "Название рецепта не может быть короче 3 символов",
  });
  maxLength(recipeMetadata.title, 50, {
    message: "Название рецепта не может быть длиннее 50 символов",
  });

  required(recipeMetadata.description, { message: "Необходимо указать описание рецепта" });
  minLength(recipeMetadata.description, 10, {
    message: "Описание рецепта не может быть короче 10 символов",
  });
  maxLength(recipeMetadata.description, 100, {
    message: "Описание рецепта не может быть длиннее 100 символов",
  });
});

export const EMPTY_RECIPE_METADATA_FORM_MODEL: RecipeMetadataFormModel = {
  title: "",
  description: "",
  image: EMPTY_IMAGE_FORM_MODEL,
};
