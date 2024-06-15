'use strict';

/**
 * pastry router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pastry.pastry');
