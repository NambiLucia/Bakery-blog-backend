'use strict';

/**
 * fudgy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fudgy.fudgy');
