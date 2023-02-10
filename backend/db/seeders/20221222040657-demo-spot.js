'use strict';
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
	options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
	up: async (queryInterface, Sequelize) => {
		options.tableName = 'Spots';
		return queryInterface.bulkInsert(
			options,
			[
				{
					ownerId: 1,
					address: '1065 6th Ave',
					city: 'New York',
					state: 'NY',
					country: 'United States',
					lat: 40.75376,
					lng: -73.98496,
					name: '5 Bryant Park',
					description: 'Contemporary',
					price: 100,
				},
				{
					ownerId: 1,
					address: '555 E 90th St',
					city: 'New York',
					state: 'NY',
					country: 'United States',
					lat: 40.77771,
					lng: -73.94331,
					name: 'Asphalt Green UES',
					description: 'Antiquated',
					price: 100,
				},
				{
					ownerId: 1,
					address: '212 North End Ave',
					city: 'New York',
					state: 'NY',
					country: 'United States',
					lat: 40.71597,
					lng: -74.01475,
					name: 'Asphalt Green BPC',
					description: 'Contemporary',
					price: 100,
				},

				{
					ownerId: 2,
					address: '450 Park Ave',
					city: 'San Francisco',
					state: 'CA',
					country: 'United States',
					lat: 37.77493,
					lng: -122.41942,
					name: 'Embarcadero Center',
					description: 'Modern',
					price: 75,
				},

				{
					ownerId: 2,
					address: '33 Harrison St',
					city: 'Boston',
					state: 'MA',
					country: 'United States',
					lat: 42.36008,
					lng: -71.05888,
					name: 'North End Park',
					description: 'Rustic',
					price: 125,
				},

				{
					ownerId: 2,
					address: '1600 Amphitheater Pkwy',
					city: 'Mountain View',
					state: 'CA',
					country: 'United States',
					lat: 37.42199,
					lng: -122.08405,
					name: 'Googleplex',
					description: 'Tech-savvy',
					price: 150,
				},

				{
					ownerId: 2,
					address: '421 East Valley Farms Lane',
					city: 'South Richmond Hill',
					state: 'NY',
					country: 'United States',
					lat: 40.75376,
					lng: -73.98496,
					name: 'Park Street',
					description: 'Contemporary',
					price: 100,
				},

				{
					ownerId: 3,
					address: '555 Market St',
					city: 'San Francisco',
					state: 'CA',
					country: 'United States',
					lat: 37.7909,
					lng: -122.39282,
					name: 'Embarcadero Station',
					description: 'Luxury',
					price: 125,
				},

				{
					ownerId: 3,
					address: '100 Boylston St',
					city: 'Boston',
					state: 'MA',
					country: 'United States',
					lat: 42.35554,
					lng: -71.06014,
					name: 'Boston Common',
					description: 'Urban',
					price: 150,
				},

				{
					ownerId: 4,
					address: '2300 Northern Blvd',
					city: 'New York',
					state: 'NY',
					country: 'United States',
					lat: 40.77488,
					lng: -73.77287,
					name: 'Manhasset Park',
					description: 'Nature-friendly',
					price: 75,
				},

				{
					ownerId: 4,
					address: '600 Travis St',
					city: 'Houston',
					state: 'TX',
					country: 'United States',
					lat: 29.75867,
					lng: -95.36327,
					name: 'Minute Maid Park',
					description: 'Sports-oriented',
					price: 100,
				},

				{
					ownerId: 5,
					address: '500 Terminal Ave',
					city: 'Seattle',
					state: 'WA',
					country: 'United States',
					lat: 47.44349,
					lng: -122.3088,
					name: 'Sea-Tac International',
					description: 'Airport-adjacent',
					price: 125,
				},

				{
					ownerId: 5,
					address: '110 S 4th St',
					city: 'Minneapolis',
					state: 'MN',
					country: 'United States',
					lat: 44.97688,
					lng: -93.2721,
					name: 'Target Field',
					description: 'Baseball-themed',
					price: 150,
				},

				{
					ownerId: 6,
					address: '1400 S Altadena Dr',
					city: 'Pasadena',
					state: 'CA',
					country: 'United States',
					lat: 34.14277,
					lng: -118.12498,
					name: 'Rose Bowl Stadium',
					description: 'Football-friendly',
					price: 75,
				},

				{
					ownerId: 6,
					address: '700 W 7th St',
					city: 'Fort Worth',
					state: 'TX',
					country: 'United States',
					lat: 32.75058,
					lng: -97.32974,
					name: 'Globe Life Park',
					description: 'Rangers-themed',
					price: 100,
				},

				{
					ownerId: 7,
					address: '3000 N Meridian St',
					city: 'Indianapolis',
					state: 'IN',
					country: 'United States',
					lat: 32.75058,
					lng: -97.32974,
					name: 'Red Deal Park',
					description: 'Rangers-themed',
					price: 100,
				},

				{
					ownerId: 1,
					address: '555 California St',
					city: 'San Francisco',
					state: 'CA',
					country: 'United States',
					lat: 37.79133,
					lng: -122.40106,
					name: 'Transamerica Pyramid',
					description: 'Sleek',
					price: 85,
				},

				{
					ownerId: 1,
					address: '111 W Wacker Dr',
					city: 'Chicago',
					state: 'IL',
					country: 'United States',
					lat: 41.88805,
					lng: -87.63213,
					name: 'Riverwalk Park',
					description: 'Urban',
					price: 95,
				},

				{
					ownerId: 1,
					address: '222 Biscayne Blvd',
					city: 'Miami',
					state: 'FL',
					country: 'United States',
					lat: 25.78235,
					lng: -80.18626,
					name: 'Bayfront Park',
					description: 'Beachy',
					price: 110,
				},

				{
					ownerId: 1,
					address: '333 S Hope St',
					city: 'Los Angeles',
					state: 'CA',
					country: 'United States',
					lat: 34.05368,
					lng: -118.24278,
					name: 'Downtown LA Art Walk',
					description: 'Artistic',
					price: 120,
				},

				{
					ownerId: 1,
					address: '444 S 4th St',
					city: 'Louisville',
					state: 'KY',
					country: 'United States',
					lat: 38.25268,
					lng: -85.75844,
					name: 'Waterfront Park',
					description: 'Scenic',
					price: 130,
				},

				{
					ownerId: 1,
					address: '555 E Washington St',
					city: 'Phoenix',
					state: 'AZ',
					country: 'United States',
					lat: 33.44943,
					lng: -112.06779,
					name: 'Heritage Square',
					description: 'Historical',
					price: 140,
				},

				{
					ownerId: 1,
					address: '666 Pine St',
					city: 'Seattle',
					state: 'WA',
					country: 'United States',
					lat: 47.60801,
					lng: -122.33814,
					name: 'Pike Place Market',
					description: 'Charming',
					price: 90,
				},

				{
					ownerId: 6,
					address: '777 W Jackson Blvd',
					city: 'Chicago',
					state: 'IL',
					country: 'United States',
					lat: 41.87599,
					lng: -87.64908,
					name: 'Union Park',
					description: 'Lively',
					price: 105,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		options.tableName = 'Spots';
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			options,
			{
				name: {
					[Op.in]: [
						'Asphalt Green UES',
						'Asphalt Green BPC',
						'Embarcadero Center',
						'North End Park',
						'Googleplex',
						'Park Street',
						'Embarcadero Station',
						'Boston Common',
						'Manhasset Park',
						'Minute Maid Park',
						'Sea-Tac International',
						'Target Field',
						'Rose Bowl Stadium',
						'Globe Life Park',
						'Globe Life Park',
						'Transamerica Pyramid',
						'Riverwalk Park',
						'Bayfront Park',
						'Downtown LA Art Walk',
						'Waterfront Park',
						'Heritage Square',
						'Pike Place Market',
						'Union Park',
					],
				},
			},
			{}
		);
	},
};
