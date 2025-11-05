/// <reference types="next" />
/// <reference types="next/image-types/global" />

// ให้ TypeScript รู้จักไฟล์ CSS/SCSS
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}
