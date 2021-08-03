// ==UserScript==
// @name         FacilethingsEstimatedTime
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Show an estimated time on how much time it takes to complete all visible items
// @author       Lukas Mertens
// @match        https://app.facilethings.com/engage*
// @icon         https://www.google.com/s2/favicons?domain=facilethings.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';



    function parseTime(input) {
	if (typeof(input) !== "string") {
		return 0;
	}
	if (input.includes("45m"))
		return 45;
	if (input.includes("15m"))
		return 15;
	if (input.includes("5m"))
		return 5;
	if (input.includes("30m"))
		return 30;
	if (input.includes("1h"))
		return 60;
	if (input.includes("2h"))
		return 120;
	if (input.includes("4h"))
		return 240;
	return 0;
    }
    $("#enst_actions").append('<div id="approx_total_time"></div>');
    $("#approx_total_time")[0].style.position = "absolute";
    $("#approx_total_time")[0].style.bottom = "2rem";
    $("#approx_total_time")[0].style.right = "2rem";
    $("#approx_total_time")[0].style.color = "#797979";

    function update() {
        const timeCalculated = "Estimated time to complete: " + ($("li[data-show=true] .stuff_bottom_signals").toArray().map((element) => {
            return parseTime(element.innerHTML)}).reduce((a, b) => a + b, 0)/60).toFixed(2) + "h";

        $("#approx_total_time")[0].innerHTML = timeCalculated;
        setTimeout(update, 1000);
    }
    update();
})();
