// Version 5.0 - I'll get around to cleaning up the code someday

var url;
var seed;
var hashed;

var firstNames=["Aaron","Abdul","Abel","Abraham","Abram","Adam","Adan","Adolfo","Adrain","Adrian","Agustin","Ahmad","Al","Alan","Albert","Alberto","Aldo","Alec","Alejandro","Alex","Alexander","Alexis","Alfonso","Alfonzo","Alfred","Alfredo","Ali","Allan","Allen","Alonzo","Alphonso","Alton","Alvaro","Alvin","Amos","Amy","Anderson","Andra","Andre","Andrea","Andreas","Andres","Andrew","Andy","Angel","Angela","Angelo","Anthony","Antione","Antoine","Anton","Antonia","Antonio","Antony","Antwan","Antwon","Archie","Ari","Aric","Ariel","Armando","Arnold","Arnulfo","Aron","Arron","Arthur","Arturo","Ashley","Aubrey","August","Augustine","Aurelio","Austin","Avery","Barney","Baron","Barrett","Barry","Bart","Barton","Beau","Ben","Benito","Benjamin","Bennett","Bennie","Benny","Bernard","Bernardo","Bert","Bill","Billie","Billy","Blaine","Blair","Blake","Bob","Bobbie","Bobby","Boyd","Brad","Braden","Bradford","Bradley","Bradly","Brady","Brain","Branden","Brandon","Brandy","Brannon","Brant","Brendan","Brendon","Brennan","Brent","Brenton","Bret","Brett","Brian","Brice","Brien","Britt","Brock","Broderick","Bronson","Brook","Brooks","Bruce","Bryan","Bryant","Bryce","Bryon","Buck","Buddy","Burton","Byron","Cale","Caleb","Calvin","Cameron","Carey","Carl","Carlo","Carlos","Carlton","Carmelo","Carmen","Carroll","Carson","Carter","Cary","Casey","Cecil","Cedric","Cedrick","Cesar","Chad","Chadd","Chadrick","Chadwick","Chaim","Chance","Charles","Charley","Charlie","Chase","Chauncey","Che","Chester","Chet","Chris","Christian","Christoper","Christopher","Chuck","Clarence","Clark","Claude","Clay","Clayton","Cleveland","Cliff","Clifford","Clifton","Clint","Clinton","Clyde","Coby","Cody","Colby","Cole","Colin","Collin","Conrad","Constantine","Cordell","Corey","Cornelius","Cornell","Cortez","Cortney","Cory","Courtney","Coy","Craig","Cristopher","Cruz","Curt","Curtis","Cyrus","Dale","Dallas","Dameon","Damian","Damien","Damion","Damon","Damond","Dan","Dana","Dane","Danial","Daniel","Dannie","Danny","Dante","Darby","Daren","Darian","Darin","Darius","Darnell","Daron","Darrel","Darrell","Darren","Darrick","Darrin","Darron","Darryl","Darwin","Daryl","Dave","David","Davin","Davis","Dax","Dean","Deandre","Deangelo","Dedric","Dedrick","Dejuan","Delbert","Delvin","Demarcus","Demetrius","Demond","Denis","Dennis","Denny","Denver","Deon","Dereck","Derek","Deric","Derick","Derik","Deron","Derrick","Deshawn","Desmond","Devin","Devon","Dewayne","Dewey","Dexter","Diego","Dino","Dion","Dirk","Domingo","Dominic","Dominick","Dominique","Don","Donald","Donavan","Donell","Donnell","Donnie","Donny","Donovan","Donta","Donte","Dorian","Doug","Douglas","Douglass","Doyle","Drew","Duane","Duncan","Dustin","Dusty","Dwain","Dwayne","Dwight","Dylan","Earl","Earnest","Eddie","Eddy","Edgar","Edgardo","Edmond","Edmund","Eduardo","Edward","Edwardo","Edwin","Efrain","Efren","Elbert","Eldon","Eli","Elias","Elijah","Eliseo","Elliot","Elliott","Ellis","Elmer","Eloy","Elton","Elvin","Elvis","Emanuel","Emery","Emil","Emilio","Emmanuel","Emmett","Enrique","Eric","Erich","Erick","Erik","Erin","Ernest","Ernesto","Ernie","Errol","Ervin","Erwin","Esteban","Ethan","Eugene","Evan","Everett","Ezekiel","Ezra","Fabian","Federico","Felipe","Felix","Fernando","Fidel","Floyd","Forest","Forrest","Francesco","Francis","Francisco","Franco","Frank","Frankie","Franklin","Fred","Freddie","Freddy","Frederic","Frederick","Fredrick","Gabriel","Galen","Garland","Garret","Garrett","Garrick","Garry","Garth","Gary","Gavin","Genaro","Gene","Geoffrey","George","Gerald","Gerard","Gerardo","Germaine","German","Gerry","Gilbert","Gilberto","Gino","Giovanni","Giuseppe","Glen","Glenn","Gonzalo","Gordon","Grady","Graham","Grant","Greg","Gregg","Greggory","Gregorio","Gregory","Grover","Guadalupe","Guillermo","Gus","Gustavo","Guy","Hal","Hank","Hans","Harlan","Harley","Harold","Harrison","Harry","Harvey","Hassan","Heath","Hector","Henry","Herbert","Heriberto","Herman","Hiram","Homer","Horace","Howard","Hubert","Hugh","Hugo","Humberto","Hunter","Ian","Ignacio","Ira","Irvin","Irving","Isaac","Isaiah","Isidro","Ismael","Israel","Issac","Ivan","Jabari","Jack","Jackie","Jackson","Jacob","Jacques","Jade","Jaime","Jake","Jamaal","Jamal","Jamar","Jameel","Jamel","James","Jameson","Jamey","Jamie","Jamil","Jamin","Jamison","Jammie","Jan","Jared","Jarod","Jarred","Jarrett","Jarrod","Jarvis","Jasen","Jason","Jasper","Javier","Jay","Jayme","Jayson","Jean","Jed","Jedediah","Jeff","Jefferey","Jefferson","Jeffery","Jeffrey","Jeffry","Jennifer","Jerad","Jerald","Jeramie","Jeramy","Jered","Jereme","Jeremey","Jeremiah","Jeremie","Jeremy","Jermaine","Jermey","Jerod","Jerome","Jeromy","Jerrod","Jerrold","Jerry","Jess","Jesse","Jessie","Jesus","Jevon","Jim","Jimmie","Jimmy","Joaquin","Jody","Joe","Joel","Joesph","Joey","John","Johnathan","Johnathon","Johnnie","Johnny","Jon","Jonah","Jonas","Jonathan","Jonathon","Jordan","Jorge","Jose","Josef","Joseph","Josh","Joshua","Josiah","Josue","Jovan","Juan","Judd","Jude","Judson","Julian","Julio","Julius","Junior","Justin","Kareem","Karl","Kasey","Keenan","Keith","Kelley","Kelly","Kelsey","Kelvin","Ken","Kendall","Kendrick","Kenneth","Kennith","Kenny","Kent","Kenton","Kenya","Kenyatta","Kenyon","Kermit","Kerry","Keven","Kevin","Kim","Kimberly","Kip","Kirby","Kirk","Kirt","Korey","Kory","Kraig","Kris","Kristian","Kristofer","Kristoffer","Kristopher","Kurt","Kurtis","Kyle","Lamar","Lamont","Lance","Landon","Lane","Lanny","Laron","Larry","Lars","Lashawn","Laurence","Lavar","Lawrence","Lee","Leif","Leland","Lenny","Leo","Leon","Leonard","Leonardo","Leonel","Leopoldo","Leroy","Leslie","Lester","Levar","Levi","Lewis","Liam","Lincoln","Lindsey","Linwood","Lionel","Lisa","Lloyd","Logan","Lon","Lonnie","Lonny","Loren","Lorenzo","Louie","Louis","Lowell","Lucas","Luis","Luke","Luther","Lyle","Lynn","Mack","Malcolm","Malik","Manuel","Marc","Marcel","Marcellus","Marco","Marcos","Marcus","Mariano","Mario","Marion","Mark","Markus","Marlin","Marlon","Marques","Marquis","Marshall","Martin","Marty","Marvin","Mason","Mathew","Matt","Matthew","Maurice","Mauricio","Max","Maxwell","Melissa","Melvin","Merle","Micah","Michael","Michale","Micheal","Michel","Michelle","Mickey","Miguel","Mike","Mikel","Miles","Milton","Mitchel","Mitchell","Moises","Monte","Monty","Morgan","Morris","Moses","Moshe","Myles","Myron","Nakia","Nathan","Nathanael","Nathanial","Nathaniel","Neal","Ned","Neil","Nelson","Nestor","Nicholas","Nick","Nickolas","Nicky","Nicolas","Nigel","Noah","Noe","Noel","Nolan","Norberto","Norman","Norris","Octavio","Oliver","Omar","Orlando","Oscar","Osvaldo","Otis","Owen","Pablo","Paris","Pat","Patrick","Paul","Paulo","Pedro","Percy","Perry","Pete","Peter","Phil","Philip","Phillip","Pierre","Preston","Quentin","Quincy","Quinn","Quintin","Quinton","Rafael","Raheem","Rahsaan","Ralph","Ramiro","Ramon","Randal","Randall","Randell","Randolph","Randy","Raphael","Rashad","Rasheed","Raul","Ray","Raymond","Raymundo","Reed","Reggie","Reginald","Reid","Rene","Reuben","Rex","Reynaldo","Rhett","Ricardo","Richard","Richie","Rick","Rickey","Rickie","Ricky","Rico","Rigoberto","Riley","Rob","Robb","Robbie","Robby","Robert","Roberto","Robin","Rocco","Rocky","Rod","Roderick","Rodger","Rodney","Rodolfo","Rodrick","Rodrigo","Rogelio","Roger","Roland","Rolando","Roman","Ron","Ronald","Ronnie","Ronny","Roosevelt","Rory","Roscoe","Ross","Roy","Royce","Ruben","Rudolph","Rudy","Rufus","Russel","Russell","Rusty","Ryan","Salvador","Salvatore","Sam","Sammie","Sammy","Samuel","Sandy","Santiago","Santos","Saul","Scot","Scott","Scottie","Scotty","Sean","Sebastian","Sedrick","Seneca","Sergio","Seth","Shad","Shane","Shannon","Shanon","Shaun","Shawn","Shay","Shayne","Shea","Shelby","Sheldon","Shelton","Sherman","Shon","Sidney","Silas","Simon","Solomon","Sonny","Spencer","Stacey","Stacy","Stanley","Stefan","Stephan","Stephen","Sterling","Steve","Steven","Stevie","Stewart","Stuart","Sylvester","Tad","Tanner","Tarik","Tate","Taurus","Tavares","Taylor","Ted","Teddy","Telly","Terence","Terrance","Terrell","Terrence","Terrill","Terry","Thad","Thaddeus","Theodore","Theron","Thomas","Thurman","Tim","Timmothy","Timmy","Timothy","Titus","Tobias","Tobin","Toby","Tod","Todd","Tom","Tomas","Tommie","Tommy","Tony","Torrance","Torrence","Torrey","Tory","Tracey","Tracy","Travis","Tremayne","Trent","Trenton","Trever","Trevor","Trey","Trinity","Tristan","Troy","Ty","Tyler","Tyree","Tyron","Tyrone","Tyson","Ulysses","Van","Vance","Vaughn","Vernon","Vicente","Victor","Vince","Vincent","Virgil","Vito","Wade","Wallace","Walter","Warren","Waylon","Wayne","Wendell","Wesley","Weston","Whitney","Wilbert","Wilbur","Wilfred","Wilfredo","Will","Willard","William","Willie","Willis","Wilson","Winston","Woodrow","Wyatt","Xavier","Zachariah","Zachary","Zachery","Zane"];
var lastNames=["Abbott","Acevedo","Acosta","Adams","Adkins","Aguilar","Aguirre","Albert","Alexander","Alford","Allen","Allison","Alston","Alvarado","Alvarez","Anderson","Andrews","Anthony","Armstrong","Arnold","Ashley","Atkins","Atkinson","Austin","Avery","Avila","Ayala","Ayers","Bailey","Baird","Baker","Baldwin","Ball","Ballard","Banks","Barber","Barker","Barlow","Barnes","Barnett","Barr","Barrera","Barrett","Barron","Barry","Bartlett","Barton","Bass","Bates","Battle","Bauer","Baxter","Beach","Bean","Beard","Beasley","Beck","Becker","Bell","Bender","Benjamin","Bennett","Benson","Bentley","Benton","Berg","Berger","Bernard","Berry","Best","Bird","Bishop","Black","Blackburn","Blackwell","Blair","Blake","Blanchard","Blankenship","Blevins","Bolton","Bond","Bonner","Booker","Boone","Booth","Bowen","Bowers","Bowman","Boyd","Boyer","Boyle","Bradford","Bradley","Bradshaw","Brady","Branch","Bray","Brennan","Brewer","Bridges","Briggs","Bright","Britt","Brock","Brooks","Brown","Browning","Bruce","Bryan","Bryant","Buchanan","Buck","Buckley","Buckner","Bullock","Burch","Burgess","Burke","Burks","Burnett","Burns","Burris","Burt","Burton","Bush","Butler","Byers","Byrd","Cabrera","Cain","Calderon","Caldwell","Calhoun","Callahan","Camacho","Cameron","Campbell","Campos","Cannon","Cantrell","Cantu","Cardenas","Carey","Carlson","Carney","Carpenter","Carr","Carrillo","Carroll","Carson","Carter","Carver","Case","Casey","Cash","Castaneda","Castillo","Castro","Cervantes","Chambers","Chan","Chandler","Chaney","Chang","Chapman","Charles","Chase","Chavez","Chen","Cherry","Christensen","Christian","Church","Clark","Clarke","Clay","Clayton","Clements","Clemons","Cleveland","Cline","Cobb","Cochran","Coffey","Cohen","Cole","Coleman","Collier","Collins","Colon","Combs","Compton","Conley","Conner","Conrad","Contreras","Conway","Cook","Cooke","Cooley","Cooper","Copeland","Cortez","Cote","Cotton","Cox","Craft","Craig","Crane","Crawford","Crosby","Cross","Cruz","Cummings","Cunningham","Curry","Curtis","Dale","Dalton","Daniel","Daniels","Daugherty","Davenport","David","Davidson","Davis","Dawson","Day","Dean","Decker","Dejesus","Delacruz","Delaney","Deleon","Delgado","Dennis","Diaz","Dickerson","Dickson","Dillard","Dillon","Dixon","Dodson","Dominguez","Donaldson","Donovan","Dorsey","Dotson","Douglas","Downs","Doyle","Drake","Dudley","Duffy","Duke","Duncan","Dunlap","Dunn","Duran","Durham","Dyer","Eaton","Edwards","Elliott","Ellis","Ellison","Emerson","England","English","Erickson","Espinoza","Estes","Estrada","Evans","Everett","Ewing","Farley","Farmer","Farrell","Faulkner","Ferguson","Fernandez","Ferrell","Fields","Figueroa","Finch","Finley","Fischer","Fisher","Fitzgerald","Fitzpatrick","Fleming","Fletcher","Flores","Flowers","Floyd","Flynn","Foley","Forbes","Ford","Foreman","Foster","Fowler","Fox","Francis","Franco","Frank","Franklin","Franks","Frazier","Frederick","Freeman","French","Frost","Fry","Frye","Fuentes","Fuller","Fulton","Gaines","Gallagher","Gallegos","Galloway","Gamble","Garcia","Gardner","Garner","Garrett","Garrison","Garza","Gates","Gay","Gentry","George","Gibbs","Gibson","Gilbert","Giles","Gill","Gillespie","Gilliam","Gilmore","Glass","Glenn","Glover","Goff","Golden","Gomez","Gonzales","Gonzalez","Good","Goodman","Goodwin","Gordon","Gould","Graham","Grant","Graves","Gray","Green","Greene","Greer","Gregory","Griffin","Griffith","Grimes","Gross","Guerra","Guerrero","Guthrie","Gutierrez","Guy","Guzman","Hahn","Hale","Haley","Hall","Hamilton","Hammond","Hampton","Hancock","Haney","Hansen","Hanson","Hardin","Harding","Hardy","Harmon","Harper","Harrell","Harrington","Harris","Harrison","Hart","Hartman","Harvey","Hatfield","Hawkins","Hayden","Hayes","Haynes","Hays","Head","Heath","Hebert","Henderson","Hendricks","Hendrix","Henry","Hensley","Henson","Herman","Hernandez","Herrera","Herring","Hess","Hester","Hewitt","Hickman","Hicks","Higgins","Hill","Hines","Hinton","Hobbs","Hodge","Hodges","Hoffman","Hogan","Holcomb","Holden","Holder","Holland","Holloway","Holman","Holmes","Holt","Hood","Hooper","Hoover","Hopkins","Hopper","Horn","Horne","Horton","House","Houston","Howard","Howe","Howell","Hubbard","Huber","Hudson","Huff","Huffman","Hughes","Hull","Humphrey","Hunt","Hunter","Hurley","Hurst","Hutchinson","Hyde","Ingram","Irwin","Jackson","Jacobs","Jacobson","James","Jarvis","Jefferson","Jenkins","Jennings","Jensen","Jimenez","Johns","Johnson","Johnston","Jones","Jordan","Joseph","Joyce","Joyner","Juarez","Justice","Kane","Kaufman","Keith","Keller","Kelley","Kelly","Kemp","Kennedy","Kent","Kerr","Key","Kidd","Kim","King","Kinney","Kirby","Kirk","Kirkland","Klein","Kline","Knapp","Knight","Knowles","Knox","Koch","Kramer","Lamb","Lambert","Lancaster","Landry","Lane","Lang","Langley","Lara","Larsen","Larson","Lawrence","Lawson","Le","Leach","Leblanc","Lee","Leon","Leonard","Lester","Levine","Levy","Lewis","Lindsay","Lindsey","Little","Livingston","Lloyd","Logan","Long","Lopez","Lott","Love","Lowe","Lowery","Lucas","Luna","Lynch","Lynn","Lyons","MacDonald","Macias","Mack","Madden","Maddox","Maldonado","Malone","Mann","Manning","Marks","Marquez","Marsh","Marshall","Martin","Martinez","Mason","Massey","Mathews","Mathis","Matthews","Maxwell","May","Mayer","Maynard","Mayo","Mays","McBride","McCall","McCarthy","McCarty","McClain","McClure","McConnell","McCormick","McCoy","McCray","McCullough","McDaniel","McDonald","McDowell","McFadden","McFarland","McGee","McGowan","McGuire","McIntosh","McIntyre","McKay","McKee","McKenzie","McKinney","McKnight","McLaughlin","McLean","McLeod","McMahon","McMillan","McNeil","McPherson","Meadows","Medina","Mejia","Melendez","Melton","Mendez","Mendoza","Mercado","Mercer","Merrill","Merritt","Meyer","Meyers","Michael","Middleton","Miles","Miller","Mills","Miranda","Mitchell","Molina","Monroe","Montgomery","Montoya","Moody","Moon","Mooney","Moore","Morales","Moran","Moreno","Morgan","Morin","Morris","Morrison","Morrow","Morse","Morton","Moses","Mosley","Moss","Mueller","Mullen","Mullins","Munoz","Murphy","Murray","Myers","Nash","Navarro","Neal","Nelson","Newman","Newton","Nguyen","Nichols","Nicholson","Nielsen","Nieves","Nixon","Noble","Noel","Nolan","Norman","Norris","Norton","Nunez","O'Brien","Ochoa","O'Connor","Odom","O'Donnell","Oliver","Olsen","Olson","O'Neal","O'Neil","O'Neill","Orr","Ortega","Ortiz","Osborn","Osborne","Owen","Owens","Pace","Pacheco","Padilla","Page","Palmer","Park","Parker","Parks","Parrish","Parsons","Pate","Patel","Patrick","Patterson","Patton","Paul","Payne","Pearson","Peck","Pena","Pennington","Perez","Perkins","Perry","Peters","Petersen","Peterson","Petty","Phelps","Phillips","Pickett","Pierce","Pittman","Pitts","Pollard","Poole","Pope","Porter","Potter","Potts","Powell","Powers","Pratt","Preston","Price","Prince","Pruitt","Puckett","Pugh","Quinn","Ramirez","Ramos","Ramsey","Randall","Randolph","Rasmussen","Ratliff","Ray","Raymond","Reed","Reese","Reeves","Reid","Reilly","Reyes","Reynolds","Rhodes","Rice","Rich","Richard","Richards","Richardson","Richmond","Riddle","Riggs","Riley","Rios","Rivas","Rivera","Rivers","Roach","Robbins","Roberson","Roberts","Robertson","Robinson","Robles","Rocha","Rodgers","Rodriguez","Rodriquez","Rogers","Rojas","Rollins","Roman","Romero","Rosa","Rosales","Rosario","Rose","Ross","Roth","Rowe","Rowland","Roy","Ruiz","Rush","Russell","Russo","Rutledge","Ryan","Salas","Salazar","Salinas","Sampson","Sanchez","Sanders","Sandoval","Sanford","Santana","Santiago","Santos","Sargent","Saunders","Savage","Sawyer","Schmidt","Schneider","Schroeder","Schultz","Schwartz","Scott","Sears","Sellers","Serrano","Sexton","Shaffer","Shannon","Sharp","Sharpe","Shaw","Shelton","Shepard","Shepherd","Sheppard","Sherman","Shields","Short","Silva","Simmons","Simon","Simpson","Sims","Singleton","Skinner","Slater","Sloan","Small","Smith","Snider","Snow","Snyder","Solis","Solomon","Sosa","Soto","Sparks","Spears","Spence","Spencer","Stafford","Stanley","Stanton","Stark","Steele","Stein","Stephens","Stephenson","Stevens","Stevenson","Stewart","Stokes","Stone","Stout","Strickland","Strong","Stuart","Suarez","Sullivan","Summers","Sutton","Swanson","Sweeney","Sweet","Sykes","Talley","Tanner","Tate","Taylor","Terrell","Terry","Thomas","Thompson","Thornton","Tillman","Todd","Torres","Townsend","Tran","Travis","Trevino","Trujillo","Tucker","Turner","Tyler","Tyson","Underwood","Valdez","Valencia","Valentine","Valenzuela","Vance","Vang","Vargas","Vasquez","Vaughan","Vaughn","Vazquez","Vega","Velasquez","Velazquez","Velez","Villarreal","Vincent","Vinson","Wade","Wagner","Walker","Wall","Wallace","Waller","Walls","Walsh","Walter","Walters","Walton","Ward","Ware","Warner","Warren","Washington","Waters","Watkins","Watson","Watts","Weaver","Webb","Weber","Webster","Weeks","Weiss","Welch","Wells","West","Wheeler","Whitaker","White","Whitehead","Whitfield","Whitley","Whitney","Wiggins","Wilcox","Wilder","Wiley","Wilkerson","Wilkins","Wilkinson","William","Williams","Williamson","Willis","Wilson","Winters","Wise","Witt","Wolf","Wolfe","Wong","Wood","Woodard","Woods","Woodward","Wooten","Workman","Wright","Wyatt","Wynn","Yang","Yates","York","Young","Zamora","Zimmerman"];

