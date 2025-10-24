'use strict';

/**
 * toxina service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::toxina.toxina');
