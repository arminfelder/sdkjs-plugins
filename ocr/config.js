window.Asc.plugin = {
    "name" : "OCR",
    "guid" : "asc.{440EBF13-9B19-4BD8-8621-05200E58140B}",
    "baseUrl" : "",

    "variations" : [
        {
            "description" : "ocr",
            "url"         : "ocr/index.html",

            "icons"           : ["ocr/icon.png", "ocr/icon@2x.png"],
            "isViewer"        : false,
            "EditorsSupport"  : ["word"],

            "isVisual"        : true,
            "isModal"         : true,
            "isInsideMode"    : false,

            "initDataType"    : "none",
            "initData"        : "",

            "isUpdateOleOnResize" : false,

            "buttons"         : [ { "text": "Insert Text", "primary": true},
                { "text": "Cancel", "primary": false } ],

            "size" : [592, 100]
        },
        {
            "description" : "About",
            "url"         : "ocr/index_about.html",

            "icons"           : ["ocr/icon.png", "ocr/icon@2x.png"],
            "isViewer"        : false,
            "EditorsSupport"  : ["word"],

            "isVisual"        : true,
            "isModal"         : true,
            "isInsideMode"    : false,

            "initDataType"    : "none",
            "initData"        : "",

            "isUpdateOleOnResize" : false,

            "buttons"         : [
                {
                    "text": "Ok",
                    "primary": true
                }
            ],

            "size" : [392, 147]
        }
    ]
};
 