function parseDomain(url) {
	url = url.toLowerCase();
	if (url.indexOf('//') > -1) url = url.substring(url.indexOf('//')+2);
	if (url.indexOf('/') > -1) url = url.substring(0, url.indexOf('/'));
	
	// This seems to be a pretty solid domain with subdomains stripped
	// It'll fail when the domain is less than 4 characters
	var sections = url.split('.').reverse();
	for (var i = 1; i < sections.length; i++) {
		if (sections[i].length >= 4) {
			break;
		}							
	}
	url = url.substring(url.indexOf(sections[i]));
	return url;
}

function showSeed() {
	document.getElementById('seed').style.display = 'block';
	document.getElementById('seedbtn').style.display = 'none';
	document.getElementById('seed').focus();
	document.getElementById('seed').select();
}

function hideSeed() {
	document.getElementById('seed').style.display = 'none';
	document.getElementById('seedbtn').style.display = 'block';
}

function generateHash(url, seed) {
	hashURL = new jsSHA(url, 'ASCII').getHash('SHA-512', 'HEX');
	hashSeed = new jsSHA(seed, 'ASCII').getHash('SHA-512', 'HEX');
	return new jsSHA(hashURL + hashSeed, 'ASCII').getHash('SHA-512', 'HEX');    
}

function getEntropy(maxSize) {
	bytes = Math.ceil(Math.log(maxSize) / Math.log(16));
	if (bytes > hashed.length) {
		return 'Not enough entropy!'; // When another version goes over the 512 bits we have, this'll come in handy
	}
	
	hex = hashed.substring(0, bytes);
	hashed = hashed.substring(bytes);
	
	dec = parseInt(hex, 16);
	
	return dec % maxSize;
}

