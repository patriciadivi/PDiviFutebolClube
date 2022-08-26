import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { response } from 'express';

import { app } from '../app';
import fakeUserDB  from '../database/models/UserModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota de Login', () => {
  describe('findOne', () => {
    let loginResponse: Response;

    it('Verificando se retorna o "status" 200', async () => {
      const response = await chai.request(app)
      .post('/login')
      .send({
        email: 'user@user.com',
        password: 'secret_user',
      });

      expect(response.status).to.equal(200);
    });

    it('Verificando se retorna a chave "token"', async () => {
      const response = await chai.request(app)
      .post('/login')
      .send({
        email: 'user@user.com',
        password: 'secret_user',
      });
      
      expect(response.body).to.have.keys('token');
    });

    it('Verificando se o token é no formato de "String"', async () => {
      const response = await chai.request(app)
      .post('/login')
      .send({
        email: 'user@user.com',
        password: 'secret_user',
      });
      const { token } = response.body;

      expect(token).to.be.a('string');
    });


  });
});
