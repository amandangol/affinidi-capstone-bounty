"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/country-list";
exports.ids = ["vendor-chunks/country-list"];
exports.modules = {

/***/ "(ssr)/./node_modules/country-list/country-list.js":
/*!***************************************************!*\
  !*** ./node_modules/country-list/country-list.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar data = __webpack_require__(/*! ./data.json */ \"(ssr)/./node_modules/country-list/data.json\");\n/** Precompute name and code lookups. */ var nameMap = {};\nvar codeMap = {};\ndata.forEach(mapCodeAndName);\nfunction mapCodeAndName(country) {\n    nameMap[country.name.toLowerCase()] = country.code;\n    codeMap[country.code.toLowerCase()] = country.name;\n}\nexports.overwrite = function overwrite(countries) {\n    if (!countries || !countries.length) return;\n    countries.forEach(function(country) {\n        var foundIndex = data.findIndex(function(item) {\n            return item.code === country.code;\n        });\n        data[foundIndex] = country;\n        mapCodeAndName(country);\n    });\n};\nexports.getCode = function getCode(name) {\n    return nameMap[name.toLowerCase()];\n};\nexports.getName = function getName(code) {\n    return codeMap[code.toLowerCase()];\n};\nexports.getNames = function getNames() {\n    return data.map(function(country) {\n        return country.name;\n    });\n};\nexports.getCodes = function getCodes() {\n    return data.map(function(country) {\n        return country.code;\n    });\n};\nexports.getCodeList = function getCodeList() {\n    return codeMap;\n};\nexports.getNameList = function getNameList() {\n    return nameMap;\n};\nexports.getData = function getData() {\n    return data;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLE9BQU9DLG1CQUFPQSxDQUFDO0FBRW5CLHNDQUFzQyxHQUN0QyxJQUFJQyxVQUFVLENBQUM7QUFDZixJQUFJQyxVQUFVLENBQUM7QUFDZkgsS0FBS0ksT0FBTyxDQUFDQztBQUViLFNBQVNBLGVBQWdCQyxPQUFPO0lBQzlCSixPQUFPLENBQUNJLFFBQVFDLElBQUksQ0FBQ0MsV0FBVyxHQUFHLEdBQUdGLFFBQVFHLElBQUk7SUFDbEROLE9BQU8sQ0FBQ0csUUFBUUcsSUFBSSxDQUFDRCxXQUFXLEdBQUcsR0FBR0YsUUFBUUMsSUFBSTtBQUNwRDtBQUVBRyxpQkFBaUIsR0FBRyxTQUFTQyxVQUFXQyxTQUFTO0lBQy9DLElBQUksQ0FBQ0EsYUFBYSxDQUFDQSxVQUFVQyxNQUFNLEVBQUU7SUFDckNELFVBQVVSLE9BQU8sQ0FBQyxTQUFVRSxPQUFPO1FBQ2pDLElBQUlRLGFBQWFkLEtBQUtlLFNBQVMsQ0FBQyxTQUFVQyxJQUFJO1lBQzVDLE9BQU9BLEtBQUtQLElBQUksS0FBS0gsUUFBUUcsSUFBSTtRQUNuQztRQUNBVCxJQUFJLENBQUNjLFdBQVcsR0FBR1I7UUFDbkJELGVBQWVDO0lBQ2pCO0FBQ0Y7QUFFQUksZUFBZSxHQUFHLFNBQVNPLFFBQVNWLElBQUk7SUFDdEMsT0FBT0wsT0FBTyxDQUFDSyxLQUFLQyxXQUFXLEdBQUc7QUFDcEM7QUFFQUUsZUFBZSxHQUFHLFNBQVNRLFFBQVNULElBQUk7SUFDdEMsT0FBT04sT0FBTyxDQUFDTSxLQUFLRCxXQUFXLEdBQUc7QUFDcEM7QUFFQUUsZ0JBQWdCLEdBQUcsU0FBU1M7SUFDMUIsT0FBT25CLEtBQUtvQixHQUFHLENBQUMsU0FBVWQsT0FBTztRQUMvQixPQUFPQSxRQUFRQyxJQUFJO0lBQ3JCO0FBQ0Y7QUFFQUcsZ0JBQWdCLEdBQUcsU0FBU1c7SUFDMUIsT0FBT3JCLEtBQUtvQixHQUFHLENBQUMsU0FBVWQsT0FBTztRQUMvQixPQUFPQSxRQUFRRyxJQUFJO0lBQ3JCO0FBQ0Y7QUFFQUMsbUJBQW1CLEdBQUcsU0FBU1k7SUFDN0IsT0FBT25CO0FBQ1Q7QUFFQU8sbUJBQW1CLEdBQUcsU0FBU2E7SUFDN0IsT0FBT3JCO0FBQ1Q7QUFFQVEsZUFBZSxHQUFHLFNBQVNjO0lBQ3pCLE9BQU94QjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0LmpzPzIyODEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciBkYXRhID0gcmVxdWlyZSgnLi9kYXRhLmpzb24nKVxuXG4vKiogUHJlY29tcHV0ZSBuYW1lIGFuZCBjb2RlIGxvb2t1cHMuICovXG52YXIgbmFtZU1hcCA9IHt9XG52YXIgY29kZU1hcCA9IHt9XG5kYXRhLmZvckVhY2gobWFwQ29kZUFuZE5hbWUpXG5cbmZ1bmN0aW9uIG1hcENvZGVBbmROYW1lIChjb3VudHJ5KSB7XG4gIG5hbWVNYXBbY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCldID0gY291bnRyeS5jb2RlXG4gIGNvZGVNYXBbY291bnRyeS5jb2RlLnRvTG93ZXJDYXNlKCldID0gY291bnRyeS5uYW1lXG59XG5cbmV4cG9ydHMub3ZlcndyaXRlID0gZnVuY3Rpb24gb3ZlcndyaXRlIChjb3VudHJpZXMpIHtcbiAgaWYgKCFjb3VudHJpZXMgfHwgIWNvdW50cmllcy5sZW5ndGgpIHJldHVyblxuICBjb3VudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoY291bnRyeSkge1xuICAgIHZhciBmb3VuZEluZGV4ID0gZGF0YS5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmNvZGUgPT09IGNvdW50cnkuY29kZVxuICAgIH0pXG4gICAgZGF0YVtmb3VuZEluZGV4XSA9IGNvdW50cnlcbiAgICBtYXBDb2RlQW5kTmFtZShjb3VudHJ5KVxuICB9KVxufVxuXG5leHBvcnRzLmdldENvZGUgPSBmdW5jdGlvbiBnZXRDb2RlIChuYW1lKSB7XG4gIHJldHVybiBuYW1lTWFwW25hbWUudG9Mb3dlckNhc2UoKV1cbn1cblxuZXhwb3J0cy5nZXROYW1lID0gZnVuY3Rpb24gZ2V0TmFtZSAoY29kZSkge1xuICByZXR1cm4gY29kZU1hcFtjb2RlLnRvTG93ZXJDYXNlKCldXG59XG5cbmV4cG9ydHMuZ2V0TmFtZXMgPSBmdW5jdGlvbiBnZXROYW1lcyAoKSB7XG4gIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoY291bnRyeSkge1xuICAgIHJldHVybiBjb3VudHJ5Lm5hbWVcbiAgfSlcbn1cblxuZXhwb3J0cy5nZXRDb2RlcyA9IGZ1bmN0aW9uIGdldENvZGVzICgpIHtcbiAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChjb3VudHJ5KSB7XG4gICAgcmV0dXJuIGNvdW50cnkuY29kZVxuICB9KVxufVxuXG5leHBvcnRzLmdldENvZGVMaXN0ID0gZnVuY3Rpb24gZ2V0Q29kZUxpc3QgKCkge1xuICByZXR1cm4gY29kZU1hcFxufVxuXG5leHBvcnRzLmdldE5hbWVMaXN0ID0gZnVuY3Rpb24gZ2V0TmFtZUxpc3QgKCkge1xuICByZXR1cm4gbmFtZU1hcFxufVxuXG5leHBvcnRzLmdldERhdGEgPSBmdW5jdGlvbiBnZXREYXRhICgpIHtcbiAgcmV0dXJuIGRhdGFcbn1cbiJdLCJuYW1lcyI6WyJkYXRhIiwicmVxdWlyZSIsIm5hbWVNYXAiLCJjb2RlTWFwIiwiZm9yRWFjaCIsIm1hcENvZGVBbmROYW1lIiwiY291bnRyeSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImNvZGUiLCJleHBvcnRzIiwib3ZlcndyaXRlIiwiY291bnRyaWVzIiwibGVuZ3RoIiwiZm91bmRJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJnZXRDb2RlIiwiZ2V0TmFtZSIsImdldE5hbWVzIiwibWFwIiwiZ2V0Q29kZXMiLCJnZXRDb2RlTGlzdCIsImdldE5hbWVMaXN0IiwiZ2V0RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/country-list/country-list.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/country-list/data.json":
/*!*********************************************!*\
  !*** ./node_modules/country-list/data.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"code":"AD","name":"Andorra"},{"code":"AE","name":"United Arab Emirates"},{"code":"AF","name":"Afghanistan"},{"code":"AG","name":"Antigua and Barbuda"},{"code":"AI","name":"Anguilla"},{"code":"AL","name":"Albania"},{"code":"AM","name":"Armenia"},{"code":"AO","name":"Angola"},{"code":"AQ","name":"Antarctica"},{"code":"AR","name":"Argentina"},{"code":"AS","name":"American Samoa"},{"code":"AT","name":"Austria"},{"code":"AU","name":"Australia"},{"code":"AW","name":"Aruba"},{"code":"AX","name":"Åland Islands"},{"code":"AZ","name":"Azerbaijan"},{"code":"BA","name":"Bosnia and Herzegovina"},{"code":"BB","name":"Barbados"},{"code":"BD","name":"Bangladesh"},{"code":"BE","name":"Belgium"},{"code":"BF","name":"Burkina Faso"},{"code":"BG","name":"Bulgaria"},{"code":"BH","name":"Bahrain"},{"code":"BI","name":"Burundi"},{"code":"BJ","name":"Benin"},{"code":"BL","name":"Saint Barthélemy"},{"code":"BM","name":"Bermuda"},{"code":"BN","name":"Brunei Darussalam"},{"code":"BO","name":"Bolivia, Plurinational State of"},{"code":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BR","name":"Brazil"},{"code":"BS","name":"Bahamas"},{"code":"BT","name":"Bhutan"},{"code":"BV","name":"Bouvet Island"},{"code":"BW","name":"Botswana"},{"code":"BY","name":"Belarus"},{"code":"BZ","name":"Belize"},{"code":"CA","name":"Canada"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CD","name":"Congo, Democratic Republic of the"},{"code":"CF","name":"Central African Republic"},{"code":"CG","name":"Congo"},{"code":"CH","name":"Switzerland"},{"code":"CI","name":"Côte d\'Ivoire"},{"code":"CK","name":"Cook Islands"},{"code":"CL","name":"Chile"},{"code":"CM","name":"Cameroon"},{"code":"CN","name":"China"},{"code":"CO","name":"Colombia"},{"code":"CR","name":"Costa Rica"},{"code":"CU","name":"Cuba"},{"code":"CV","name":"Cabo Verde"},{"code":"CW","name":"Curaçao"},{"code":"CX","name":"Christmas Island"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czechia"},{"code":"DE","name":"Germany"},{"code":"DJ","name":"Djibouti"},{"code":"DK","name":"Denmark"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"DZ","name":"Algeria"},{"code":"EC","name":"Ecuador"},{"code":"EE","name":"Estonia"},{"code":"EG","name":"Egypt"},{"code":"EH","name":"Western Sahara"},{"code":"ER","name":"Eritrea"},{"code":"ES","name":"Spain"},{"code":"ET","name":"Ethiopia"},{"code":"FI","name":"Finland"},{"code":"FJ","name":"Fiji"},{"code":"FK","name":"Falkland Islands (Malvinas)"},{"code":"FM","name":"Micronesia, Federated States of"},{"code":"FO","name":"Faroe Islands"},{"code":"FR","name":"France"},{"code":"GA","name":"Gabon"},{"code":"GB","name":"United Kingdom of Great Britain and Northern Ireland"},{"code":"GD","name":"Grenada"},{"code":"GE","name":"Georgia"},{"code":"GF","name":"French Guiana"},{"code":"GG","name":"Guernsey"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GL","name":"Greenland"},{"code":"GM","name":"Gambia"},{"code":"GN","name":"Guinea"},{"code":"GP","name":"Guadeloupe"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"GR","name":"Greece"},{"code":"GS","name":"South Georgia and the South Sandwich Islands"},{"code":"GT","name":"Guatemala"},{"code":"GU","name":"Guam"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HK","name":"Hong Kong"},{"code":"HM","name":"Heard Island and McDonald Islands"},{"code":"HN","name":"Honduras"},{"code":"HR","name":"Croatia"},{"code":"HT","name":"Haiti"},{"code":"HU","name":"Hungary"},{"code":"ID","name":"Indonesia"},{"code":"IE","name":"Ireland"},{"code":"IL","name":"Israel"},{"code":"IM","name":"Isle of Man"},{"code":"IN","name":"India"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"IQ","name":"Iraq"},{"code":"IR","name":"Iran, Islamic Republic of"},{"code":"IS","name":"Iceland"},{"code":"IT","name":"Italy"},{"code":"JE","name":"Jersey"},{"code":"JM","name":"Jamaica"},{"code":"JO","name":"Jordan"},{"code":"JP","name":"Japan"},{"code":"KE","name":"Kenya"},{"code":"KG","name":"Kyrgyzstan"},{"code":"KH","name":"Cambodia"},{"code":"KI","name":"Kiribati"},{"code":"KM","name":"Comoros"},{"code":"KN","name":"Saint Kitts and Nevis"},{"code":"KP","name":"Korea, Democratic People\'s Republic of"},{"code":"KR","name":"Korea, Republic of"},{"code":"KW","name":"Kuwait"},{"code":"KY","name":"Cayman Islands"},{"code":"KZ","name":"Kazakhstan"},{"code":"LA","name":"Lao People\'s Democratic Republic"},{"code":"LB","name":"Lebanon"},{"code":"LC","name":"Saint Lucia"},{"code":"LI","name":"Liechtenstein"},{"code":"LK","name":"Sri Lanka"},{"code":"LR","name":"Liberia"},{"code":"LS","name":"Lesotho"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"LV","name":"Latvia"},{"code":"LY","name":"Libya"},{"code":"MA","name":"Morocco"},{"code":"MC","name":"Monaco"},{"code":"MD","name":"Moldova, Republic of"},{"code":"ME","name":"Montenegro"},{"code":"MF","name":"Saint Martin, (French part)"},{"code":"MG","name":"Madagascar"},{"code":"MH","name":"Marshall Islands"},{"code":"MK","name":"North Macedonia"},{"code":"ML","name":"Mali"},{"code":"MM","name":"Myanmar"},{"code":"MN","name":"Mongolia"},{"code":"MO","name":"Macao"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MS","name":"Montserrat"},{"code":"MT","name":"Malta"},{"code":"MU","name":"Mauritius"},{"code":"MV","name":"Maldives"},{"code":"MW","name":"Malawi"},{"code":"MX","name":"Mexico"},{"code":"MY","name":"Malaysia"},{"code":"MZ","name":"Mozambique"},{"code":"NA","name":"Namibia"},{"code":"NC","name":"New Caledonia"},{"code":"NE","name":"Niger"},{"code":"NF","name":"Norfolk Island"},{"code":"NG","name":"Nigeria"},{"code":"NI","name":"Nicaragua"},{"code":"NL","name":"Netherlands"},{"code":"NO","name":"Norway"},{"code":"NP","name":"Nepal"},{"code":"NR","name":"Nauru"},{"code":"NU","name":"Niue"},{"code":"NZ","name":"New Zealand"},{"code":"OM","name":"Oman"},{"code":"PA","name":"Panama"},{"code":"PE","name":"Peru"},{"code":"PF","name":"French Polynesia"},{"code":"PG","name":"Papua New Guinea"},{"code":"PH","name":"Philippines"},{"code":"PK","name":"Pakistan"},{"code":"PL","name":"Poland"},{"code":"PM","name":"Saint Pierre and Miquelon"},{"code":"PN","name":"Pitcairn"},{"code":"PR","name":"Puerto Rico"},{"code":"PS","name":"Palestine, State of"},{"code":"PT","name":"Portugal"},{"code":"PW","name":"Palau"},{"code":"PY","name":"Paraguay"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RS","name":"Serbia"},{"code":"RU","name":"Russian Federation"},{"code":"RW","name":"Rwanda"},{"code":"SA","name":"Saudi Arabia"},{"code":"SB","name":"Solomon Islands"},{"code":"SC","name":"Seychelles"},{"code":"SD","name":"Sudan"},{"code":"SE","name":"Sweden"},{"code":"SG","name":"Singapore"},{"code":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"SI","name":"Slovenia"},{"code":"SJ","name":"Svalbard and Jan Mayen"},{"code":"SK","name":"Slovakia"},{"code":"SL","name":"Sierra Leone"},{"code":"SM","name":"San Marino"},{"code":"SN","name":"Senegal"},{"code":"SO","name":"Somalia"},{"code":"SR","name":"Suriname"},{"code":"SS","name":"South Sudan"},{"code":"ST","name":"Sao Tome and Principe"},{"code":"SV","name":"El Salvador"},{"code":"SX","name":"Sint Maarten, (Dutch part)"},{"code":"SY","name":"Syrian Arab Republic"},{"code":"SZ","name":"Eswatini"},{"code":"TC","name":"Turks and Caicos Islands"},{"code":"TD","name":"Chad"},{"code":"TF","name":"French Southern Territories"},{"code":"TG","name":"Togo"},{"code":"TH","name":"Thailand"},{"code":"TJ","name":"Tajikistan"},{"code":"TK","name":"Tokelau"},{"code":"TL","name":"Timor-Leste"},{"code":"TM","name":"Turkmenistan"},{"code":"TN","name":"Tunisia"},{"code":"TO","name":"Tonga"},{"code":"TR","name":"Türkiye"},{"code":"TT","name":"Trinidad and Tobago"},{"code":"TV","name":"Tuvalu"},{"code":"TW","name":"Taiwan, Province of China"},{"code":"TZ","name":"Tanzania, United Republic of"},{"code":"UA","name":"Ukraine"},{"code":"UG","name":"Uganda"},{"code":"UM","name":"United States Minor Outlying Islands"},{"code":"US","name":"United States of America"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VA","name":"Holy See"},{"code":"VC","name":"Saint Vincent and the Grenadines"},{"code":"VE","name":"Venezuela, Bolivarian Republic of"},{"code":"VG","name":"Virgin Islands, British"},{"code":"VI","name":"Virgin Islands, U.S."},{"code":"VN","name":"Viet Nam"},{"code":"VU","name":"Vanuatu"},{"code":"WF","name":"Wallis and Futuna"},{"code":"WS","name":"Samoa"},{"code":"YE","name":"Yemen"},{"code":"YT","name":"Mayotte"},{"code":"ZA","name":"South Africa"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}]');

/***/ })

};
;