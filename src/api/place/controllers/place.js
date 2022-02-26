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
    ctx.query._limit = -1;

    // Calling the default core action
    const {data, meta} = await super.find(ctx,{_limit: -1});

    return {data, meta};
  },
}));
