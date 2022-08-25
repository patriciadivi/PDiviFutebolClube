export interface IServiceInterfaceLogin {
  resultServiceLogin(email: string, password: string): Promise<string>;
}
