"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var classnames_1 = require("classnames");
var SectionWrapper_1 = require("components/molecules/SectionWrapper/SectionWrapper");
var Button_1 = require("components/atoms/Button/Button");
var SlashBanner_module_scss_1 = require("./SlashBanner.module.scss");
var SlashBanner = function (_a) {
    var bannerImage = _a.bannerImage, PrimaryTitleContent = _a.PrimaryTitleContent, subTitle = _a.subTitle, description = _a.description, ctaText = _a.ctaText, ctaOnClick = _a.ctaOnClick, className = _a.className;
    return (React.createElement("div", { className: classnames_1["default"](SlashBanner_module_scss_1["default"].container, className) },
        React.createElement(SectionWrapper_1["default"], { className: SlashBanner_module_scss_1["default"].contentWrapper },
            React.createElement("h1", { className: SlashBanner_module_scss_1["default"].primaryTitle },
                React.createElement(PrimaryTitleContent, null)),
            React.createElement("h2", { className: SlashBanner_module_scss_1["default"].subTitle }, subTitle),
            React.createElement("p", { className: SlashBanner_module_scss_1["default"].description }, description),
            ctaText && (React.createElement(Button_1["default"], { text: ctaText, className: SlashBanner_module_scss_1["default"].ctaButton, onClick: ctaOnClick }))),
        React.createElement("div", { className: SlashBanner_module_scss_1["default"].infoBackground }),
        React.createElement("div", { className: SlashBanner_module_scss_1["default"].bannerImageWrapper },
            React.createElement(image_1["default"], { className: SlashBanner_module_scss_1["default"].bannerImage, alt: "banner-image", src: bannerImage, width: 863, height: 600 })),
        React.createElement("div", { className: SlashBanner_module_scss_1["default"].ScrollHinter })));
};
exports["default"] = SlashBanner;
