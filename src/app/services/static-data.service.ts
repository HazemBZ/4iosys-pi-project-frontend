import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  public countryToPosition = {
    "Afghanistan": { 	latitude:33.0, 	longitude:65.0 },
    "Albania": { 	latitude:41.0, 	longitude:20.0 },
    "Algeria": { 	latitude:28.0, 	longitude:3.0 },
    "American Samoa": { latitude: -14.3333 ,longitude: 	 	-170.0},
    "Andorra": { 	latitude:42.5, 	longitude:1.5 },
    "Angola": { 	latitude:-12.5, 	longitude:18.5 },
    "Anguilla": { 	latitude:18.25, 	longitude:-63.1667 },
    "Antarctica": { 	latitude:-90.0, 	longitude:0.0 },
    "Armenia": { 	latitude:40.0, 	longitude:45.0 },
    "Austria": { 	latitude:47.3333, 	longitude:13.3333 },
    "Azerbaijan": { 	latitude:40.5, 	longitude:47.5 },
    "Bahrain": { 	latitude:26.0, 	longitude:50.55 },
    "Bangladesh": { 	latitude:24.0, 	longitude:90.0 },
    "Belarus": { 	latitude:53.0, 	longitude:28.0 },
    "Belgium": { 	latitude:50.8333, 	longitude:4.0 },
    "Benin": { 	latitude:9.5, 	longitude:2.25 },
    "Bhutan": { 	latitude:27.5, 	longitude:90.5 },
    "Tunisia": {	latitude:34.0, 	longitude:9.0},
    "United Kingdom": {	latitude:54.0, 	longitude:-2.0}
  }

  public codeToCountry = {
"AD":"Andorra ",
"AE":"United Arab Emirates ",
"AF":"Afghanistan 	 	",
"AG":"Antigua and Barbuda ",
"AI":"Anguilla 	",
"AL":"Albania ",
"AM":"Armenia ",
"AO":"Angola 	",
"AQ":"Antarctica",
"AR":"Argentina 	",
"AS":"American Samoa 	",
"AT":"Austria 	",
"AU":"Australia ",
"AW":"Aruba 	",
"AX":"Åland Islands",
"AZ":"Azerbaijan 	",
"BA":"Bosnia and Herzegovina 	",
"BB":"Barbados 	1974 	",
"BD":"Bangladesh 	1974 	",
"BE":"Belgium 	1974 	",
"BF":"Burkina Faso 	",
"BG":"Bulgaria 	1974",
"BH":"Bahrain 	1974",
"BI":"Burundi 	1974",
"BJ":"Benin 	1977 	",
"BL":"Saint Barthélemy",
"BM":"Bermuda 	1974 	",
"BN":"Brunei Darussalam",
"BO":"Bolivia ",
"BQ":"Bonaire, Sint Eustatius and Saba ",
"BR": 	"Brazil 	",
"BS": 	"Bahamas ",
"BT": 	"Bhutan 	",
"BV": 	"Bouvet Island",
"BW": 	"Botswana 	",
"BY": 	"Belarus 	",
"BZ": 	"Belize 	",
"CA": 	"Canada 	",
"CC": 	"Cocos  Islands",
"CD": 	"Congo, Democratic ",
"CF": 	"Central African Republic 	",
"CG": 	"Congo 	",
"CH": 	"Switzerland",
"CI": 	"Côte d'Ivoire",
"CK": 	"Cook Islands 	",
"CL": 	"Chile 	",
"CM": 	"Cameroon",
"CN": 	"China 	",
"CO": 	"Colombia",
"CR": 	"Costa Rica",
"CU": 	"Cuba 	",
"CV": 	"Cabo Verde",
"CW": 	"Curaçao 	",
"CX": 	"Christmas Island 	",
"CY": 	"Cyprus ",
"CZ": 	"Czechia",
"DE": 	"Germany",
"DJ": 	"Djibouti 	",
"DK": 	"Denmark 	",
"DM": 	"Dominica 	",
"DO": 	"Dominican Republic ",
"DZ": 	"Algeria 	",
"EC": 	"Ecuador 	",
"EE": 	"Estonia 	",
"EG": 	"Egypt 	",
"EH": 	"Western Sahara 	",
"ER": 	"Eritrea ",
"ES": 	"Spain 	",
"ET": 	"Ethiopia",
"FI": 	"Finland ",
"FJ": 	"Fiji 	",
"FK": 	"Falkland Islands",
"FM": 	"Micronesia ",
"FO": 	"Faroe Islands",
"FR": 	"France 	",
"GA": 	"Gabon 	",
"GB": 	"United Kingdom of Great Britain and Northern Ireland",
"GD": 	"Grenada 	",
"GE": 	"Georgia 	",
"GF": 	"French Guiana",
"GG": 	"Guernsey",
"GH": 	"Ghana 	",
"GI": 	"Gibraltar",
"GL": 	"Greenland",
"GM": 	"Gambia 	",
"GN": 	"Guinea 	",
"GP": 	"Guadeloupe ",
"GQ": 	"Equatorial Guinea",
"GR": 	"Greece 	",
"GS": 	"South Georgia and the South Sandwich Islands",
"GT": 	"Guatemala",
"GU": 	"Guam 	",
"GW": 	"Guinea-Bissau",
"GY": 	"Guyana 	",
"HK": 	"Hong Kong 	",
"HM": 	"Heard Island and McDonald Islands",
"HN": 	"Honduras",
"HR": 	"Croatia ",
"HT": 	"Haiti 	",
"HU": 	"Hungary ",
"ID": 	"Indonesia",
"IE": 	"Ireland ",
"IL": 	"Israel 	",
"IM": 	"Isle of Man 	",
"IN": 	"India 	",
"IO": 	"British Indian Ocean Territory",
"IQ": 	"Iraq 	",
"IR": 	"Iran ",
"IS": 	"Iceland",
"IT": 	"Italy ",
"JE": 	"Jersey ",
"JM": 	"Jamaica",
"JO": 	"Jordan ",
"JP": 	"Japan ",
"KE": 	"Kenya ",
"KG": 	"Kyrgyzstan",
"KH": 	"Cambodia 	",
"KI": 	"Kiribati ",
"KM": 	"Comoros ",
"KN": 	"Saint Kitts and Nevis",
"KP": 	"North Korea",
"KR": 	"South Korea",
"KW": 	"Kuwait",
"KY": 	"Cayman Islands",
"KZ": 	"Kazakhstan 	",
"LA": 	"Lao People's Democratic Republic",
"LB": 	"Lebanon",
"LC": 	"Saint Lucia",
"LI": 	"Liechtenstein",
"LK": 	"Sri Lanka",
"LR": 	"Liberia ",
"LS": 	"Lesotho ",
"LT": 	"Lithuania",
"LU": 	"Luxembourg 	",
"LV": 	"latitudevia 	",
"LY": 	"Libya 	",
"MA": 	"Morocco ",
"MC": 	"Monaco 	",
"MD": 	"Moldova",
"ME": 	"Montenegro 	",
"MF": 	"Saint Martin",
"MG": 	"Madagascar 	",
"MH": 	"Marshall Islands",
"MK": 	"North Macedonia ",
"ML": 	"Mali 	",
"MM": 	"Myanmar ",
"MN": 	"Mongolia",
"MO": 	"Macao 	",
"MP": 	"Northern Mariana Islands 	",
"MQ": 	"Martinique 	",
"MR": 	"Mauritania 	",
"MS": 	"Montserrat 	",
"MT": 	"Malta 	",
"MU": 	"Mauritius",
"MV": 	"Maldives ",
"MW": 	"Malawi ",
"MX": 	"Mexico ",

"TN": "Tunisia"  }
/*MY 	Malaysia 	1974 	.my 	ISO 3166-2:MY
MZ 	Mozambique 	1974 	.mz 	ISO 3166-2:MZ
NA 	Namibia 	1974 	.na 	ISO 3166-2:NA
NC 	New Caledonia 	1974 	.nc 	ISO 3166-2:NC
NE 	Niger 	1974 	.ne 	ISO 3166-2:NE
NF 	Norfolk Island 	1974 	.nf 	ISO 3166-2:NF
NG 	Nigeria 	1974 	.ng 	ISO 3166-2:NG
NI 	Nicaragua 	1974 	.ni 	ISO 3166-2:NI
NL 	Netherlands 	1974 	.nl 	ISO 3166-2:NL 	Officially includes the islands Bonaire, Saint Eustatius and Saba, which also have code BQ in ISO 3166-1. Within ISO 3166-2, Aruba (AW), Curaçao (CW), and Sint Maarten (SX) are also coded as subdivisions of NL.[18]
NO 	Norway 	1974 	.no 	ISO 3166-2:NO
NP 	Nepal 	1974 	.np 	ISO 3166-2:NP
NR 	Nauru 	1974 	.nr 	ISO 3166-2:NR
NU 	Niue 	1974 	.nu 	ISO 3166-2:NU 	Previous ISO country name: Niue Island
NZ 	New Zealand 	1974 	.nz 	ISO 3166-2:NZ
OM 	Oman 	1974 	.om 	ISO 3166-2:OM
PA 	Panama 	1974 	.pa 	ISO 3166-2:PA
PE 	Peru 	1974 	.pe 	ISO 3166-2:PE
PF 	French Polynesia 	1974 	.pf 	ISO 3166-2:PF 	Code taken from name in French: Polynésie française
PG 	Papua New Guinea 	1974 	.pg 	ISO 3166-2:PG
PH 	Philippines 	1974 	.ph 	ISO 3166-2:PH
PK 	Pakistan 	1974 	.pk 	ISO 3166-2:PK
PL 	Poland 	1974 	.pl 	ISO 3166-2:PL
PM 	Saint Pierre and Miquelon 	1974 	.pm 	ISO 3166-2:PM
PN 	Pitcairn 	1974 	.pn 	ISO 3166-2:PN 	Previous ISO country name: Pitcairn Islands
PR 	Puerto Rico 	1974 	.pr 	ISO 3166-2:PR
PS 	Palestine, State of 	1999 	.ps 	ISO 3166-2:PS 	Previous ISO country name: Palestinian Territory, Occupied
Consists of the West Bank and the Gaza Strip
PT 	Portugal 	1974 	.pt 	ISO 3166-2:PT
PW 	Palau 	1986 	.pw 	ISO 3166-2:PW
PY 	Paraguay 	1974 	.py 	ISO 3166-2:PY
QA 	Qatar 	1974 	.qa 	ISO 3166-2:QA
RE 	Réunion 	1974 	.re 	ISO 3166-2:RE
RO 	Romania 	1974 	.ro 	ISO 3166-2:RO
RS 	Serbia 	2006 	.rs 	ISO 3166-2:RS 	Republic of Serbia
RU 	Russian Federation 	1992 	.ru 	ISO 3166-2:RU 	ISO country name follows UN designation (common name: Russia)
RW 	Rwanda 	1974 	.rw 	ISO 3166-2:RW
SA 	Saudi Arabia 	1974 	.sa 	ISO 3166-2:SA
SB 	Solomon Islands 	1974 	.sb 	ISO 3166-2:SB 	Code taken from former name: British Solomon Islands
SC 	Seychelles 	1974 	.sc 	ISO 3166-2:SC
SD 	Sudan 	1974 	.sd 	ISO 3166-2:SD
SE 	Sweden 	1974 	.se 	ISO 3166-2:SE
SG 	Singapore 	1974 	.sg 	ISO 3166-2:SG
SH 	Saint Helena, Ascension and Tristan da Cunha 	1974 	.sh 	ISO 3166-2:SH 	Previous ISO country name: Saint Helena
SI 	Slovenia 	1992 	.si 	ISO 3166-2:SI
SJ 	Svalbard and Jan Mayen 	1974 	.sj 	ISO 3166-2:SJ 	Previous ISO name: Svalbard and Jan Mayen Islands
Consists of two arctic territories of Norway: Svalbard and Jan Mayen
SK 	Slovakia 	1993 	.sk 	ISO 3166-2:SK 	SK previously represented Sikkim
SL 	Sierra Leone 	1974 	.sl 	ISO 3166-2:SL
SM 	San Marino 	1974 	.sm 	ISO 3166-2:SM
SN 	Senegal 	1974 	.sn 	ISO 3166-2:SN
SO 	Somalia 	1974 	.so 	ISO 3166-2:SO
SR 	Suriname 	1974 	.sr 	ISO 3166-2:SR 	Previous ISO country name: Surinam
SS 	South Sudan 	2011 	.ss 	ISO 3166-2:SS
ST 	Sao Tome and Principe 	1974 	.st 	ISO 3166-2:ST
SV 	El Salvador 	1974 	.sv 	ISO 3166-2:SV
SX 	Sint Maarten (Dutch part) 	2010 	.sx 	ISO 3166-2:SX 	The French part of Saint Martin island is assigned code MF
SY 	Syrian Arab Republic 	1974 	.sy 	ISO 3166-2:SY 	ISO country name follows UN designation (common name and previous ISO country name: Syria)
SZ 	Eswatini 	1974 	.sz 	ISO 3166-2:SZ 	Previous ISO country name: Swaziland
TC 	Turks and Caicos Islands 	1974 	.tc 	ISO 3166-2:TC
TD 	Chad 	1974 	.td 	ISO 3166-2:TD 	Code taken from name in French: Tchad
TF 	French Southern Territories 	1979 	.tf 	ISO 3166-2:TF 	Covers the French Southern and Antarctic Lands except Adélie Land
Code taken from name in French: Terres australes françaises
TG 	Togo 	1974 	.tg 	ISO 3166-2:TG
TH 	Thailand 	1974 	.th 	ISO 3166-2:TH
TJ 	Tajikistan 	1992 	.tj 	ISO 3166-2:TJ
TK 	Tokelau 	1974 	.tk 	ISO 3166-2:TK 	Previous ISO country name: Tokelau Islands
TL 	Timor-Leste 	2002 	.tl 	ISO 3166-2:TL 	Name changed from East Timor (TP)
TM 	Turkmenistan 	1992 	.tm 	ISO 3166-2:TM
TN 	Tunisia 	1974 	.tn 	ISO 3166-2:TN
TO 	Tonga 	1974 	.to 	ISO 3166-2:TO
TR 	Turkey 	1974 	.tr 	ISO 3166-2:TR
TT 	Trinidad and Tobago 	1974 	.tt 	ISO 3166-2:TT
TV 	Tuvalu 	1977 	.tv 	ISO 3166-2:TV
TW 	Taiwan, Province of China 	1974 	.tw 	ISO 3166-2:TW 	Covers the current jurisdiction of the Republic of China
ISO country name follows UN designation (due to political status of Taiwan within the UN)[17] (common name: Taiwan)
TZ 	Tanzania, United Republic of 	1974 	.tz 	ISO 3166-2:TZ
UA 	Ukraine 	1974 	.ua 	ISO 3166-2:UA 	Previous ISO country name: Ukrainian SSR
Code assigned as the country was already a UN member since 1945[14]
UG 	Uganda 	1974 	.ug 	ISO 3166-2:UG
UM 	United States Minor Outlying Islands 	1986 		ISO 3166-2:UM 	Consists of nine minor insular areas of the United States: Baker Island, Howland Island, Jarvis Island, Johnston Atoll, Kingman Reef, Midway Islands, Navassa Island, Palmyra Atoll, and Wake Island
.um ccTLD was revoked in 2007[19]
US 	United States of America 	1974 	.us 	ISO 3166-2:US 	Previous ISO country name: United States
UY 	Uruguay 	1974 	.uy 	ISO 3166-2:UY
UZ 	Uzbekistan 	1992 	.uz 	ISO 3166-2:UZ
VA 	Holy See 	1974 	.va 	ISO 3166-2:VA 	Covers Vatican City, territory of the Holy See
Previous ISO country names: Vatican City State (Holy See) and Holy See (Vatican City State)
VC 	Saint Vincent and the Grenadines 	1974 	.vc 	ISO 3166-2:VC
VE 	Venezuela (Bolivarian Republic of) 	1974 	.ve 	ISO 3166-2:VE 	Previous ISO country name: Venezuela
VG 	Virgin Islands (British) 	1974 	.vg 	ISO 3166-2:VG
VI 	Virgin Islands (U.S.) 	1974 	.vi 	ISO 3166-2:VI
VN 	Viet Nam 	1974 	.vn 	ISO 3166-2:VN 	ISO country name follows UN designation (common name: Vietnam)
Code used for Republic of Viet Nam (common name: South Vietnam) before 1977
VU 	Vanuatu 	1980 	.vu 	ISO 3166-2:VU 	Name changed from New Hebrides (NH)
WF 	Wallis and Futuna 	1974 	.wf 	ISO 3166-2:WF 	Previous ISO country name: Wallis and Futuna Islands
WS 	Samoa 	1974 	.ws 	ISO 3166-2:WS 	Code taken from former name: Western Samoa
YE 	Yemen 	1974 	.ye 	ISO 3166-2:YE 	Previous ISO country name: Yemen, Republic of (for three years after the unification)
Code used for North Yemen before 1990
YT 	Mayotte 	1993 	.yt 	ISO 3166-2:YT
ZA 	South Africa 	1974 	.za 	ISO 3166-2:ZA 	Code taken from name in Dutch: Zuid-Afrika
ZM 	Zambia 	1974 	.zm 	ISO 3166-2:ZM
ZW 	Zimbabwe 	1980 	.zw 	ISO 3166-2:ZW 	Name changed from Southern Rhodesia (RH)
*/
  constructor() { }
}
