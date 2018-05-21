function standalone(input) {
F = {
0: 0,
1: 0,
2: 1,
3: 1,
4: 1,
5: 0,
6: 0,
7: 0,
8: 1,
9: 1,
10: 0,
11: 0,
12: 0,
13: 0,
14: 1,
15: 0,
16: 0,
17: 0,
18: 0,
19: 0,
20: 0,
21: 0,
22: 0,
23: 0,
24: 0,
25: 0,
26: 0,
27: 0,
28: 0,
29: 0,
30: 0,
31: 0,
32: 0,
33: 0,
34: 0,
73: 0.9843076730472656,
35: 4.138766644529605,
36: 4.138766660278326,
37: 0.36280921204487065,
38: -1.7509939139089032,
39: 0.4966628962844386,
40: 0.7414242194284781,
41: 3.061684834782609,
42: -2.3781166891751697,
43: 0.3561609498774685,
44: 0.3386544387750807,
45: 0.15701059108768106,
46: 1.42580405449747,
47: 2.6961039749350015,
48: 0.3540373640715414,
49: 0.14591043133513984,
50: 0.07293226418823348,
51: 0.08423614978023176,
52: -1.770942930486496,
53: 0.5898019546362503,
54: 0.12686485246284204,
55: 0.05434566595973758,
56: -0.0598127258688522,
57: -1.8182614812260998,
58: 0.6564827396856671,
59: 0.0711671397001072,
60: -0.01245718486529053,
61: 0.07362299765086436,
62: -2.658652726826465,
63: 0.4666485778237237,
64: 0.16141039889300415,
65: -0.007839026042669242,
66: -0.02765606886181797,
67: -0.8136268601773841,
68: -1.0098429597054768,
69: 0.1368458569965429,
70: -0.024068354839041947,
71: -0.781212658648581,
72: -2.065540548302284,
74: 0.015446077827542856,
438: -0.4213871952471094,
453: 5.950100516102832,
468: -0.3114774400787482,
483: 2.0696907244724407,
498: 2.1574730863232094,
513: -3.101218475403787,
528: -2.8856972548282513,
543: 2.2655552948983755,
558: 2.2406601833015602,
573: 5.424028439542286,
113: 0.0015695953167722038,
75: -6.455366623039574,
76: -6.45536662444346,
77: -1.5405627098453571,
78: 3.9529533596822577,
79: -0.1962376445946005,
80: -0.1442784289306201,
81: -0.5824687411282029,
82: -2.296276767831896,
83: 0.5776010016421128,
84: -0.12351943069351015,
85: -0.48516617975534887,
86: 0.09486560509302067,
87: -0.7843436195995506,
88: 0.8465534320455392,
89: 0.5058221705686083,
90: 0.08895907894489583,
91: -0.5715652032607054,
92: -1.2023019636047168,
93: 1.1147047752572694,
94: 0.24838784652961307,
95: 0.048271919733860524,
96: 0.019996122129185737,
97: -0.8190760681274443,
98: 1.0563605738238797,
99: 0.23819690913199448,
100: 0.04765878108732716,
101: -0.08038134685166254,
102: -0.9975653619951144,
103: 0.5967403064338602,
104: 0.30274565906592893,
105: -0.022543822091996277,
106: 0.0793852360873972,
107: -0.848858799168387,
108: 3.393847033046984,
109: 0.34882061507030115,
110: 0.028379587900694447,
111: -0.8068793865553225,
112: -1.9667780505873327,
114: 0.0015671316873137704,
439: 0.18169490252485468,
454: 1.9466439939092581,
469: 0.26673121152159246,
484: 1.0221179448626636,
499: 0.9259320239572522,
514: 4.114313015087118,
529: 6.235423125426217,
544: 0.9910472691013259,
559: 0.8735762424783703,
574: 1.7059920299574574,
153: 0.005642840205257992,
115: -5.17170893931419,
116: -5.171708936559618,
117: 1.8277273052636336,
118: 2.3487922995248436,
119: -0.42804429155808893,
120: -0.38401624349796404,
121: -0.19265177163591402,
122: -3.985256480420437,
123: 0.44399548719788995,
124: -0.35282731700323694,
125: -0.696105450400549,
126: -0.15372903128351526,
127: -0.4724069812161182,
128: 0.6939979112312912,
129: 0.2135963379641136,
130: -0.041229654968962005,
131: -0.7558241734238924,
132: -1.81137573101481,
133: 0.8915850069972195,
134: 0.21574922461089527,
135: 0.08833823285088799,
136: 0.023393814487125034,
137: -0.9257217975642836,
138: 0.8482336809160892,
139: 0.2529583259362012,
140: -0.0475175590669342,
141: -0.028995916685706696,
142: -0.9626177358680834,
143: 0.5174196068553863,
144: 0.32003565976690435,
145: 0.055782870993031836,
146: -0.06381908429247782,
147: -1.3557472595824451,
148: 1.8105638188112474,
149: 0.2595991659504906,
150: 0.010253169290926678,
151: -0.8093706699044088,
152: -2.8466499974235053,
154: 0.005610998559675916,
440: -0.4270471672086013,
455: 3.0469969335439457,
470: -0.6633730295230994,
485: 1.3279040542797165,
500: 1.3651542518396023,
515: 6.492962637061494,
530: 1.5972408204692707,
545: 1.4580824252300497,
560: 1.3531194649343001,
575: 2.771543226771975,
193: 0.0027911471193559564,
155: -5.878507562003936,
156: -5.878507564124609,
157: -0.8088775031551677,
158: 3.3614634812475432,
159: -0.2655424216497016,
160: -0.24881370531131602,
161: -0.5304006297364732,
162: -2.457031928815279,
163: 0.6421821146696683,
164: -0.05370502778432688,
165: -0.6108088587352672,
166: 0.17580127881515228,
167: -0.7954459303629743,
168: 0.728459511272023,
169: 0.43359770677144494,
170: 0.0647102461434646,
171: -0.5538853907228692,
172: -1.2137391476791892,
173: 0.873705848970214,
174: 0.31265260826361646,
175: -0.03482556607835012,
176: -0.004735506403541742,
177: -0.8022166288302932,
178: 0.9409219341488086,
179: 0.30277954329369217,
180: 0.006213522572288049,
181: -0.05587482574532859,
182: -0.9580408712104589,
183: 0.5991898289252351,
184: 0.34940748778782993,
185: 0.08110798655256182,
186: -0.02962541395877337,
187: -0.9468162620107616,
188: 2.8102318353546374,
189: 0.3761707402510464,
190: 0.021240122114681986,
191: -0.8160609496536967,
192: -2.019820637919607,
194: 0.0027833566171140676,
441: 0.13080573497941747,
456: 1.9997385223708832,
471: 0.1916162361838917,
486: 0.93726803413881,
501: 1.0798869599263285,
516: 4.371432453263229,
531: 4.87473604671574,
546: 1.1059647280749116,
561: 1.0123378839362527,
576: 1.7422746527707922,
233: 0.9834488772302769,
195: 4.084611696836987,
196: 4.084611715438127,
197: 0.1462024357248135,
198: -1.2010132904764743,
199: 0.5682163483367769,
200: 0.6827469266591518,
201: 3.0589151640258776,
202: -2.318910141758282,
203: 0.3979504072811391,
204: 0.2970185889844535,
205: 0.21087425032696144,
206: 1.4483118172073053,
207: 2.898950706896997,
208: 0.41981714946068055,
209: 0.1755993214003324,
210: 0.048437193162751496,
211: 0.07800781032964185,
212: -1.831605174716936,
213: 0.74930896936118,
214: 0.03273941165385838,
215: 0.03595129762056906,
216: 0.0688700673221058,
217: -1.9052584013382736,
218: 0.6051304203851285,
219: 0.11423514697331688,
220: 0.0682033169458931,
221: 0.002869958449714452,
222: -2.601668968580166,
223: 0.5194701943067528,
224: 0.17134059016828135,
225: -0.02713319652139727,
226: 0.04383186660707694,
227: -0.841325169848551,
228: -0.66284315745088,
229: 0.23654321057063832,
230: 0.041043618403646065,
231: -0.7529801140221145,
232: -2.0542981564373184,
234: 0.0162771831047847,
442: -0.513921203733146,
457: 6.279588531760237,
472: -0.3692168602895993,
487: 2.159826334355059,
502: 2.1520780135745023,
517: -3.0812700681088616,
532: -2.095156393690619,
547: 2.3220807970167634,
562: 2.235065098645075,
577: 5.549408035072077,
273: 0.004764627638289097,
235: -5.341759880700174,
236: -5.341759875433495,
237: 2.1884085681970498,
238: 1.9571598794448535,
239: -0.5801758730081508,
240: -0.5722261304909023,
241: 0.0480206715432059,
242: -4.566253263666759,
243: 0.5116778349958266,
244: -0.5164465959960366,
245: -0.6870532275229865,
246: -0.20589061800776734,
247: -0.15266768055686403,
248: 0.7328758697752851,
249: 0.3900737934312042,
250: 0.08828117776283678,
251: -0.7065101323678996,
252: -2.081151417184905,
253: 0.844790593836991,
254: 0.07830156246802449,
255: 0.08903857712244043,
256: -0.07034456052749301,
257: -1.0445188145939635,
258: 0.8239170595463475,
259: 0.21848614858670504,
260: 0.05830534642313659,
261: -0.08275906897449858,
262: -1.0329466579371283,
263: 0.563281781177779,
264: 0.20623900376464696,
265: 0.009609243728387229,
266: -0.05423236748573915,
267: -1.460417730854618,
268: 1.3966258574688488,
269: 0.39223328395172774,
270: -0.04345337888578946,
271: -0.8429174247654896,
272: -3.129479847085568,
274: 0.004741925961757549,
443: -0.8768411948884726,
458: 3.5327294032967016,
473: -0.8676147164723659,
488: 1.3775155721243837,
503: 1.4024203531470367,
518: 7.100173892458511,
533: 0.3652265168929312,
548: 1.4406052846417803,
563: 1.4233686817293048,
578: 3.200517611627837,
313: 0.9144464252379687,
275: 2.369176746075212,
276: 2.36917609733801,
277: -2.8032417658827464,
278: -0.18816501297202196,
279: 0.7431810889413661,
280: 0.7343841205007712,
281: 0.2553428021776573,
282: -0.8554973906840437,
283: 0.5998700976494795,
284: 0.3833908364917678,
285: -0.07439922444740614,
286: 3.385053418485275,
287: -0.09803438640809069,
288: 0.9863845044197098,
289: 0.3862442067857341,
290: -0.08184427738110332,
291: -0.0787483727307607,
292: 1.7511686504248711,
293: 1.6459457194893279,
294: 0.20417503825108907,
295: -0.05586760129622466,
296: 0.06749552521305141,
297: -0.51993466511033,
298: 1.5942413333846366,
299: 0.2631023671327913,
300: 0.01762474574346365,
301: 0.01511101748138946,
302: -1.0406330219367403,
303: 1.3182367718853534,
304: 0.2803148297971213,
305: 0.05920132083299243,
306: -0.06076976505840839,
307: -0.8027019832423453,
308: 0.9084768903081603,
309: 0.48102108752807615,
310: -0.0036435987719964924,
311: -0.7866241748568423,
312: -1.9210235538071596,
314: 0.07823416060746881,
444: 4.331215614399929,
459: 1.2229299383678838,
474: 4.364201517975271,
489: 0.8174693183491438,
504: 0.929159941285988,
519: -0.3573389256046952,
534: 1.678168171013786,
549: 0.9028474614956626,
564: 0.8354114660305064,
579: 0.9518657968536081,
353: 0.8620005261871553,
315: 1.8320068520360917,
316: 1.8320060088899064,
317: -2.2296336054108528,
318: 0.6399952815612251,
319: 0.46090964860113276,
320: 0.6566186278652159,
321: 0.36262203616512056,
322: -1.275827365927814,
323: 0.6535266308969733,
324: 0.15125066002863824,
325: -0.13489961950691673,
326: 3.088446015200126,
327: -0.07804618419754349,
328: 0.8547129540800917,
329: 0.46226170470741473,
330: -0.031572155651964626,
331: -0.2277103927652691,
332: 1.3078256420660748,
333: 1.4293895246097337,
334: 0.11700775243236258,
335: -0.04260902343199784,
336: -0.06595882298025138,
337: -0.5715078563892595,
338: 1.3370467345756891,
339: 0.41040123034271636,
340: -0.06529873880343212,
341: -0.0046171903032639905,
342: -1.0961006021829767,
343: 1.1307259318919984,
344: 0.27345346356861894,
345: -0.012725569086518937,
346: -0.002507436283610248,
347: -0.9254861373226096,
348: 1.2712224497703333,
349: 0.4120035441374282,
350: -0.09696075502001894,
351: -0.798235849184572,
352: -2.14045522691411,
354: 0.1189556190402227,
445: 3.6972997600898387,
460: 1.8698995130138323,
475: 3.6247226588644237,
490: 0.9905425316963439,
505: 0.8983372077071048,
520: 0.7124059894550021,
535: 2.3273456520033,
550: 0.8065293663617513,
565: 0.9389923603275493,
580: 1.369569971393712,
393: 0.9220623066958198,
355: 2.470703622611639,
356: 2.4707030953512374,
357: -2.611095178644414,
358: -0.4117774429232292,
359: 0.8770510105106271,
360: 0.8746992537311349,
361: 0.40020682664037266,
362: -0.9649021023308298,
363: 0.7281776484227849,
364: 0.4344952807821576,
365: 0.14035065657358065,
366: 3.2575562607321014,
367: -0.006801979355060512,
368: 0.8537365230093487,
369: 0.33480406351320435,
370: 0.042838990402842336,
371: 0.12456393022603197,
372: 1.521039487328091,
373: 1.5109511659226373,
374: 0.09009179502168965,
375: -0.025374214271149276,
376: 0.08185089688907801,
377: -0.4082364454568466,
378: 1.5142141316617224,
379: 0.41020554542890736,
380: 0.09366932258058602,
381: -0.014758222346470173,
382: -1.1200230205945343,
383: 1.2608568635244157,
384: 0.22925581433733075,
385: 0.07282283900424824,
386: -0.0377836457080341,
387: -0.7493857681034752,
388: 0.637476277229566,
389: 0.40886541609142113,
390: 0.04618253000309144,
391: -0.8232112994696024,
392: -1.920368493167706,
394: 0.07186340926660376,
446: 3.798794376254591,
461: 1.3429132370026955,
476: 3.981833420430428,
491: 1.0428062544456376,
506: 0.9163119761824169,
521: -1.0381967417550224,
536: 0.7129746484992578,
551: 0.9719406126256926,
566: 1.016939014512594,
581: 1.0528716523807782,
433: 0.652032692759254,
395: 0.6279871876647177,
396: 0.6279861722874723,
397: -1.292535609451254,
398: 2.0629086747699503,
399: 0.44064711238520377,
400: 0.38920809895688824,
401: 0.23602879539797308,
402: -1.6865418284900098,
403: 0.4342295879431552,
404: 0.1723331323844245,
405: -0.20335803560857552,
406: 2.2837838933693533,
407: 0.07682361107090507,
408: 0.6377988187095367,
409: 0.44978340242297227,
410: 0.02071960592781888,
411: -0.18426045077087896,
412: 0.6212181960765163,
413: 1.063643090219687,
414: 0.15079401866820139,
415: -0.09629375795466638,
416: 0.008612791475222717,
417: -0.6470060752800944,
418: 1.1089211093104625,
419: 0.30510989504312086,
420: 0.060648060694847156,
421: 0.0543714536587363,
422: -1.0324607164178259,
423: 0.8601053937130949,
424: 0.19888485020582042,
425: 0.022835303726724154,
426: 0.01546503877783953,
427: -0.8193380558271995,
428: 1.883203619097694,
429: 0.42579845580499015,
430: -0.003989989822689527,
431: -0.84115981844366,
432: -2.2818353874139126,
434: 0.22688606033237027,
447: 2.2294419446574154,
462: 2.139330912573034,
477: 2.286055834431752,
492: 1.0895346533121695,
507: 0.939898205313753,
522: 1.279930103363797,
537: 3.2143753582507406,
552: 1.0447512122326263,
567: 1.0893889141377238,
582: 1.6076612339928877,
448: 0.9854220867964971,
435: 4.2135645508480195,
436: 4.213562474895124,
437: -6.96444429090476,
449: 0.014365397650134016,
588: -11.382663949840746,
603: 5.953907529504214,
618: -6.713823774654421,
633: 10.758714076279894,
463: 0.9999984744381055,
450: 13.393147024555752,
451: 13.39314623479642,
452: -4.045222161406988,
464: 0.0000015255595671385179,
589: 3.140485796053639,
604: 6.990268110789367,
619: -8.448846295299948,
634: -2.499273777006517,
478: 0.987586196887908,
465: 4.376456783949115,
466: 4.376454773238452,
467: -7.224349720211675,
479: 0.012259700604386164,
590: -13.303766037185705,
605: 6.082531295871011,
620: -6.335407835969241,
635: 11.110476835866425,
493: 0.9999957026620949,
480: 12.357510951456511,
481: 12.357510521457067,
482: 4.904617779768033,
494: 0.000004297319437966175,
591: -3.2819908072382793,
606: -2.2123745508319055,
621: 2.6543294789950065,
636: -5.399030764833181,
508: 0.9999947933308538,
495: 12.165565406432925,
496: 12.16556501932727,
497: 4.824860955399923,
509: 0.000005206642036759148,
592: -3.1470036383413516,
607: -1.9766646437000346,
622: 2.323074626084745,
637: -5.164182720161959,
523: 0.00041808861629770433,
510: -7.779398597425294,
511: -7.779398971156571,
512: -1.950303081448609,
524: 0.0004179138182066266,
593: 13.099222445669032,
608: -13.031455647492766,
623: -2.8979408438633087,
638: 9.318679542289788,
538: 0.00012375912913325417,
525: -8.997048513087952,
526: -8.997049621674707,
527: -10.424355760229467,
539: 0.00012374381281121034,
594: 9.86707194059827,
609: -11.732911093987754,
624: -10.47040969126159,
639: 13.585069694210658,
553: 0.9999947797333089,
540: 12.162957249607121,
541: 12.162956846853366,
542: 4.531335385259645,
554: 0.00000522023943995729,
595: -2.8578310958860325,
610: -1.663951866989928,
625: 1.6780673715504788,
640: -4.683687706652468,
568: 0.9999955377127436,
555: 12.319845048003845,
556: 12.319844623345514,
557: 4.676310088713486,
569: 0.000004462267344360655,
596: -3.019413642463943,
611: -1.8682109153766757,
626: 2.1607260892728912,
641: -5.017246657711561,
583: 0.9999943979894812,
570: 12.092379993866368,
571: 12.092379401411439,
572: -2.812583082794454,
584: 0.00000560197913627964,
597: 2.0435123675302336,
612: 4.3228450883269876,
627: -5.3106770471818345,
642: -3.4420711961669936,
598: 6.585565119104655e-16,
585: -34.95648200125468,
586: -34.95648133724145,
587: -3.4856365677854977,
599: 6.585565119104651e-16,
613: 0.9999954330382538,
600: 12.29664998521868,
601: 12.296657832935075,
602: -3.1624827331276117,
614: 0.000004566940889082251,
628: 0.000001692793054104292,
615: -13.289126335120582,
616: -13.289129005695623,
617: 4.529411975815644,
629: 0.000001692790188555968,
643: 0.000008206506737597083,
630: -11.710559725386961,
631: -11.710575007226964,
632: -7.085222242249252,
644: 0.00000820643939084425
};
F[0] = input[0];
F[1] = input[1];
F[2] = input[2];
F[3] = input[3];
F[4] = input[4];
F[5] = input[5];
F[6] = input[6];
F[7] = input[7];
F[8] = input[8];
F[9] = input[9];
F[10] = input[10];
F[11] = input[11];
F[12] = input[12];
F[13] = input[13];
F[14] = input[14];
F[15] = input[15];
F[16] = input[16];
F[17] = input[17];
F[18] = input[18];
F[19] = input[19];
F[20] = input[20];
F[21] = input[21];
F[22] = input[22];
F[23] = input[23];
F[24] = input[24];
F[25] = input[25];
F[26] = input[26];
F[27] = input[27];
F[28] = input[28];
F[29] = input[29];
F[30] = input[30];
F[31] = input[31];
F[32] = input[32];
F[33] = input[33];
F[34] = input[34];
F[35] = F[36];F[36] = F[37];F[36] += F[0] * F[38];F[36] += F[1] * F[39];F[36] += F[2] * F[40];F[36] += F[3] * F[41];F[36] += F[4] * F[42];F[36] += F[5] * F[43];F[36] += F[6] * F[44];F[36] += F[7] * F[45];F[36] += F[8] * F[46];F[36] += F[9] * F[47];F[36] += F[10] * F[48];F[36] += F[11] * F[49];F[36] += F[12] * F[50];F[36] += F[13] * F[51];F[36] += F[14] * F[52];F[36] += F[15] * F[53];F[36] += F[16] * F[54];F[36] += F[17] * F[55];F[36] += F[18] * F[56];F[36] += F[19] * F[57];F[36] += F[20] * F[58];F[36] += F[21] * F[59];F[36] += F[22] * F[60];F[36] += F[23] * F[61];F[36] += F[24] * F[62];F[36] += F[25] * F[63];F[36] += F[26] * F[64];F[36] += F[27] * F[65];F[36] += F[28] * F[66];F[36] += F[29] * F[67];F[36] += F[30] * F[68];F[36] += F[31] * F[69];F[36] += F[32] * F[70];F[36] += F[33] * F[71];F[36] += F[34] * F[72];F[73] = (1 / (1 + Math.exp(-F[36])));F[74] = F[73] * (1 - F[73]);
F[75] = F[76];F[76] = F[77];F[76] += F[0] * F[78];F[76] += F[1] * F[79];F[76] += F[2] * F[80];F[76] += F[3] * F[81];F[76] += F[4] * F[82];F[76] += F[5] * F[83];F[76] += F[6] * F[84];F[76] += F[7] * F[85];F[76] += F[8] * F[86];F[76] += F[9] * F[87];F[76] += F[10] * F[88];F[76] += F[11] * F[89];F[76] += F[12] * F[90];F[76] += F[13] * F[91];F[76] += F[14] * F[92];F[76] += F[15] * F[93];F[76] += F[16] * F[94];F[76] += F[17] * F[95];F[76] += F[18] * F[96];F[76] += F[19] * F[97];F[76] += F[20] * F[98];F[76] += F[21] * F[99];F[76] += F[22] * F[100];F[76] += F[23] * F[101];F[76] += F[24] * F[102];F[76] += F[25] * F[103];F[76] += F[26] * F[104];F[76] += F[27] * F[105];F[76] += F[28] * F[106];F[76] += F[29] * F[107];F[76] += F[30] * F[108];F[76] += F[31] * F[109];F[76] += F[32] * F[110];F[76] += F[33] * F[111];F[76] += F[34] * F[112];F[113] = (1 / (1 + Math.exp(-F[76])));F[114] = F[113] * (1 - F[113]);
F[115] = F[116];F[116] = F[117];F[116] += F[0] * F[118];F[116] += F[1] * F[119];F[116] += F[2] * F[120];F[116] += F[3] * F[121];F[116] += F[4] * F[122];F[116] += F[5] * F[123];F[116] += F[6] * F[124];F[116] += F[7] * F[125];F[116] += F[8] * F[126];F[116] += F[9] * F[127];F[116] += F[10] * F[128];F[116] += F[11] * F[129];F[116] += F[12] * F[130];F[116] += F[13] * F[131];F[116] += F[14] * F[132];F[116] += F[15] * F[133];F[116] += F[16] * F[134];F[116] += F[17] * F[135];F[116] += F[18] * F[136];F[116] += F[19] * F[137];F[116] += F[20] * F[138];F[116] += F[21] * F[139];F[116] += F[22] * F[140];F[116] += F[23] * F[141];F[116] += F[24] * F[142];F[116] += F[25] * F[143];F[116] += F[26] * F[144];F[116] += F[27] * F[145];F[116] += F[28] * F[146];F[116] += F[29] * F[147];F[116] += F[30] * F[148];F[116] += F[31] * F[149];F[116] += F[32] * F[150];F[116] += F[33] * F[151];F[116] += F[34] * F[152];F[153] = (1 / (1 + Math.exp(-F[116])));F[154] = F[153] * (1 - F[153]);
F[155] = F[156];F[156] = F[157];F[156] += F[0] * F[158];F[156] += F[1] * F[159];F[156] += F[2] * F[160];F[156] += F[3] * F[161];F[156] += F[4] * F[162];F[156] += F[5] * F[163];F[156] += F[6] * F[164];F[156] += F[7] * F[165];F[156] += F[8] * F[166];F[156] += F[9] * F[167];F[156] += F[10] * F[168];F[156] += F[11] * F[169];F[156] += F[12] * F[170];F[156] += F[13] * F[171];F[156] += F[14] * F[172];F[156] += F[15] * F[173];F[156] += F[16] * F[174];F[156] += F[17] * F[175];F[156] += F[18] * F[176];F[156] += F[19] * F[177];F[156] += F[20] * F[178];F[156] += F[21] * F[179];F[156] += F[22] * F[180];F[156] += F[23] * F[181];F[156] += F[24] * F[182];F[156] += F[25] * F[183];F[156] += F[26] * F[184];F[156] += F[27] * F[185];F[156] += F[28] * F[186];F[156] += F[29] * F[187];F[156] += F[30] * F[188];F[156] += F[31] * F[189];F[156] += F[32] * F[190];F[156] += F[33] * F[191];F[156] += F[34] * F[192];F[193] = (1 / (1 + Math.exp(-F[156])));F[194] = F[193] * (1 - F[193]);
F[195] = F[196];F[196] = F[197];F[196] += F[0] * F[198];F[196] += F[1] * F[199];F[196] += F[2] * F[200];F[196] += F[3] * F[201];F[196] += F[4] * F[202];F[196] += F[5] * F[203];F[196] += F[6] * F[204];F[196] += F[7] * F[205];F[196] += F[8] * F[206];F[196] += F[9] * F[207];F[196] += F[10] * F[208];F[196] += F[11] * F[209];F[196] += F[12] * F[210];F[196] += F[13] * F[211];F[196] += F[14] * F[212];F[196] += F[15] * F[213];F[196] += F[16] * F[214];F[196] += F[17] * F[215];F[196] += F[18] * F[216];F[196] += F[19] * F[217];F[196] += F[20] * F[218];F[196] += F[21] * F[219];F[196] += F[22] * F[220];F[196] += F[23] * F[221];F[196] += F[24] * F[222];F[196] += F[25] * F[223];F[196] += F[26] * F[224];F[196] += F[27] * F[225];F[196] += F[28] * F[226];F[196] += F[29] * F[227];F[196] += F[30] * F[228];F[196] += F[31] * F[229];F[196] += F[32] * F[230];F[196] += F[33] * F[231];F[196] += F[34] * F[232];F[233] = (1 / (1 + Math.exp(-F[196])));F[234] = F[233] * (1 - F[233]);
F[235] = F[236];F[236] = F[237];F[236] += F[0] * F[238];F[236] += F[1] * F[239];F[236] += F[2] * F[240];F[236] += F[3] * F[241];F[236] += F[4] * F[242];F[236] += F[5] * F[243];F[236] += F[6] * F[244];F[236] += F[7] * F[245];F[236] += F[8] * F[246];F[236] += F[9] * F[247];F[236] += F[10] * F[248];F[236] += F[11] * F[249];F[236] += F[12] * F[250];F[236] += F[13] * F[251];F[236] += F[14] * F[252];F[236] += F[15] * F[253];F[236] += F[16] * F[254];F[236] += F[17] * F[255];F[236] += F[18] * F[256];F[236] += F[19] * F[257];F[236] += F[20] * F[258];F[236] += F[21] * F[259];F[236] += F[22] * F[260];F[236] += F[23] * F[261];F[236] += F[24] * F[262];F[236] += F[25] * F[263];F[236] += F[26] * F[264];F[236] += F[27] * F[265];F[236] += F[28] * F[266];F[236] += F[29] * F[267];F[236] += F[30] * F[268];F[236] += F[31] * F[269];F[236] += F[32] * F[270];F[236] += F[33] * F[271];F[236] += F[34] * F[272];F[273] = (1 / (1 + Math.exp(-F[236])));F[274] = F[273] * (1 - F[273]);
F[275] = F[276];F[276] = F[277];F[276] += F[0] * F[278];F[276] += F[1] * F[279];F[276] += F[2] * F[280];F[276] += F[3] * F[281];F[276] += F[4] * F[282];F[276] += F[5] * F[283];F[276] += F[6] * F[284];F[276] += F[7] * F[285];F[276] += F[8] * F[286];F[276] += F[9] * F[287];F[276] += F[10] * F[288];F[276] += F[11] * F[289];F[276] += F[12] * F[290];F[276] += F[13] * F[291];F[276] += F[14] * F[292];F[276] += F[15] * F[293];F[276] += F[16] * F[294];F[276] += F[17] * F[295];F[276] += F[18] * F[296];F[276] += F[19] * F[297];F[276] += F[20] * F[298];F[276] += F[21] * F[299];F[276] += F[22] * F[300];F[276] += F[23] * F[301];F[276] += F[24] * F[302];F[276] += F[25] * F[303];F[276] += F[26] * F[304];F[276] += F[27] * F[305];F[276] += F[28] * F[306];F[276] += F[29] * F[307];F[276] += F[30] * F[308];F[276] += F[31] * F[309];F[276] += F[32] * F[310];F[276] += F[33] * F[311];F[276] += F[34] * F[312];F[313] = (1 / (1 + Math.exp(-F[276])));F[314] = F[313] * (1 - F[313]);
F[315] = F[316];F[316] = F[317];F[316] += F[0] * F[318];F[316] += F[1] * F[319];F[316] += F[2] * F[320];F[316] += F[3] * F[321];F[316] += F[4] * F[322];F[316] += F[5] * F[323];F[316] += F[6] * F[324];F[316] += F[7] * F[325];F[316] += F[8] * F[326];F[316] += F[9] * F[327];F[316] += F[10] * F[328];F[316] += F[11] * F[329];F[316] += F[12] * F[330];F[316] += F[13] * F[331];F[316] += F[14] * F[332];F[316] += F[15] * F[333];F[316] += F[16] * F[334];F[316] += F[17] * F[335];F[316] += F[18] * F[336];F[316] += F[19] * F[337];F[316] += F[20] * F[338];F[316] += F[21] * F[339];F[316] += F[22] * F[340];F[316] += F[23] * F[341];F[316] += F[24] * F[342];F[316] += F[25] * F[343];F[316] += F[26] * F[344];F[316] += F[27] * F[345];F[316] += F[28] * F[346];F[316] += F[29] * F[347];F[316] += F[30] * F[348];F[316] += F[31] * F[349];F[316] += F[32] * F[350];F[316] += F[33] * F[351];F[316] += F[34] * F[352];F[353] = (1 / (1 + Math.exp(-F[316])));F[354] = F[353] * (1 - F[353]);
F[355] = F[356];F[356] = F[357];F[356] += F[0] * F[358];F[356] += F[1] * F[359];F[356] += F[2] * F[360];F[356] += F[3] * F[361];F[356] += F[4] * F[362];F[356] += F[5] * F[363];F[356] += F[6] * F[364];F[356] += F[7] * F[365];F[356] += F[8] * F[366];F[356] += F[9] * F[367];F[356] += F[10] * F[368];F[356] += F[11] * F[369];F[356] += F[12] * F[370];F[356] += F[13] * F[371];F[356] += F[14] * F[372];F[356] += F[15] * F[373];F[356] += F[16] * F[374];F[356] += F[17] * F[375];F[356] += F[18] * F[376];F[356] += F[19] * F[377];F[356] += F[20] * F[378];F[356] += F[21] * F[379];F[356] += F[22] * F[380];F[356] += F[23] * F[381];F[356] += F[24] * F[382];F[356] += F[25] * F[383];F[356] += F[26] * F[384];F[356] += F[27] * F[385];F[356] += F[28] * F[386];F[356] += F[29] * F[387];F[356] += F[30] * F[388];F[356] += F[31] * F[389];F[356] += F[32] * F[390];F[356] += F[33] * F[391];F[356] += F[34] * F[392];F[393] = (1 / (1 + Math.exp(-F[356])));F[394] = F[393] * (1 - F[393]);
F[395] = F[396];F[396] = F[397];F[396] += F[0] * F[398];F[396] += F[1] * F[399];F[396] += F[2] * F[400];F[396] += F[3] * F[401];F[396] += F[4] * F[402];F[396] += F[5] * F[403];F[396] += F[6] * F[404];F[396] += F[7] * F[405];F[396] += F[8] * F[406];F[396] += F[9] * F[407];F[396] += F[10] * F[408];F[396] += F[11] * F[409];F[396] += F[12] * F[410];F[396] += F[13] * F[411];F[396] += F[14] * F[412];F[396] += F[15] * F[413];F[396] += F[16] * F[414];F[396] += F[17] * F[415];F[396] += F[18] * F[416];F[396] += F[19] * F[417];F[396] += F[20] * F[418];F[396] += F[21] * F[419];F[396] += F[22] * F[420];F[396] += F[23] * F[421];F[396] += F[24] * F[422];F[396] += F[25] * F[423];F[396] += F[26] * F[424];F[396] += F[27] * F[425];F[396] += F[28] * F[426];F[396] += F[29] * F[427];F[396] += F[30] * F[428];F[396] += F[31] * F[429];F[396] += F[32] * F[430];F[396] += F[33] * F[431];F[396] += F[34] * F[432];F[433] = (1 / (1 + Math.exp(-F[396])));F[434] = F[433] * (1 - F[433]);
F[435] = F[436];F[436] = F[437];F[436] += F[73] * F[438];F[436] += F[113] * F[439];F[436] += F[153] * F[440];F[436] += F[193] * F[441];F[436] += F[233] * F[442];F[436] += F[273] * F[443];F[436] += F[313] * F[444];F[436] += F[353] * F[445];F[436] += F[393] * F[446];F[436] += F[433] * F[447];F[448] = (1 / (1 + Math.exp(-F[436])));F[449] = F[448] * (1 - F[448]);
F[450] = F[451];F[451] = F[452];F[451] += F[73] * F[453];F[451] += F[113] * F[454];F[451] += F[153] * F[455];F[451] += F[193] * F[456];F[451] += F[233] * F[457];F[451] += F[273] * F[458];F[451] += F[313] * F[459];F[451] += F[353] * F[460];F[451] += F[393] * F[461];F[451] += F[433] * F[462];F[463] = (1 / (1 + Math.exp(-F[451])));F[464] = F[463] * (1 - F[463]);
F[465] = F[466];F[466] = F[467];F[466] += F[73] * F[468];F[466] += F[113] * F[469];F[466] += F[153] * F[470];F[466] += F[193] * F[471];F[466] += F[233] * F[472];F[466] += F[273] * F[473];F[466] += F[313] * F[474];F[466] += F[353] * F[475];F[466] += F[393] * F[476];F[466] += F[433] * F[477];F[478] = (1 / (1 + Math.exp(-F[466])));F[479] = F[478] * (1 - F[478]);
F[480] = F[481];F[481] = F[482];F[481] += F[73] * F[483];F[481] += F[113] * F[484];F[481] += F[153] * F[485];F[481] += F[193] * F[486];F[481] += F[233] * F[487];F[481] += F[273] * F[488];F[481] += F[313] * F[489];F[481] += F[353] * F[490];F[481] += F[393] * F[491];F[481] += F[433] * F[492];F[493] = (1 / (1 + Math.exp(-F[481])));F[494] = F[493] * (1 - F[493]);
F[495] = F[496];F[496] = F[497];F[496] += F[73] * F[498];F[496] += F[113] * F[499];F[496] += F[153] * F[500];F[496] += F[193] * F[501];F[496] += F[233] * F[502];F[496] += F[273] * F[503];F[496] += F[313] * F[504];F[496] += F[353] * F[505];F[496] += F[393] * F[506];F[496] += F[433] * F[507];F[508] = (1 / (1 + Math.exp(-F[496])));F[509] = F[508] * (1 - F[508]);
F[510] = F[511];F[511] = F[512];F[511] += F[73] * F[513];F[511] += F[113] * F[514];F[511] += F[153] * F[515];F[511] += F[193] * F[516];F[511] += F[233] * F[517];F[511] += F[273] * F[518];F[511] += F[313] * F[519];F[511] += F[353] * F[520];F[511] += F[393] * F[521];F[511] += F[433] * F[522];F[523] = (1 / (1 + Math.exp(-F[511])));F[524] = F[523] * (1 - F[523]);
F[525] = F[526];F[526] = F[527];F[526] += F[73] * F[528];F[526] += F[113] * F[529];F[526] += F[153] * F[530];F[526] += F[193] * F[531];F[526] += F[233] * F[532];F[526] += F[273] * F[533];F[526] += F[313] * F[534];F[526] += F[353] * F[535];F[526] += F[393] * F[536];F[526] += F[433] * F[537];F[538] = (1 / (1 + Math.exp(-F[526])));F[539] = F[538] * (1 - F[538]);
F[540] = F[541];F[541] = F[542];F[541] += F[73] * F[543];F[541] += F[113] * F[544];F[541] += F[153] * F[545];F[541] += F[193] * F[546];F[541] += F[233] * F[547];F[541] += F[273] * F[548];F[541] += F[313] * F[549];F[541] += F[353] * F[550];F[541] += F[393] * F[551];F[541] += F[433] * F[552];F[553] = (1 / (1 + Math.exp(-F[541])));F[554] = F[553] * (1 - F[553]);
F[555] = F[556];F[556] = F[557];F[556] += F[73] * F[558];F[556] += F[113] * F[559];F[556] += F[153] * F[560];F[556] += F[193] * F[561];F[556] += F[233] * F[562];F[556] += F[273] * F[563];F[556] += F[313] * F[564];F[556] += F[353] * F[565];F[556] += F[393] * F[566];F[556] += F[433] * F[567];F[568] = (1 / (1 + Math.exp(-F[556])));F[569] = F[568] * (1 - F[568]);
F[570] = F[571];F[571] = F[572];F[571] += F[73] * F[573];F[571] += F[113] * F[574];F[571] += F[153] * F[575];F[571] += F[193] * F[576];F[571] += F[233] * F[577];F[571] += F[273] * F[578];F[571] += F[313] * F[579];F[571] += F[353] * F[580];F[571] += F[393] * F[581];F[571] += F[433] * F[582];F[583] = (1 / (1 + Math.exp(-F[571])));F[584] = F[583] * (1 - F[583]);
F[585] = F[586];F[586] = F[587];F[586] += F[448] * F[588];F[586] += F[463] * F[589];F[586] += F[478] * F[590];F[586] += F[493] * F[591];F[586] += F[508] * F[592];F[586] += F[523] * F[593];F[586] += F[538] * F[594];F[586] += F[553] * F[595];F[586] += F[568] * F[596];F[586] += F[583] * F[597];F[598] = (1 / (1 + Math.exp(-F[586])));F[599] = F[598] * (1 - F[598]);
F[600] = F[601];F[601] = F[602];F[601] += F[448] * F[603];F[601] += F[463] * F[604];F[601] += F[478] * F[605];F[601] += F[493] * F[606];F[601] += F[508] * F[607];F[601] += F[523] * F[608];F[601] += F[538] * F[609];F[601] += F[553] * F[610];F[601] += F[568] * F[611];F[601] += F[583] * F[612];F[613] = (1 / (1 + Math.exp(-F[601])));F[614] = F[613] * (1 - F[613]);
F[615] = F[616];F[616] = F[617];F[616] += F[448] * F[618];F[616] += F[463] * F[619];F[616] += F[478] * F[620];F[616] += F[493] * F[621];F[616] += F[508] * F[622];F[616] += F[523] * F[623];F[616] += F[538] * F[624];F[616] += F[553] * F[625];F[616] += F[568] * F[626];F[616] += F[583] * F[627];F[628] = (1 / (1 + Math.exp(-F[616])));F[629] = F[628] * (1 - F[628]);
F[630] = F[631];F[631] = F[632];F[631] += F[448] * F[633];F[631] += F[463] * F[634];F[631] += F[478] * F[635];F[631] += F[493] * F[636];F[631] += F[508] * F[637];F[631] += F[523] * F[638];F[631] += F[538] * F[639];F[631] += F[553] * F[640];F[631] += F[568] * F[641];F[631] += F[583] * F[642];F[643] = (1 / (1 + Math.exp(-F[631])));F[644] = F[643] * (1 - F[643]);
var output = [];
output[0] = F[598];
output[1] = F[613];
output[2] = F[628];
output[3] = F[643];
return output;
}