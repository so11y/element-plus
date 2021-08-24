(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/tooltip.md?vue&type=template&id=4017df9a

var tooltipvue_type_template_id_4017df9a_hoisted_1 = {
  class: "content element-doc"
};

var tooltipvue_type_template_id_4017df9a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Tooltip ");

var tooltipvue_type_template_id_4017df9a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Display prompt information for mouse hover.", -1);

var tooltipvue_type_template_id_4017df9a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Basic usage ");

var tooltipvue_type_template_id_4017df9a_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Tooltip has 9 placements.", -1);

var tooltipvue_type_template_id_4017df9a_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Use attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to set the display content when hover. The attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" determines the position of the tooltip. Its value is "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "[orientation]-[alignment]"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" with four orientations "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "right"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "bottom"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" and three alignments "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "start"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "end"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "null"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", and the default alignment is null. Take "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "placement=\"left-end\""), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" for example, Tooltip will display on the left of the element which you are hovering and the bottom of the tooltip aligns with the bottom of the element.")])], -1);

var tooltipvue_type_template_id_4017df9a_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"box\">\n  <div class=\"top\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Left prompts info\" placement=\"top-start\">\n      <el-button>top-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Center prompts info\" placement=\"top\">\n      <el-button>top</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Top Right prompts info\" placement=\"top-end\">\n      <el-button>top-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"left\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Top prompts info\" placement=\"left-start\">\n      <el-button>left-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Center prompts info\" placement=\"left\">\n      <el-button>left</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Left Bottom prompts info\" placement=\"left-end\">\n      <el-button>left-end</el-button>\n    </el-tooltip>\n  </div>\n\n  <div class=\"right\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Top prompts info\" placement=\"right-start\">\n      <el-button>right-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Center prompts info\" placement=\"right\">\n      <el-button>right</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Right Bottom prompts info\" placement=\"right-end\">\n      <el-button>right-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class=\"bottom\">\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Left prompts info\" placement=\"bottom-start\">\n      <el-button>bottom-start</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Center prompts info\" placement=\"bottom\">\n      <el-button>bottom</el-button>\n    </el-tooltip>\n    <el-tooltip class=\"item\" effect=\"dark\" content=\"Bottom Right prompts info\" placement=\"bottom-end\">\n      <el-button>bottom-end</el-button>\n    </el-tooltip>\n  </div>\n</div>\n\n<style>\n  .box {\n    width: 400px;\n\n    .top {\n      text-align: center;\n    }\n\n    .left {\n      float: left;\n      width: 110px;\n    }\n\n    .right {\n      float: right;\n      width: 110px;\n    }\n\n    .bottom {\n      clear: both;\n      text-align: center;\n    }\n\n    .item {\n      margin: 4px;\n    }\n\n    .left .el-tooltip__popper,\n    .right .el-tooltip__popper {\n      padding: 8px 10px;\n    }\n\n    .el-button {\n      width: 110px;\n    }\n  }\n</style>\n")], -1);

var tooltipvue_type_template_id_4017df9a_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Theme ");

var tooltipvue_type_template_id_4017df9a_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Tooltip has two themes: "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "light"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("。")], -1);

var tooltipvue_type_template_id_4017df9a_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Set "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to modify theme, and the default value is "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "dark"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var tooltipvue_type_template_id_4017df9a_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tooltip content=\"Top center\" placement=\"top\">\n  <el-button>Dark</el-button>\n</el-tooltip>\n<el-tooltip content=\"Bottom center\" placement=\"bottom\" effect=\"light\">\n  <el-button>Light</el-button>\n</el-tooltip>\n")], -1);

var tooltipvue_type_template_id_4017df9a_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("More Content ");

var tooltipvue_type_template_id_4017df9a_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "Display multiple lines of text and set their format.", -1);

var tooltipvue_type_template_id_4017df9a_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Override attribute "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" of "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "el-tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" by adding a slot named "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")])], -1);

var tooltipvue_type_template_id_4017df9a_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-tooltip placement=\"top\">\n  <template #content>\n    multiple lines<br/>second line\n  </template>\n  <el-button>Top center</el-button>\n</el-tooltip>\n")], -1);