function getName() {
	nameIndex = getEntropy(1000*1000);
	firstName = firstNames[nameIndex % 1000];
	lastName = lastNames[Math.floor(nameIndex / 1000)];
	
	return new Array(firstName, lastName);
}

function getDOB() {
	daysExtra = getEntropy(4096);
	dob = new Date('1980/01/01');
	dob.setDate(dob.getDate() + daysExtra);
	return dob.getDay()+1 + ' ' + (['January','February','March','April','May','June','July','August','September','October','November','December'])[dob.getMonth()] + ', 19' + dob.getYear();
}

function getHandle() {
	cons = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','x','y','z'];
	vowels = ['a','e','i','o','u'];
	
	value = getEntropy(1000000);
	handle = '';
	
	for (i=0;i<3;i++) {
		handle += cons[value%20];
		value = Math.floor(value/20);
		handle += vowels[value%5];
		value = Math.floor(value/5);
	}
	
	return handle;
}

function getPassword() {
	chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
			'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
			'1','2','3','4','5','6','7','8','9','0'];
	password = '';
	
	while (password.length < 12) {
		value = getEntropy(62*62);
		password += chars[value % 62] + chars[Math.floor(value/62)];
	}
	
	return password;
}

function getEmail() {
	cons = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','x','y','z'];
	vowels = ['a','e','i','o','u'];
	domains = ['sogetthis.com', 'binkmail.com', 'tradermail.info', 'devnullmail.com', 'suremail.info', 'veryrealemail.com', 'letthemeatspam.com', 'bobmail.info', 'safetymail.info', 'zippymail.info'];
	
	value = getEntropy(100000000);
	email = '';
	
	for (i=0;i<4;i++) {
		email += cons[value%20];
		value = Math.floor(value/20);
		email += vowels[value%5];
		value = Math.floor(value/5);
	}
	document.getElementById('email').href = "https://www.mailinator.com/v3/index.jsp?zone=public&query=" + email;
	email += '@' + domains[getEntropy(10)];
	return email;
}

