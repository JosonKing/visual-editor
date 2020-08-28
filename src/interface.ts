/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  id: number;
}

/**
 * @description User-Service response
 */
export interface IUserResult {
  id: number;
  username: string;
  phone: string;
  email?: string;
}

/**
 * @description User-Service abstractions
 */
export interface IUserService {
  getUser(options: IUserOptions): Promise<IUserResult>;
}

/**
 * @description Product-Service parameters
 */
export interface IProductOptions {
  id: number;
}

/**
 * @description Product-Service response
 */
export interface IProductResult {
  id: number;
  createTime: string,
  delStatus: number,
  description: string,
  icon: null,
  layout: number,
  menus: string,
  name: string,
  plugin: string,
  showLogo: number,
  subTitle: string,
  theme: string,
  updateTime: string,
}

/**
 * @description Product-Service abstractions
 */
export interface IProductService {
  getProductList(options: any): Promise<any>;
}

/**
 * @description Product-Service abstractions
 */
export interface IProductService {
  getProduct(options: IProductOptions): Promise<IProductResult>;
}
