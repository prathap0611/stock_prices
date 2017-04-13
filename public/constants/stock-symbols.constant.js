angular.module("stockPriceApp")
.constant("stockSymbolConstant", {
    "symbols": [
        {"symbol":'20MICRONS', "name":'20 Microns', "lastPrice": 10},
        {"symbol":'3MINDIA', "name":'3M India', "lastPrice": 15},
        {"symbol":'ABB',"name":'A B B', "lastPrice": 15},
        {"symbol":'APOLLOTYRE',"name":'Apollo Tyres', "lastPrice": 32},
        {"symbol":'A',"name":'Agilent Technologies', "lastPrice": 12},
        {"symbol":'P',"name":'Pandora Medic Inc', "lastPrice": 10},
        {"symbol":'LDL',"name":'Lydall Inc', "lastPrice": 13},
        {"symbol":'NAV',"name":'Navistar International Corp', "lastPrice": 11},
        {"symbol":'QUAD',"name":'Quad Graphics Inc', "lastPrice": 80},
        {"symbol":'AAPL',"name":'Apple Inc', "lastPrice": 74},
        {"symbol":'GNCMA',"name":'Gen Communications', "lastPrice": 26},
        {"symbol":'OCC',"name":'Optical Cable Corp', "lastPrice": 45},
        {"symbol":'MAT',"name":'Mattel Inc', "lastPrice": 21},
        {"symbol":'KELYA',"name":'Kelly Svcs Cl A', "lastPrice": 12},
        {"symbol":'HBCP',"name":'Home Bancorp Inc', "lastPrice": 25},
        {"symbol":'ZN',"name":'Zion Oil & Gas Inc', "lastPrice": 46},
        {"symbol":'USAK',"name":'U S A Truck Inc', "lastPrice": 98},
        {"symbol":'IART',"name":'Integra Lifesciences', "lastPrice": 26},
        {"symbol":'QCOM',"name":'Qualcomm Inc', "lastPrice": 78},
        {"symbol":'UNIS',"name":'Unilife Corporation', "lastPrice": 56},
        {"symbol":'CBMG',"name":'Cellular Biomedicine', "lastPrice": 15},
        {"symbol":'GULF',"name":'Wisdomtree', "lastPrice": 66},
        {"symbol":'KBAL',"name":'Kimball Intl Cl B', "lastPrice": 12},
        {"symbol":'LGIH',"name":'LGI Homes Inc', "lastPrice": 32},
        {"symbol":'DLTR',"name":'Dollar Tree Inc', "lastPrice": 78}
    ],
    "maxEntriesPerpage": 5,
    "refreshTime": 10000
});