var tooltipvue_type_template_id_4017df9a_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Advanced usage ");

var tooltipvue_type_template_id_4017df9a_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "In addition to basic usages, there are some attributes that allow you to customize your own:", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "transition"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute allows you to customize the animation in which the tooltip shows or hides, and the default value is el-fade-in-linear.")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" attribute allows you to disable "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". You just need set it to "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("In fact, Tooltip is an extension based on ");

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Vue-popper");

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(", you can use any attribute that are allowed in Vue-popper.");

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <el-tooltip :disabled=\"disabled\" content=\"click to close tooltip function\" placement=\"bottom\" effect=\"light\">\n    <el-button @click=\"disabled = !disabled\">click to {{disabled ? 'active' : 'close'}} tooltip function</el-button>\n  </el-tooltip>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        disabled: false\n      };\n    }\n  };\n</script>\n\n<style>\n  .slide-fade-enter-active {\n    transition: all .3s ease;\n  }\n  .slide-fade-leave-active {\n    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n  }\n  .slide-fade-enter, .expand-fade-leave-active {\n    margin-left: 20px;\n    opacity: 0;\n  }\n</style>\n")], -1);

var _hoisted_24 = {
  class: "tip"
};

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("The "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "router-link"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" component is not supported in tooltip, please use "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "vm.$router.push"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(".")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Disabled form elements are not supported for Tooltip, more information can be found at ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("MDN");

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(". You need to wrap the disabled form element with a container element for Tooltip to work.");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Attributes ");

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Default")])], -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("whether to append Dialog itself to body. A nested Dialog should have this attribute set to "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true")], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "effect"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Tooltip theme"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "dark/light"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "dark")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "content"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("display content, can be overridden by "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "slot#content")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "placement"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "position of Tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "bottom")], -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "model-value / v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "visibility of Tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "whether Tooltip is disabled"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "offset"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "offset of the Tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "transition"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "animation name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "el-fade-in-linear")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "visible-arrow", -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("whether an arrow is displayed. For more information, check ");

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Vue-popper");

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" page");

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean", -1);

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—", -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true", -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popper-options", -1);

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("popper.js");

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" parameters");

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Object", -1);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("refer to ");

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("popper.js");

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" doc");

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "{ boundariesElement: 'body', gpuAcceleration: false }")], -1);

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "show-after"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "delay of appearance, in millisecond"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "hide-after"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "delay of disappear, in millisecond"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "auto-close"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "timeout in milliseconds to hide tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0")], -1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "manual"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("whether to control Tooltip manually. "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "mouseenter"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "mouseleave"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" won't have effects if set to "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "popper-class"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "custom class name for Tooltip's popper"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—")], -1);

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "enterable"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "whether the mouse can enter the tooltip"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true")], -1);

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "tabindex", -1);

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("tabindex");

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" of Tooltip");

var _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "number", -1);

var _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—", -1);

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "0", -1);

function tooltipvue_type_template_id_4017df9a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", tooltipvue_type_template_id_4017df9a_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "tooltip",
    content: "Tooltip",
    href: "#tooltip",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_4017df9a_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#tooltip"
      })];
    }),
    _: 1
  }), tooltipvue_type_template_id_4017df9a_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_4017df9a_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#basic-usage"
      })];
    }),
    _: 1
  }), tooltipvue_type_template_id_4017df9a_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_4017df9a_hoisted_7];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_4017df9a_hoisted_6];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "theme",
    content: "Theme",
    href: "#theme",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_4017df9a_hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#theme"
      })];
    }),
    _: 1
  }), tooltipvue_type_template_id_4017df9a_hoisted_9, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_4017df9a_hoisted_11];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_4017df9a_hoisted_10];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "more-content",
    content: "More Content",
    href: "#more-content",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_4017df9a_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#more-content"
      })];
    }),
    _: 1
  }), tooltipvue_type_template_id_4017df9a_hoisted_13, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_4017df9a_hoisted_15];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_4017df9a_hoisted_14];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "advanced-usage",
    content: "Advanced usage",
    href: "#advanced-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [tooltipvue_type_template_id_4017df9a_hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#advanced-usage"
      })];
    }),
    _: 1
  }), tooltipvue_type_template_id_4017df9a_hoisted_17, _hoisted_18, _hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-component/vue-popper"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    _: 1
  }), _hoisted_22]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_24, [_hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [_hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_28])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#attributes"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [_hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [_hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_39, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [_hoisted_40, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://github.com/element-component/vue-popper"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    _: 1
  }), _hoisted_42]), _hoisted_43, _hoisted_44, _hoisted_45]), Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_46, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_47];
    }),
    _: 1
  }), _hoisted_48]), _hoisted_49, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [_hoisted_50, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://popper.js.org/documentation.html"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_51];
    }),
    _: 1
  }), _hoisted_52]), _hoisted_53]), _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_60, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_61];
    }),
    _: 1
  }), _hoisted_62]), _hoisted_63, _hoisted_64, _hoisted_65])])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/tooltip.md?vue&type=template&id=4017df9a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/tooltip.md?vue&type=script&lang=ts


