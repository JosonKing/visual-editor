import { Context, controller, get, inject, provide } from 'midway';
import { IProductService, IProductResult } from '../../interface';

@provide()
@controller('/product')
export class ProductController {

  @inject()
  ctx: Context;

  @inject('productService')
  service: IProductService;

  @get('/list')
  async getProductList(): Promise<void> {
    const productList: any = await this.service.getProductList({});
    this.ctx.body = {code: 0, msg: 'OK', data: productList};
  }

  @get('/:id')
  async getProduct(): Promise<void> {
    const id: number = this.ctx.params.id;
    const product: IProductResult = await this.service.getProduct({id});
    this.ctx.body = {code: 0, msg: 'OK', data: product};
  }
}