function getUsername(nameParts, dob) {
	templates = new Array("{F}{LASTNAME}", "{FIRSTNAME}{L}", "{FIRSTNAME}{LASTNAME}", "{FIRSTNAME}.{LASTNAME}", "{F}{LASTNAME}#", "{FIRSTNAME}{L}#", "{FIRSTNAME}{LASTNAME}#", "{FIRSTNAME}.{LASTNAME}#", "{LASTNAME}{F}", "{LASTNAME}{FIRSTNAME}", "{LASTNAME}.{FIRSTNAME}");
	value = getEntropy(11);
	template = templates[value];
	
	username = template.replace("{F}", nameParts[0].charAt(0));
	username = username.replace("{FIRSTNAME}", nameParts[0]);
	username = username.replace("{L}", nameParts[1].charAt(0));
	username = username.replace("{LASTNAME}", nameParts[1]);
	username = username.replace("#", dob.substr(-2));
	
	
	username = username.toLowerCase();
	return username
}

function saveNewSeed() {
	localStorage.setItem('greyman-seed', document.getElementById('seed').value);
	loadPage();
}

function loadPage() {
	seed = localStorage.getItem('greyman-seed');
	if (!seed || seed == '') {
		// If this is the first time run, just generate a randomish seed and restart
		hashed = generateHash(new Date()+'', Math.random()+'');
		seed = getPassword() + getPassword();
		document.getElementById('seed').value = seed; // I know, I know...
		saveNewSeed();
		return;
	}
	
	hashed = generateHash(url, seed);
	hideSeed();
	document.getElementById('seed').value = seed;
	document.getElementById('domain').innerHTML = url;
	var nameParts = getName();
	
	document.getElementById('name').innerHTML = nameParts[0] + ' ' + nameParts[1];
	
	var dob = getDOB();
	document.getElementById('dob').innerHTML = dob;
	document.getElementById('handle').innerHTML = getHandle();
	document.getElementById('password').innerHTML = getPassword();
	document.getElementById('email').innerHTML = getEmail();
	document.getElementById('email').onfocus = document.getElementById('email').blur;
	
	document.getElementById('username').innerHTML = getUsername(nameParts, dob);
	
}

// hacky way of implementing this but nobody else is going to use it so yolo
function incSeed() {
	document.getElementById('accbtn').value = 1 + parseInt(document.getElementById('accbtn').value);
	seed = seed + document.getElementById('accbtn').value;
	
	hashed = generateHash(url, seed);
	var nameParts = getName();
	
	document.getElementById('name').innerHTML = nameParts[0] + ' ' + nameParts[1];
	
	var dob = getDOB();
	document.getElementById('dob').innerHTML = dob;
	document.getElementById('handle').innerHTML = getHandle();
	document.getElementById('password').innerHTML = getPassword();
	document.getElementById('email').innerHTML = getEmail();
	document.getElementById('email').onfocus = document.getElementById('email').blur;
	
	document.getElementById('username').innerHTML = getUsername(nameParts, dob);
	
}

browser.tabs.query({active: true}).then(function(tab) {
	url = parseDomain(tab[0].url);
	loadPage();
	document.getElementById('seedbtn').addEventListener('click', function () { showSeed(); });
	document.getElementById('accbtn').addEventListener('click', function () { incSeed(); });
	document.getElementById('seed').addEventListener('keyup', function (event) { if (parseInt(event.keyCode,10) == 13) saveNewSeed(); });
});