/* harmony default export */ var tooltipvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "box"
      };
      var _hoisted_2 = {
        class: "top"
      };

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("top-start");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("top");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("top-end");

      var _hoisted_6 = {
        class: "left"
      };

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("left-start");

      var _hoisted_8 = /*#__PURE__*/_createTextVNode("left");

      var _hoisted_9 = /*#__PURE__*/_createTextVNode("left-end");

      var _hoisted_10 = {
        class: "right"
      };

      var _hoisted_11 = /*#__PURE__*/_createTextVNode("right-start");

      var _hoisted_12 = /*#__PURE__*/_createTextVNode("right");

      var _hoisted_13 = /*#__PURE__*/_createTextVNode("right-end");

      var _hoisted_14 = {
        class: "bottom"
      };

      var _hoisted_15 = /*#__PURE__*/_createTextVNode("bottom-start");

      var _hoisted_16 = /*#__PURE__*/_createTextVNode("bottom");

      var _hoisted_17 = /*#__PURE__*/_createTextVNode("bottom-end");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Left prompts info",
          placement: "top-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Center prompts info",
          placement: "top"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Top Right prompts info",
          placement: "top-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_6, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Top prompts info",
          placement: "left-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_7];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Center prompts info",
          placement: "left"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_8];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Left Bottom prompts info",
          placement: "left-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_9];
              }),
              _: 1
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_10, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Top prompts info",
          placement: "right-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_11];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Center prompts info",
          placement: "right"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_12];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Right Bottom prompts info",
          placement: "right-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_13];
              }),
              _: 1
            })];
          }),
          _: 1
        })]), _createVNode("div", _hoisted_14, [_createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Left prompts info",
          placement: "bottom-start"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_15];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Center prompts info",
          placement: "bottom"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_16];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          class: "item",
          effect: "dark",
          content: "Bottom Right prompts info",
          placement: "bottom-end"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_17];
              }),
              _: 1
            })];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Dark");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Light");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tooltip, {
          content: "Top center",
          placement: "top"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_el_tooltip, {
          content: "Bottom center",
          placement: "bottom",
          effect: "light"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" multiple lines");

      var _hoisted_2 = /*#__PURE__*/_createVNode("br", null, null, -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("second line ");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Top center");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tooltip, {
          placement: "top"
        }, {
          content: _withCtx(function () {
            return [_hoisted_1, _hoisted_2, _hoisted_3];
          }),
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, null, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_tooltip = _resolveComponent("el-tooltip");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tooltip, {
          disabled: _ctx.disabled,
          content: "click to close tooltip function",
          placement: "bottom",
          effect: "light"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_button, {
              onClick: _cache[1] || (_cache[1] = function ($event) {
                return _ctx.disabled = !_ctx.disabled;
              })
            }, {
              default: _withCtx(function () {
                return [_createTextVNode("click to " + _toDisplayString(_ctx.disabled ? 'active' : 'close') + " tooltip function", 1)];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["disabled"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            disabled: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/tooltip.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/tooltip.md



tooltipvue_type_script_lang_ts.render = tooltipvue_type_template_id_4017df9a_render

/* harmony default export */ var tooltip = __webpack_exports__["default"] = (tooltipvue_type_script_lang_ts);

/***/ })

}]);