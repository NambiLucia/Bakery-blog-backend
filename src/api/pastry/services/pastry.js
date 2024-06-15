'use strict';

/**
 * pastry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pastry.pastry');
