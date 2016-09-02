window.Asc.plugin = {
    "name" : "Yandex Translate",
    "guid" : "asc.{7327FC95-16DA-41D9-9AF2-0E7F449F687D}",

    "variations" : [
        {
            "description" : "translate",
            "url"         : "translate/index.html",

            "icons"           : ["translate/icon.png", "translate/icon@2x.png"],
            "isViewer"        : true,
            "EditorsSupport"  : ["word", "cell", "slide"],

            "isVisual"        : true,
            "isModal"         : true,
            "isInsideMode"    : false,

            "initDataType"    : "text",
            "initData"        : "",

            "isUpdateOleOnResize" : false,

            "buttons"        : [ ],

            "initOnSelectionChanged" : true
        }
    ]
};