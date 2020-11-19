"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.getMockComponent = exports.setupMockComponent = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@testing-library/react");
var MOCKED_COMPONENT_ROLE = 'MockedComponent';
function setupMockComponent(component) {
    function MockComponent(props) {
        var elementRef = react_1.useRef(null);
        react_1.useEffect(function () {
            var element = elementRef.current;
            if (element) {
                element.props = props;
                element.component = component;
            }
        }, [props, elementRef.current]);
        return react_1["default"].createElement("div", { role: MOCKED_COMPONENT_ROLE, ref: elementRef });
    }
    var mock = component;
    mock.mockImplementation(MockComponent);
    mock.mockName("Mock:" + component.name);
}
exports.setupMockComponent = setupMockComponent;
function getMockComponent(component) {
    var matchFunction = function (accessibleName, element) {
        var componentElement = element;
        return componentElement.component === component;
    };
    var element = react_2.screen.getByRole(MOCKED_COMPONENT_ROLE, { name: matchFunction });
    return element;
}
exports.getMockComponent = getMockComponent;
