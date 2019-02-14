var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "303",
        "ok": "303",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3171",
        "ok": "3171",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1141",
        "ok": "1141",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "933",
        "ok": "933",
        "ko": "-"
    },
    "percentiles1": {
        "total": "819",
        "ok": "819",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1669",
        "ok": "1669",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2670",
        "ok": "2670",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3070",
        "ok": "3070",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "2.5",
        "ko": "-"
    }
},
contents: {
"req_get-some-google-10db8": {
        type: "REQUEST",
        name: "Get some google news",
path: "Get some google news",
pathFormatted: "req_get-some-google-10db8",
stats: {
    "name": "Get some google news",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "303",
        "ok": "303",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "380",
        "ok": "380",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "335",
        "ok": "335",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "percentiles1": {
        "total": "320",
        "ok": "320",
        "ko": "-"
    },
    "percentiles2": {
        "total": "362",
        "ok": "362",
        "ko": "-"
    },
    "percentiles3": {
        "total": "376",
        "ok": "376",
        "ko": "-"
    },
    "percentiles4": {
        "total": "379",
        "ok": "379",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "1.25",
        "ko": "-"
    }
}
    },"req_get-some-google-bacfd": {
        type: "REQUEST",
        name: "Get some google news Redirect 1",
path: "Get some google news Redirect 1",
pathFormatted: "req_get-some-google-bacfd",
stats: {
    "name": "Get some google news Redirect 1",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1259",
        "ok": "1259",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3171",
        "ok": "3171",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "665",
        "ok": "665",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1716",
        "ok": "1716",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2059",
        "ok": "2059",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2948",
        "ok": "2948",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3126",
        "ok": "3126",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "1.25",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
