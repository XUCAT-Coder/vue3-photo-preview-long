import { App } from "vue";
import ZaPhotoProvider from "./PhotoProvider/index.vue";
import ZaPhotoConsumer from "./PhotoConsumer/index.vue";
import ZaPhotoSlider from "./PhotoSlider/index.vue";

const components = [ZaPhotoProvider, ZaPhotoConsumer, ZaPhotoSlider];

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export * from "./types";

export { ZaPhotoProvider, ZaPhotoConsumer, ZaPhotoSlider };

export default { install };
