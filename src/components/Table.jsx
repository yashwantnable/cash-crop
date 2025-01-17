
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterService } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
// import { CustomerService } from './service/CustomerService';

// The rule argument should be a string in the format "custom_[field]".
FilterService.register('custom_activity', (value, filters) => {
  const [from, to] = filters ?? [null, null];
  if (from === null && to === null) return true;
  if (from !== null && to === null) return from <= value;
  if (from === null && to !== null) return value <= to;
  return from <= value && value <= to;
});

export default function CustomFilterDemo() {

    const myData =[{"id":1,"first_name":"Torie",last_name:"Rustman",email:"trustman0@amazon.co.uk",date_of_birth:"1979-11-16T23:04:32Z",age:45,country:"Argentina",phone:"6844103517"},
        {id:2,first_name:"Kordula",last_name:"Gecks",email:"kgecks1@deviantart.com",date_of_birth:"1997-08-06T21:07:34Z",age:30,country:"Greece",phone:"8429683893"},
        {id:3,first_name:"Vikki",last_name:"Simoens",email:"vsimoens2@ted.com",date_of_birth:"2016-04-28T16:59:19Z",age:48,country:"Czech Republic",phone:"8672773997"},
        {id:4,first_name:"Burnaby",last_name:"Cowern",email:"bcowern3@forbes.com",date_of_birth:"2017-10-25T08:05:50Z",age:54,country:"Equatorial Guinea",phone:"4257971694"},
        {id:5,first_name:"Teddie",last_name:"Traice",email:"ttraice4@zdnet.com",date_of_birth:"2015-04-20T11:45:34Z",age:57,country:"Russia",phone:"3932158370"},
        {id:6,first_name:"Sapphira",last_name:"Hutchinges",email:"shutchinges5@cam.ac.uk",date_of_birth:"1995-06-15T22:08:17Z",age:53,country:"Ethiopia",phone:"5094928131"},
        {id:7,first_name:"Shayna",last_name:"Dimitresco",email:"sdimitresco6@uiuc.edu",date_of_birth:"1997-10-28T11:25:07Z",age:21,country:"Indonesia",phone:"1216713219"},
        {id:8,first_name:"Caron",last_name:"Tomkinson",email:"ctomkinson7@nature.com",date_of_birth:"1989-03-14T19:48:26Z",age:47,country:"Ukraine",phone:"6895680771"},
        {id:9,first_name:"Hulda",last_name:"Ceresa",email:"hceresa8@omniture.com",date_of_birth:"2016-04-26T18:07:18Z",age:24,country:"United Arab Emirates",phone:"2117090201"},
        {id:10,first_name:"Neile",last_name:"Clements",email:"nclements9@irs.gov",date_of_birth:"2001-05-22T23:12:25Z",age:39,country:"Ukraine",phone:"5863355971"},
        {id:11,first_name:"Denver",last_name:"Pagnin",email:"dpagnina@opensource.org",date_of_birth:"1973-11-25T18:08:41Z",age:33,country:"Indonesia",phone:"8637568504"},
        {id:12,first_name:"Louella",last_name:"Carlill",email:"lcarlillb@webs.com",date_of_birth:"2008-12-09T09:54:05Z",age:28,country:"Philippines",phone:"8427969519"},
        {id:13,first_name:"Margarita",last_name:"Lewknor",email:"mlewknorc@spiegel.de",date_of_birth:"2002-05-29T03:19:27Z",age:49,country:"Philippines",phone:"6564638302"},
        {id:14,first_name:"Elise",last_name:"Petruska",email:"epetruskad@51.la",date_of_birth:"1980-04-07T12:02:49Z",age:19,country:"Russia",phone:"4848143050"},
        {id:15,first_name:"Consuela",last_name:"Birtwistle",email:"cbirtwistlee@pbs.org",date_of_birth:"2010-11-09T15:16:20Z",age:24,country:"Philippines",phone:"8823245128"},
        {id:16,first_name:"Moise",last_name:"Hugett",email:"mhugettf@sfgate.com",date_of_birth:"1992-09-21T20:05:24Z",age:58,country:"Palestinian Territory",phone:"4884280161"},
        {id:17,first_name:"Emiline",last_name:"Foucard",email:"efoucardg@weibo.com",date_of_birth:"1986-12-27T18:40:36Z",age:30,country:"Indonesia",phone:"8772777497"},
        {id:18,first_name:"Rosaleen",last_name:"Ionesco",email:"rionescoh@typepad.com",date_of_birth:"2004-05-18T18:25:24Z",age:28,country:"Russia",phone:"3528274607"},
        {id:19,first_name:"William",last_name:"Kivlin",email:"wkivlini@usgs.gov",date_of_birth:"2000-05-23T10:30:27Z",age:53,country:"France",phone:"8684362846"},
        {id:20,first_name:"Tallie",last_name:"Keenleyid",email:"tkeenleyidj@google.com.br",date_of_birth:"1991-10-12T07:19:00Z",age:33,country:"Cuba",phone:"6295519396"},
        {id:21,first_name:"Kinny",last_name:"Brazelton",email:"kbrazeltonk@whitehouse.gov",date_of_birth:"2017-10-22T08:46:50Z",age:49,country:"Peru",phone:"7213448846"},
        {id:22,first_name:"Tybi",last_name:"Papworth",email:"tpapworthl@auda.org.au",date_of_birth:"1979-10-14T19:06:50Z",age:52,country:"Indonesia",phone:"6514139986"},
        {id:23,first_name:"Caria",last_name:"Crudge",email:"ccrudgem@devhub.com",date_of_birth:"2019-09-11T16:35:47Z",age:47,country:"Poland",phone:"1313207773"},
        {id:24,first_name:"Justin",last_name:"Luebbert",email:"jluebbertn@ucsd.edu",date_of_birth:"1995-07-08T11:07:24Z",age:55,country:"Sweden",phone:"1892172806"},
        {id:25,first_name:"Dusty",last_name:"Allan",email:"dallano@issuu.com",date_of_birth:"1974-12-11T13:53:55Z",age:49,country:"Russia",phone:"9536828334"},
        {id:26,first_name:"Andrej",last_name:"Paynes",email:"apaynesp@fotki.com",date_of_birth:"2009-01-06T21:56:45Z",age:35,country:"Colombia",phone:"6312207567"},
        {id:27,first_name:"Bartel",last_name:"Ennor",email:"bennorq@illinois.edu",date_of_birth:"1988-03-26T13:04:21Z",age:21,country:"Indonesia",phone:"9971111062"},
        {id:28,first_name:"Cindy",last_name:"Tabram",email:"ctabramr@state.tx.us",date_of_birth:"2010-03-09T09:14:45Z",age:45,country:"United States",phone:"6269225638"},
        {id:29,first_name:"Lorinda",last_name:"McIleen",email:"lmcileens@hugedomains.com",date_of_birth:"1992-10-27T12:49:57Z",age:56,country:"Ivory Coast",phone:"2627894839"},
        {id:30,first_name:"Roseline",last_name:"Kryszkiecicz",email:"rkryszkieciczt@simplemachines.org",date_of_birth:"1981-01-22T21:58:08Z",age:42,country:"China",phone:"8944652389"},
        {id:31,first_name:"Gustaf",last_name:"Yonge",email:"gyongeu@yahoo.com",date_of_birth:"1989-05-31T09:29:39Z",age:21,country:"Indonesia",phone:"5358175227"},
        {id:32,first_name:"Rozanna",last_name:"Duesbury",email:"rduesburyv@buzzfeed.com",date_of_birth:"1973-01-01T23:04:04Z",age:54,country:"Czech Republic",phone:"9048047315"},
        {id:33,first_name:"Faber",last_name:"Zelland",email:"fzellandw@mit.edu",date_of_birth:"2012-08-25T07:33:41Z",age:48,country:"United States",phone:"5618492219"},
        {id:34,first_name:"Bryanty",last_name:"Swainsbury",email:"bswainsburyx@reference.com",date_of_birth:"2002-10-22T18:09:15Z",age:56,country:"Canada",phone:"5765823562"},
        {id:35,first_name:"Phylys",last_name:"Durek",email:"pdureky@eventbrite.com",date_of_birth:"1989-04-19T14:24:55Z",age:30,country:"Philippines",phone:"3264797290"},
        {id:36,first_name:"Quint",last_name:"Beaston",email:"qbeastonz@ehow.com",date_of_birth:"1971-09-10T19:34:04Z",age:29,country:"Finland",phone:"9657407673"},
        {id:37,first_name:"Natalina",last_name:"Gossop",email:"ngossop10@sbwire.com",date_of_birth:"2019-08-23T22:59:26Z",age:48,country:"Indonesia",phone:"9922842223"},
        {id:38,first_name:"Rich",last_name:"Halversen",email:"rhalversen11@state.gov",date_of_birth:"1977-03-24T05:36:22Z",age:36,country:"Turkmenistan",phone:"2185875902"},
        {id:39,first_name:"Denice",last_name:"Pieroni",email:"dpieroni12@bravesites.com",date_of_birth:"1974-01-10T05:54:58Z",age:25,country:"Brazil",phone:"2944772525"},
        {id:40,first_name:"Annie",last_name:"Rothermel",email:"arothermel13@ucoz.com",date_of_birth:"2002-09-24T16:23:46Z",age:55,country:"Sweden",phone:"5825313358"},
        {id:41,first_name:"Karina",last_name:"Drury",email:"kdrury14@google.ru",date_of_birth:"1990-01-12T09:33:25Z",age:25,country:"Iran",phone:"6085536064"},
        {id:42,first_name:"Aube",last_name:"Chretien",email:"achretien15@cbslocal.com",date_of_birth:"1999-03-29T23:33:39Z",age:36,country:"France",phone:"9176021911"},
        {id:43,first_name:"Cyndie",last_name:"Pyecroft",email:"cpyecroft16@blogger.com",date_of_birth:"1992-01-08T05:48:26Z",age:36,country:"Indonesia",phone:"5536086300"},
        {id:44,first_name:"Perry",last_name:"Ovett",email:"povett17@icio.us",date_of_birth:"2004-09-02T02:53:46Z",age:32,country:"Philippines",phone:"5501653348"},
        {id:45,first_name:"Nestor",last_name:"Eddington",email:"neddington18@nature.com",date_of_birth:"1973-08-05T15:58:05Z",age:42,country:"Paraguay",phone:"8104333778"},
        {id:46,first_name:"Beckie",last_name:"Venneur",email:"bvenneur19@discuz.net",date_of_birth:"1994-08-10T05:43:50Z",age:52,country:"Indonesia",phone:"5405031314"},
        {id:47,first_name:"Maje",last_name:"Pert",email:"mpert1a@timesonline.co.uk",date_of_birth:"2002-12-12T18:38:35Z",age:22,country:"Guatemala",phone:"4768506969"},
        {id:48,first_name:"Matthias",last_name:"Purver",email:"mpurver1b@ocn.ne.jp",date_of_birth:"1973-03-07T07:12:50Z",age:36,country:"France",phone:"9765669240"},
        {id:49,first_name:"Wileen",last_name:"Physick",email:"wphysick1c@imageshack.us",date_of_birth:"1971-02-14T05:03:05Z",age:36,country:"Denmark",phone:"5051073396"},
        {id:50,first_name:"Wilhelm",last_name:"Giacobilio",email:"wgiacobilio1d@shinystat.com",date_of_birth:"1991-02-22T16:46:58Z",age:35,country:"Indonesia",phone:"7851525795"},
        {id:51,first_name:"Thorpe",last_name:"Pavie",email:"tpavie1e@wordpress.org",date_of_birth:"1991-12-03T06:28:39Z",age:47,country:"Philippines",phone:"8321134681"},
        {id:52,first_name:"Stavros",last_name:"Marzelle",email:"smarzelle1f@berkeley.edu",date_of_birth:"2003-02-12T14:06:26Z",age:19,country:"Poland",phone:"2589170552"},
        {id:53,first_name:"Melina",last_name:"Stealy",email:"mstealy1g@theatlantic.com",date_of_birth:"1971-02-14T18:32:42Z",age:50,country:"China",phone:"2953061731"},
        {id:54,first_name:"Lee",last_name:"Cosbey",email:"lcosbey1h@parallels.com",date_of_birth:"2010-02-02T09:12:30Z",age:56,country:"Indonesia",phone:"6186571451"},
        {id:55,first_name:"Virge",last_name:"Kinvig",email:"vkinvig1i@freewebs.com",date_of_birth:"2019-03-07T13:22:09Z",age:47,country:"Netherlands",phone:"4264980180"},
        {id:56,first_name:"April",last_name:"Town",email:"atown1j@japanpost.jp",date_of_birth:"2013-05-13T04:10:42Z",age:51,country:"Uganda",phone:"7813787304"},
        {id:57,first_name:"Ferd",last_name:"Clausen",email:"fclausen1k@mac.com",date_of_birth:"2014-10-13T13:41:19Z",age:47,country:"Indonesia",phone:"1637727947"},
        {id:58,first_name:"Trudey",last_name:"Gagg",email:"tgagg1l@webmd.com",date_of_birth:"2016-06-04T22:10:39Z",age:52,country:"China",phone:"6566643109"},
        {id:59,first_name:"Nissa",last_name:"McLagain",email:"nmclagain1m@nhs.uk",date_of_birth:"2015-04-17T18:07:43Z",age:48,country:"Indonesia",phone:"2747697147"},
        {id:60,first_name:"Cherianne",last_name:"Ivakhin",email:"civakhin1n@japanpost.jp",date_of_birth:"1986-03-27T03:15:36Z",age:37,country:"Madagascar",phone:"4471164344"},
        {id:61,first_name:"Myrna",last_name:"Thomlinson",email:"mthomlinson1o@tinypic.com",date_of_birth:"1991-05-29T23:09:49Z",age:36,country:"Malaysia",phone:"4313867084"},
        {id:62,first_name:"Hunter",last_name:"Juster",email:"hjuster1p@devhub.com",date_of_birth:"2005-04-16T08:03:12Z",age:46,country:"China",phone:"8196747617"},
        {id:63,first_name:"Raff",last_name:"Halsworth",email:"rhalsworth1q@youku.com",date_of_birth:"2015-09-27T07:22:34Z",age:40,country:"Indonesia",phone:"7924421227"},
        {id:64,first_name:"Kat",last_name:"Preddle",email:"kpreddle1r@twitpic.com",date_of_birth:"1987-06-28T03:44:38Z",age:45,country:"Peru",phone:"2512277614"},
        {id:65,first_name:"Samara",last_name:"Regglar",email:"sregglar1s@elegantthemes.com",date_of_birth:"2005-05-05T03:10:00Z",age:39,country:"United States",phone:"2535773207"},
        {id:66,first_name:"Sarina",last_name:"Fairest",email:"sfairest1t@google.es",date_of_birth:"2005-09-01T20:35:38Z",age:23,country:"Uzbekistan",phone:"6713074482"},
        {id:67,first_name:"Josy",last_name:"Hitzschke",email:"jhitzschke1u@washingtonpost.com",date_of_birth:"2014-01-04T05:57:30Z",age:55,country:"China",phone:"6128279765"},
        {id:68,first_name:"Michael",last_name:"Viscovi",email:"mviscovi1v@businessinidr.com",date_of_birth:"2019-03-27T10:04:10Z",age:22,country:"Argentina",phone:"6083493037"},
        {id:69,first_name:"Arlena",last_name:"Kinmond",email:"akinmond1w@yolasite.com",date_of_birth:"1994-11-27T18:38:04Z",age:33,country:"Indonesia",phone:"7583463942"},
        {id:70,first_name:"Abigail",last_name:"Okey",email:"aokey1x@de.vu",date_of_birth:"1993-04-26T10:58:24Z",age:30,country:"Cuba",phone:"2438993383"},
        {id:71,first_name:"Erv",last_name:"Paoletto",email:"epaoletto1y@seesaa.net",date_of_birth:"1980-03-10T04:38:40Z",age:32,country:"Cameroon",phone:"7609648254"},
        {id:72,first_name:"Nicole",last_name:"Blowers",email:"nblowers1z@wired.com",date_of_birth:"1978-03-19T04:31:59Z",age:49,country:"Russia",phone:"6784962674"},
        {id:73,first_name:"Burt",last_name:"Dytham",email:"bdytham20@huffingtonpost.com",date_of_birth:"2004-12-24T21:46:30Z",age:58,country:"Serbia",phone:"2793771822"},
        {id:74,first_name:"Allissa",last_name:"Lope",email:"alope21@samsung.com",date_of_birth:"2005-02-12T08:53:47Z",age:19,country:"China",phone:"8221598625"},
        {id:75,first_name:"Sayre",last_name:"Archbold",email:"sarchbold22@icio.us",date_of_birth:"1987-01-25T22:32:22Z",age:49,country:"Iran",phone:"6988431419"},
        {id:76,first_name:"Caty",last_name:"Swatradge",email:"cswatradge23@businessinidr.com",date_of_birth:"2016-07-19T21:45:00Z",age:52,country:"Morocco",phone:"6621582991"},
        {id:77,first_name:"Daffie",last_name:"Windmill",email:"dwindmill24@washingtonpost.com",date_of_birth:"2005-01-01T09:55:14Z",age:41,country:"Sweden",phone:"2433090490"},
        {id:78,first_name:"Maddalena",last_name:"Baird",email:"mbaird25@globo.com",date_of_birth:"1980-08-02T12:48:43Z",age:43,country:"Poland",phone:"9023312384"},
        {id:79,first_name:"Killian",last_name:"L'Archer",email:"klarcher26@geocities.jp",date_of_birth:"1985-05-30T04:59:32Z",age:27,country:"Indonesia",phone:"5091131435"},
        {id:80,first_name:"Editha",last_name:"Millsap",email:"emillsap27@indiegogo.com",date_of_birth:"1994-08-31T17:13:57Z",age:18,country:"Indonesia",phone:"1176370530"},
        {id:81,first_name:"Ola",last_name:"Isenor",email:"oisenor28@irs.gov",date_of_birth:"1975-03-15T05:56:35Z",age:50,country:"Thailand",phone:"2323471722"},
        {id:82,first_name:"Tripp",last_name:"Barrat",email:"tbarrat29@google.co.uk",date_of_birth:"2016-12-03T06:14:18Z",age:41,country:"Portugal",phone:"3392918464"},
        {id:83,first_name:"Ernesto",last_name:"Petrello",email:"epetrello2a@themeforest.net",date_of_birth:"2015-02-07T14:53:47Z",age:48,country:"Japan",phone:"1819474989"},
        {id:84,first_name:"Salome",last_name:"Ratlee",email:"sratlee2b@cafepress.com",date_of_birth:"1983-09-16T11:51:30Z",age:42,country:"China",phone:"8979986442"},
        {id:85,first_name:"Gilli",last_name:"Doig",email:"gdoig2c@apple.com",date_of_birth:"2007-10-07T02:32:11Z",age:26,country:"Philippines",phone:"8079971006"},
        {id:86,first_name:"Orton",last_name:"Poleye",email:"opoleye2d@huffingtonpost.com",date_of_birth:"2011-06-21T11:26:28Z",age:29,country:"Russia",phone:"9048118038"},
        {id:87,first_name:"Zed",last_name:"Ryde",email:"zryde2e@sitemeter.com",date_of_birth:"1988-07-09T07:33:49Z",age:21,country:"Morocco",phone:"2033460112"},
        {id:88,first_name:"Travers",last_name:"Petow",email:"tpetow2f@biglobe.ne.jp",date_of_birth:"2002-07-03T07:10:57Z",age:38,country:"Poland",phone:"3317840072"},
        {id:89,first_name:"Tobie",last_name:"Schleicher",email:"tschleicher2g@google.nl",date_of_birth:"1976-08-29T16:54:19Z",age:26,country:"Sweden",phone:"2391321735"},
        {id:90,first_name:"Jdavie",last_name:"Kopfen",email:"jkopfen2h@shareasale.com",date_of_birth:"1998-05-25T16:59:40Z",age:33,country:"Bolivia",phone:"9294104700"},
        {id:91,first_name:"Elisha",last_name:"Garvagh",email:"egarvagh2i@last.fm",date_of_birth:"1986-05-25T04:25:21Z",age:47,country:"Oman",phone:"7482834587"},
        {id:92,first_name:"Pris",last_name:"Weekland",email:"pweekland2j@latimes.com",date_of_birth:"1980-05-05T13:09:32Z",age:20,country:"Indonesia",phone:"7704017299"},
        {id:93,first_name:"Alvinia",last_name:"Braisher",email:"abraisher2k@symantec.com",date_of_birth:"1999-06-07T18:04:58Z",age:40,country:"Mauritania",phone:"6402964459"},
        {id:94,first_name:"Leanora",last_name:"Patman",email:"lpatman2l@bloomberg.com",date_of_birth:"1990-10-24T12:14:37Z",age:31,country:"Nepal",phone:"2423477217"},
        {id:95,first_name:"Georgetta",last_name:"Derrington",email:"gderrington2m@amazonaws.com",date_of_birth:"1996-02-29T21:31:36Z",age:46,country:"Panama",phone:"2859065673"},
        {id:96,first_name:"Murray",last_name:"Howsego",email:"mhowsego2n@goo.ne.jp",date_of_birth:"2000-04-25T17:50:20Z",age:37,country:"South Korea",phone:"5167063734"},
        {id:97,first_name:"Caroljean",last_name:"Lodder",email:"clodder2o@live.com",date_of_birth:"2004-03-13T11:18:22Z",age:33,country:"China",phone:"6779005870"},
        {id:98,first_name:"Carmella",last_name:"Hunton",email:"chunton2p@cam.ac.uk",date_of_birth:"1981-12-03T08:18:55Z",age:58,country:"China",phone:"2649233158"},
        {id:99,first_name:"Berty",last_name:"Fidy",email:"bfidy2q@wsj.com",date_of_birth:"2010-05-20T19:26:21Z",age:56,country:"Japan",phone:"7701209743"},
        {id:100,first_name:"Joey",last_name:"Regnard",email:"jregnard2r@ted.com",date_of_birth:"1987-01-26T04:51:32Z",age:26,country:"Russia",phone:"2852842249"},
        {id:101,first_name:"Zebulen",last_name:"Chatell",email:"zchatell2s@fc2.com",date_of_birth:"1976-10-03T06:50:41Z",age:44,country:"Indonesia",phone:"1342635982"},
        {id:102,first_name:"Marjory",last_name:"Worsnup",email:"mworsnup2t@who.int",date_of_birth:"1979-03-26T09:44:19Z",age:57,country:"Indonesia",phone:"6984893663"},
        {id:103,first_name:"Aurilia",last_name:"Cousins",email:"acousins2u@1und1.de",date_of_birth:"2000-05-03T10:47:26Z",age:41,country:"Poland",phone:"4442277237"},
        {id:104,first_name:"Helena",last_name:"Burchell",email:"hburchell2v@infoseek.co.jp",date_of_birth:"1975-09-12T00:39:54Z",age:27,country:"Canada",phone:"4086491594"},
        {id:105,first_name:"Zulema",last_name:"MacIlriach",email:"zmacilriach2w@ed.gov",date_of_birth:"1989-01-11T19:06:36Z",age:32,country:"Brazil",phone:"5277901159"},
        {id:106,first_name:"Sergeant",last_name:"Henzer",email:"shenzer2x@1und1.de",date_of_birth:"1971-09-27T22:12:42Z",age:46,country:"Indonesia",phone:"8807821364"},
        {id:107,first_name:"Rubi",last_name:"Blaza",email:"rblaza2y@unc.edu",date_of_birth:"1976-01-23T15:34:55Z",age:55,country:"Canada",phone:"1786740968"},
        {id:108,first_name:"Glynis",last_name:"Dobey",email:"gdobey2z@lycos.com",date_of_birth:"1981-09-25T02:38:15Z",age:29,country:"South Africa",phone:"6719639998"},
        {id:109,first_name:"Diane-marie",last_name:"Leighton",email:"dleighton30@senate.gov",date_of_birth:"1998-04-12T23:16:49Z",age:58,country:"Japan",phone:"6446687005"},
        {id:110,first_name:"Levy",last_name:"Pellew",email:"lpellew31@prlog.org",date_of_birth:"2018-11-09T23:18:27Z",age:53,country:"Peru",phone:"6137456636"},
        {id:111,first_name:"Aila",last_name:"Thorogood",email:"athorogood32@exblog.jp",date_of_birth:"1975-01-19T04:09:11Z",age:27,country:"Russia",phone:"5594789451"},
        {id:112,first_name:"Winifred",last_name:"Albers",email:"walbers33@furl.net",date_of_birth:"1974-07-22T18:54:03Z",age:37,country:"Philippines",phone:"2439838234"},
        {id:113,first_name:"Ema",last_name:"Ronchi",email:"eronchi34@omniture.com",date_of_birth:"2009-03-04T03:07:33Z",age:18,country:"Venezuela",phone:"4367279139"},
        {id:114,first_name:"Gabie",last_name:"Sydney",email:"gsydney35@google.com.hk",date_of_birth:"1992-06-23T06:20:20Z",age:30,country:"Indonesia",phone:"8939262347"},
        {id:115,first_name:"Oralle",last_name:"Lardez",email:"olardez36@indiegogo.com",date_of_birth:"1990-11-13T19:53:54Z",age:39,country:"Portugal",phone:"4359299903"},
        {id:116,first_name:"Sawyer",last_name:"Stubs",email:"sstubs37@macromedia.com",date_of_birth:"2005-07-26T12:35:28Z",age:49,country:"Poland",phone:"1861354169"},
        {id:117,first_name:"Carr",last_name:"Ventum",email:"cventum38@google.com.br",date_of_birth:"1983-08-22T19:42:33Z",age:43,country:"China",phone:"4898905760"},
        {id:118,first_name:"Dolly",last_name:"Shovell",email:"dshovell39@illinois.edu",date_of_birth:"2019-12-09T08:46:33Z",age:27,country:"Nepal",phone:"7357417362"},
        {id:119,first_name:"Vick",last_name:"Wealleans",email:"vwealleans3a@artisteer.com",date_of_birth:"2016-05-27T22:49:51Z",age:43,country:"Canada",phone:"7438739565"},
        {id:120,first_name:"Nilson",last_name:"Artz",email:"nartz3b@answers.com",date_of_birth:"1996-12-09T00:05:09Z",age:46,country:"Philippines",phone:"4274227531"},
        {id:121,first_name:"Brigit",last_name:"Maun",email:"bmaun3c@opera.com",date_of_birth:"2020-09-14T11:33:32Z",age:29,country:"Thailand",phone:"9213749103"},
        {id:122,first_name:"Janis",last_name:"Payze",email:"jpayze3d@dailymail.co.uk",date_of_birth:"2019-04-09T02:50:05Z",age:46,country:"Argentina",phone:"9283159577"},
        {id:123,first_name:"Kerrin",last_name:"Biggam",email:"kbiggam3e@fotki.com",date_of_birth:"1987-03-18T21:59:56Z",age:40,country:"Russia",phone:"5963718207"},
        {id:124,first_name:"Herrick",last_name:"Miranda",email:"hmiranda3f@hostgator.com",date_of_birth:"2013-06-12T16:07:07Z",age:54,country:"Sweden",phone:"1589750048"},
        {id:125,first_name:"Vanya",last_name:"Aris",email:"varis3g@ovh.net",date_of_birth:"1973-03-10T18:53:47Z",age:20,country:"Portugal",phone:"7612184227"},
        {id:126,first_name:"Orlando",last_name:"idoor",email:"oidoor3h@free.fr",date_of_birth:"1997-03-07T16:20:06Z",age:41,country:"China",phone:"8889320498"},
        {id:127,first_name:"Jorrie",last_name:"Magson",email:"jmagson3i@moonfruit.com",date_of_birth:"2008-10-25T22:38:17Z",age:55,country:"Brazil",phone:"3171545938"},
        {id:128,first_name:"Madelaine",last_name:"Iamittii",email:"miamittii3j@blogs.com",date_of_birth:"2017-03-26T14:55:12Z",age:39,country:"China",phone:"4655330707"},
        {id:129,first_name:"Margareta",last_name:"Kloster",email:"mkloster3k@phpbb.com",date_of_birth:"1993-09-25T05:15:43Z",age:40,country:"Colombia",phone:"2185182141"},
        {id:130,first_name:"Hali",last_name:"Lanfranconi",email:"hlanfranconi3l@dailymotion.com",date_of_birth:"1972-08-26T19:51:00Z",age:19,country:"China",phone:"8927325743"},
        {id:131,first_name:"Denver",last_name:"Volante",email:"dvolante3m@smugmug.com",date_of_birth:"1999-09-02T21:47:10Z",age:23,country:"Colombia",phone:"9409218270"},
        {id:132,first_name:"Eydie",last_name:"Willshere",email:"ewillshere3n@uiuc.edu",date_of_birth:"1982-08-20T07:33:04Z",age:34,country:"China",phone:"5725605932"},
        {id:133,first_name:"Napoleon",last_name:"Streatfeild",email:"nstreatfeild3o@latimes.com",date_of_birth:"1977-08-06T15:54:17Z",age:36,country:"Nigeria",phone:"2282453361"},
        {id:134,first_name:"Rubia",last_name:"Bevington",email:"rbevington3p@zdnet.com",date_of_birth:"1982-03-01T21:15:36Z",age:24,country:"Poland",phone:"1322897920"},
        {id:135,first_name:"Garland",last_name:"Meddick",email:"gmeddick3q@yellowbook.com",date_of_birth:"2013-07-17T22:30:09Z",age:58,country:"Ireland",phone:"6354225096"},
        {id:136,first_name:"Lulu",last_name:"Georgot",email:"lgeorgot3r@home.pl",date_of_birth:"1981-01-17T14:15:01Z",age:50,country:"Indonesia",phone:"5948217286"},
        {id:137,first_name:"Lisabeth",last_name:"Soldi",email:"lsoldi3s@tumblr.com",date_of_birth:"2001-02-14T15:49:36Z",age:46,country:"Indonesia",phone:"5091605825"},
        {id:138,first_name:"Bird",last_name:"Wastell",email:"bwastell3t@unc.edu",date_of_birth:"1978-12-31T23:37:37Z",age:38,country:"Democratic Republic of the Congo",phone:"2129929714"},
        {id:139,first_name:"Jaclyn",last_name:"Morrilly",email:"jmorrilly3u@va.gov",date_of_birth:"1998-03-05T23:54:59Z",age:32,country:"Czech Republic",phone:"6779755968"},
        {id:140,first_name:"Betteanne",last_name:"Almon",email:"balmon3v@epa.gov",date_of_birth:"1994-12-03T13:08:52Z",age:43,country:"China",phone:"4636902854"},
        {id:141,first_name:"Shaughn",last_name:"Partrick",email:"spartrick3w@va.gov",date_of_birth:"1999-10-16T03:55:02Z",age:58,country:"Philippines",phone:"9495810540"},
        {id:142,first_name:"Claudio",last_name:"Gahagan",email:"cgahagan3x@apple.com",date_of_birth:"1985-03-13T16:52:15Z",age:38,country:"Cameroon",phone:"3989765002"},
        {id:143,first_name:"Aggi",last_name:"Flindall",email:"aflindall3y@wix.com",date_of_birth:"1990-04-28T17:41:16Z",age:27,country:"United States",phone:"7028302030"},
        {id:144,first_name:"Rufus",last_name:"Pahler",email:"rpahler3z@mayoclinic.com",date_of_birth:"1991-11-02T10:15:51Z",age:50,country:"China",phone:"2941648302"},
        {id:145,first_name:"Maurise",last_name:"Tibbs",email:"mtibbs40@latimes.com",date_of_birth:"1993-06-06T04:41:20Z",age:54,country:"United States",phone:"9545272495"},
        {id:146,first_name:"Tedie",last_name:"McTavish",email:"tmctavish41@prlog.org",date_of_birth:"2019-03-01T18:24:34Z",age:36,country:"Russia",phone:"9975470221"},
        {id:147,first_name:"Deena",last_name:"Hearnes",email:"dhearnes42@google.com.hk",date_of_birth:"2007-04-28T04:00:21Z",age:36,country:"Indonesia",phone:"9599119958"},
        {id:148,first_name:"Harri",last_name:"Glencross",email:"hglencross43@ameblo.jp",date_of_birth:"1986-01-06T23:16:54Z",age:55,country:"Portugal",phone:"5606621344"},
        {id:149,first_name:"Kacey",last_name:"Gillespie",email:"kgillespie44@pcworld.com",date_of_birth:"2006-09-11T07:59:32Z",age:38,country:"Portugal",phone:"4353315855"},
        {id:150,first_name:"Kelvin",last_name:"Mixhel",email:"kmixhel45@wikispaces.com",date_of_birth:"1971-06-07T02:47:59Z",age:21,country:"China",phone:"8128454516"},
        {id:151,first_name:"Tynan",last_name:"Gatling",email:"tgatling46@macromedia.com",date_of_birth:"1992-03-10T16:00:49Z",age:43,country:"United States",phone:"8591240265"},
        {id:152,first_name:"Emlyn",last_name:"Waight",email:"ewaight47@qq.com",date_of_birth:"1979-02-16T22:34:52Z",age:35,country:"China",phone:"1896407153"},
        {id:153,first_name:"Katha",last_name:"Woloschinski",email:"kwoloschinski48@cdc.gov",date_of_birth:"2008-04-04T12:23:44Z",age:42,country:"Luxembourg",phone:"5667808167"},
        {id:154,first_name:"Timothea",last_name:"Adnet",email:"tadnet49@fotki.com",date_of_birth:"2019-09-05T01:20:28Z",age:21,country:"Thailand",phone:"3749301332"},
        {id:155,first_name:"Casi",last_name:"L'Archer",email:"clarcher4a@phoca.cz",date_of_birth:"1977-05-26T01:36:44Z",age:19,country:"Sudan",phone:"6948246487"},
        {id:156,first_name:"Katrina",last_name:"Dannel",email:"kdannel4b@zdnet.com",date_of_birth:"1999-05-01T10:29:51Z",age:50,country:"Russia",phone:"8584778274"},
        {id:157,first_name:"Carlo",last_name:"Jenno",email:"cjenno4c@yellowpages.com",date_of_birth:"1989-06-04T20:23:25Z",age:41,country:"China",phone:"2819476413"},
        {id:158,first_name:"Tanya",last_name:"Hillum",email:"thillum4d@indiatimes.com",date_of_birth:"1988-11-01T12:34:18Z",age:53,country:"Indonesia",phone:"3253598199"},
        {id:159,first_name:"Hamilton",last_name:"Wellington",email:"hwellington4e@topsy.com",date_of_birth:"1993-08-07T13:41:41Z",age:49,country:"Tanzania",phone:"9938683742"},
        {id:160,first_name:"Judon",last_name:"Fozzard",email:"jfozzard4f@nasa.gov",date_of_birth:"2014-09-16T18:25:04Z",age:48,country:"Venezuela",phone:"3968022740"},
        {id:161,first_name:"Drucy",last_name:"Harvison",email:"dharvison4g@prnewswire.com",date_of_birth:"2012-02-21T01:14:25Z",age:21,country:"Brazil",phone:"4698193176"},
        {id:162,first_name:"Mattie",last_name:"Minerdo",email:"mminerdo4h@army.mil",date_of_birth:"2002-07-31T17:38:58Z",age:38,country:"Indonesia",phone:"4802662353"},
        {id:163,first_name:"Ridr",last_name:"Freshwater",email:"rfreshwater4i@printfriendly.com",date_of_birth:"2010-02-10T19:24:04Z",age:31,country:"China",phone:"8156406628"},
        {id:164,first_name:"Perle",last_name:"Sheirlaw",email:"psheirlaw4j@eventbrite.com",date_of_birth:"2009-11-29T10:06:04Z",age:49,country:"China",phone:"7878012246"},
        {id:165,first_name:"Mady",last_name:"Lewcock",email:"mlewcock4k@usa.gov",date_of_birth:"1987-03-18T17:11:45Z",age:53,country:"Yemen",phone:"4614362406"},
        {id:166,first_name:"Dallas",last_name:"Crowne",email:"dcrowne4l@taobao.com",date_of_birth:"1994-06-14T07:25:33Z",age:45,country:"Russia",phone:"8356308242"},
        {id:167,first_name:"Fredericka",last_name:"Jullian",email:"fjullian4m@google.pl",date_of_birth:"1987-04-07T06:00:10Z",age:28,country:"Venezuela",phone:"9048737653"},
        {id:168,first_name:"Kory",last_name:"Paladini",email:"kpaladini4n@wikipedia.org",date_of_birth:"2015-10-03T18:22:58Z",age:28,country:"Chile",phone:"7593536528"},
        {id:169,first_name:"Rafaello",last_name:"Samide",email:"rsamide4o@accuweather.com",date_of_birth:"2016-09-04T11:07:27Z",age:52,country:"Thailand",phone:"8731271461"},
        {id:170,first_name:"Dav",last_name:"Seale",email:"dseale4p@vimeo.com",date_of_birth:"1973-07-21T07:44:22Z",age:29,country:"Philippines",phone:"4666679196"},
        {id:171,first_name:"Lisa",last_name:"Askaw",email:"laskaw4q@wiley.com",date_of_birth:"1973-08-22T08:39:18Z",age:53,country:"China",phone:"2247775769"},
        {id:172,first_name:"Tris",last_name:"Krelle",email:"tkrelle4r@howstuffworks.com",date_of_birth:"1995-01-22T15:04:13Z",age:56,country:"Syria",phone:"4916363765"},
    ]

    const [customers, setCustomers] = useState(null);
    
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        first_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        last_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        country: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        // For using custom filters, you must set FilterMatchMode.CUSTOM to matchMode.
        activity: { value: null, matchMode: FilterMatchMode.CUSTOM },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        // CustomerService.getCustomersMedium().then((data) => {
            // setCustomers(getCustomers(myData));
            setLoading(false);
        // });
    }, []); 

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <IconField iconPosition="left" className='p-2'>
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" className='p-2'/>
                </IconField>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
    };

    const representativeRowFilterTemplate = (options) => {
        return (
            <MultiSelect
                value={options.value}
                options={representatives}
                itemTemplate={representativesItemTemplate}
                onChange={(e) => options.filterApplyCallback(e.value)}
                optionLabel="name"
                placeholder="Any"
                className="p-column-filter"
                maxSelectedLabels={1}
                style={{ minWidth: '14rem' }}
            />
        );
    };

    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };

    const verifiedRowFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />;
    };

    const activityRowFilterTemplate = (options) => {
        const [from, to] = options.value ?? [null, null];

        return (
            <div className="flex gap-1">
                <InputNumber value={from} onChange={(e) => options.filterApplyCallback([e.value, to])} className="w-full" placeholder="from" />
                <InputNumber value={to} onChange={(e) => options.filterApplyCallback([from, e.value])} className="w-full" placeholder="to" />
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found." 
                    className='shadow-2xl p-5 rounded-lg text-center'>
                <Column field="first_name" header="First Name" filter filterPlaceholder="Search by first name" style={{ minWidth: '12rem' }}  className='text-sm p-2'/>
                <Column field="last_name" header="Last Name" filter filterPlaceholder="Search by last name" style={{ minWidth: '12rem' }} className='text-sm p-2' />
                <Column header="country" filterField="country" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country"  className='text-sm p-2'/>
                {/* <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeRowFilterTemplate} />
                <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} /> */}
            </DataTable>
        </div>
    );
}
        