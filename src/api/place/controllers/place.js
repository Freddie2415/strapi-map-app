'use strict';

/**
 *  place controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::place.place', ({strapi}) => ({

// Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    // some custom logic here
    ctx.query = {...ctx.query, populate: '*'}

    // Calling the default core action
    const {data, meta} = await super.find(ctx);

    return {data, meta};
  },
}));
