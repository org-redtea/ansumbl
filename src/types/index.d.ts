export type Transformer<From, To> = (from: From) => To;
export type TransformerFn<From, To, Args extends any[]> = (from: From, ...args: Args) => To;
export interface ModelOptions {}
export interface ModelInterface {
  __meta__?: Readonly<any>;

  $meta<ReturnType extends any>(): Readonly<ReturnType>;
  $meta<MetaType extends any>(metaData: MetaType): void;
  $clearMeta(): void;
}
export interface ModelConstructor {
  new (): ModelInterface;
}
