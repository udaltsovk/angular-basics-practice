import { Image } from "../../../models/image";
import { required, schema, validate } from "@angular/forms/signals";

export type ImageFormModel = {
  src: string;
};

export const imageToImageFormModel = (image: Image): ImageFormModel => ({
  ...image,
});

export const imageFormModelToImage = (imageFormModel: ImageFormModel): Image => ({
  ...imageFormModel,
});

export const imageSchema = schema<ImageFormModel>(image => {
  required(image.src, { message: "Необходимо указать ссылку на изображение" });

  validate(image.src, ({ value }) => {
    const src = value();

    if (!src) {
      return null;
    }

    try {
      new URL(src);
    } catch {
      return {
        kind: "url",
        message: "Некорректная ссылка",
      };
    }

    if (!src.startsWith("https://")) {
      return {
        kind: "https",
        message: "Ссылка на изображение должна начинаться с https://",
      };
    }

    return null;
  });
});

export const EMPTY_IMAGE_FORM_MODEL: ImageFormModel = {
  src: "",
};
