import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ZoneOperations } from '.';  // Adjust the import path as necessary

describe('ZoneOperations', () => {
    let mock: MockAdapter;
    let zoneOps: ZoneOperations;

    beforeAll(() => {
        mock = new MockAdapter(axios);
        zoneOps = new ZoneOperations(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    it('should return data on successful report', async () => {
        const mockData = { data: 'zone report data' };
        mock.onGet('/zones', { params: { op: 'report' } }).reply(200, mockData);

        const response = await zoneOps.report();
        expect(response).toEqual(mockData);
    });

    it('should handle error on report', async () => {
        mock.onGet('/zones', { params: { op: 'report' } }).reply(500);

        const response = await zoneOps.report();
        expect(response).toBeNull();
    });
});
