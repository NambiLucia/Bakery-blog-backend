'use strict';

/**
 * cupcake service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cupcake.cupcake');
