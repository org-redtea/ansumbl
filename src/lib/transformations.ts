import {Transformer, TransformerFn} from "../types/index";

export function transformer<From, To, Args extends any[]>
  (transformerFn: TransformerFn<From, To, Args>): (...args: Args) => Transformer<From, To>
{
  return (...args: Args) => {
    return (from: From) => transformerFn(from, ...args);
  };
}

export function transform<From, To>
  (from: From, transformer: Transformer<From, To>): To
{
  return transformer(from);
}
