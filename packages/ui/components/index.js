const buttonComponent = require("./button");
const inputComponent = require("./input");
const cardComponent = require("./card");
const badgeComponent = require("./badge");
const switchComponent = require("./switch");
const radioComponent = require("./radio");
const checkboxComponent = require("./checkbox");
const avatarComponent = require("./avatar");
const accordionComponent = require("./accordion");
const tabsComponent = require("./tabs");
const toastComponent = require("./toast");
const tooltipComponent = require("./tooltip");
const toolbarComponent = require("./toolbar");
const menubarComponent = require("./menubar");
const popoverComponent = require("./popover");
const selectComponent = require("./select");
const menuComponent = require("./menu");
const alertDialogComponent = require("./alert-dialog");

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
    ...badgeComponent(),
    ...switchComponent(),
    ...radioComponent(),
    ...checkboxComponent(),
    ...avatarComponent(),
    ...accordionComponent(),
    ...tabsComponent(),
    ...toastComponent(),
    ...tooltipComponent(),
    ...toolbarComponent(),
    ...menubarComponent(),
    ...popoverComponent(),
    ...selectComponent(),
    ...menuComponent(),
    ...alertDialogComponent(),
  };
}

module.exports = { getAllComponents };
