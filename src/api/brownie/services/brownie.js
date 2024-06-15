'use strict';

/**
 * brownie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::brownie.brownie');
