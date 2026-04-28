const buttonComponent = require("./button");
const inputComponent = require("./input");
const cardComponent = require("./card");

/**
 * Aggregates all component styles into a single object.
 * Each component function returns a flat CSS-in-JS object.
 *
 * @returns {Record<string, object>} Merged component styles
 */
function getAllComponents() {
  return {
    ...buttonComponent(),
    ...inputComponent(),
    ...cardComponent(),
  };
}

module.exports = { getAllComponents };
