"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
function ChildComponent(props) {
    return react_1["default"].createElement("div", null, props.value);
}
exports["default"] = ChildComponent;
