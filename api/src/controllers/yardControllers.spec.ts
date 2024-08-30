import { Request, Response } from 'express';
import * as Utils from '../utils/fetchData';
import { getYardById } from './yardControllers';

jest.mock('../db/yards.ts', () => ({
  yardTable: [
    {
      equipment: [],
      id: '1',
      name: 'Test Yard',
      maxSpacesAvailable: 1,
      location: {
        city: 'Test',
        region: 'MA',
        country: 'USA',
      },
    },
  ],
}));

describe('yardControllers', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('getYardById calls the database adapter', () => {
    const mockedFetchDataById = jest.spyOn(Utils, 'fetchDataById');
    const mockReq = { params: { id: '1' } } as unknown as Request;
    const mockRes = {} as unknown as Response;
    const mockNext = jest.fn();

    getYardById(mockReq, mockRes, mockNext);

    expect(mockedFetchDataById).toHaveBeenCalled();
  });
});
