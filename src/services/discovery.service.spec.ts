import { async, TestBed } from '@angular/core/testing';

import { DiscoveryService } from './discovery.service';
import { TripCriteria } from '../models/trip-criteria.model';

describe('Discovery Service', () => {
    let discoveryService,
        criteria;

    beforeEach(() => {
        discoveryService = new DiscoveryService();
    });

    beforeEach(() => {
        criteria = {
            query: 'round-trip',
            startDate: new Date(),
            endDate: new Date(),
            budget: 100000,
            currency: 'INR',
            destinations: [
                { country: 'Thailand', countryIsoCode: 'THA', city: 'Pattaya' },
                { country: 'Singapore', countryIsoCode: 'SGP', city: 'Singapore' }
            ]
        };
    });

    it('should be created', () => {
        expect(discoveryService instanceof DiscoveryService).toBe(true);
    });

    it('Should be able to load trips based on trip criteria', () => {
        discoveryService.getTrips(criteria).success((trips) => {
            expect(trips.length).toBe(2);
        });
    });
});