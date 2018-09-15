import {ModelInterface} from "../types/index";

export class Model implements ModelInterface {
  __meta__?: Readonly<any>;

  $meta<ReturnType extends any>(): Readonly<ReturnType>;
  $meta<MetaType extends any>(metaData: MetaType): void;
  $meta(metaData?: any) {
    if (metaData !== undefined) {
      this.__meta__ = Object.freeze(metaData);
      return;
    }

    return this.__meta__;
  }

  $clearMeta() {
    delete this.__meta__;
  }
}
