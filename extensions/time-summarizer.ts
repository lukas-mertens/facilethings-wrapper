jQuery(() => {
    function parseTime(input: string | string[]): number {
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
    if ($('#enst_actions').length > 0) {
        $("#enst_actions").append('<div id="approx_total_time"></div>');
        $("#approx_total_time")[0].style.position = "absolute";
        $("#approx_total_time")[0].style.bottom = "2rem";
        $("#approx_total_time")[0].style.right = "2rem";
        $("#approx_total_time")[0].style.color = "#797979";
    }

    function update() {
        if ($('#enst_actions').length > 0) {
            const timeCalculated = "Estimated time to complete: " + ($("li[data-show=true] .stuff_bottom_signals").toArray().map((element) => {
                return parseTime(element.innerHTML)
            }).reduce((a: number, b: number) => a + b, 0) / 60).toFixed(2) + "h";

            $("#approx_total_time")[0].innerHTML = timeCalculated;
        }
    }
    setInterval(update, 1000);
});
