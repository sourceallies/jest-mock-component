"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var ComponentUnderTest_1 = __importDefault(require("./ComponentUnderTest"));
var index_1 = require("./index");
var ChildComponent_1 = __importDefault(require("./ChildComponent"));
jest.mock('./ChildComponent');
beforeEach(function () {
    index_1.setupMockComponent(ChildComponent_1["default"]);
});
test('getMockComponent should be able to find a mock component', function () {
    react_2.render(react_1["default"].createElement(ComponentUnderTest_1["default"], null));
    expect(index_1.getMockComponent(ChildComponent_1["default"])).not.toBeNull();
});
test('the mock should have the name of the function prefixed with Mock', function () {
    var mock = ChildComponent_1["default"];
    expect(mock.getMockName()).toEqual('Mock:ChildComponent');
});
test('The mock component element should hold the prop value', function () {
    react_2.render(react_1["default"].createElement(ComponentUnderTest_1["default"], null));
    expect(index_1.getMockComponent(ChildComponent_1["default"]).props.value).toEqual(0);
});
