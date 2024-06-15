'use strict';

/**
 * brownie controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::brownie.brownie');
