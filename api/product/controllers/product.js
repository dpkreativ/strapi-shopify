const { sanitizeEntity } = require("strapi-utils");

const Shopify = require("shopify-api-node");

const shopify = new Shopify({
  shopName: "divi-apparels",
  apiKey: "b0a1ae319a4149db710b7481c642f8ce",
  password: "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",
});

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Object}
   */

  // Find Product by ID
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.product.findOne({ id });

    entity.shopify = await shopify.product.get(entity.shopifyID);

    return sanitizeEntity(entity, { model: strapi.models.product });
  },
};
