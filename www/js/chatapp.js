function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var definition = {smile:{title:"Smile",codes:[":)",":=)",":-)"]},"sad-smile":{title:"Sad Smile",codes:[":(",":=(",":-("]},"big-smile":{title:"Big Smile",codes:[":D",":=D",":-D",":d",":=d",":-d"]},cool:{title:"Cool",codes:["8)","8=)","8-)","B)","B=)","B-)","(cool)"]},wink:{title:"Wink",codes:[":o",":=o",":-o",":O",":=O",":-O"]},crying:{title:"Crying",codes:[";(",";-(",";=("]},sweating:{title:"Sweating",codes:["(sweat)","(:|"]},speechless:{title:"Speechless",codes:[":|",":=|",":-|"]},kiss:{title:"Kiss",codes:[":*",":=*",":-*"]},"tongue-out":{title:"Tongue Out",codes:[":P",":=P",":-P",":p",":=p",":-p"]},blush:{title:"Blush",codes:["(blush)",":$",":-$",":=$",':">']},wondering:{title:"Wondering",codes:[":^)"]},sleepy:{title:"Sleepy",codes:["|-)","I-)","I=)","(snooze)"]},dull:{title:"Dull",codes:["|(","|-(","|=("]},"in-love":{title:"In love",codes:["(inlove)"]},"evil-grin":{title:"Evil grin",codes:["]:)",">:)","(grin)"]},talking:{title:"Talking",codes:["(talk)"]},yawn:{title:"Yawn",codes:["(yawn)","|-()"]},puke:{title:"Puke",codes:["(puke)",":&",":-&",":=&"]},"doh!":{title:"Doh!",codes:["(doh)"]},angry:{title:"Angry",codes:[":@",":-@",":=@","x(","x-(","x=(","X(","X-(","X=("]},"it-wasnt-me":{title:"It wasn't me",codes:["(wasntme)"]},party:{title:"Party!!!",codes:["(party)"]},worried:{title:"Worried",codes:[":S",":-S",":=S",":s",":-s",":=s"]},mmm:{title:"Mmm...",codes:["(mm)"]},nerd:{title:"Nerd",codes:["8-|","B-|","8|","B|","8=|","B=|","(nerd)"]},"lips-sealed":{title:"Lips Sealed",codes:[":x",":-x",":X",":-X",":#",":-#",":=x",":=X",":=#"]},hi:{title:"Hi",codes:["(hi)"]},call:{title:"Call",codes:["(call)"]},devil:{title:"Devil",codes:["(devil)"]},angel:{title:"Angel",codes:["(angel)"]},envy:{title:"Envy",codes:["(envy)"]},wait:{title:"Wait",codes:["(wait)"]},bear:{title:"Bear",codes:["(bear)","(hug)"]},"make-up":{title:"Make-up",codes:["(makeup)","(kate)"]},"covered-laugh":{title:"Covered Laugh",codes:["(giggle)","(chuckle)"]},"clapping-hands":{title:"Clapping Hands",codes:["(clap)"]},thinking:{title:"Thinking",codes:["(think)",":?",":-?",":=?"]},bow:{title:"Bow",codes:["(bow)"]},rofl:{title:"Rolling on the floor laughing",codes:["(rofl)"]},whew:{title:"Whew",codes:["(whew)"]},happy:{title:"Happy",codes:["(happy)"]},smirking:{title:"Smirking",codes:["(smirk)"]},nodding:{title:"Nodding",codes:["(nod)"]},shaking:{title:"Shaking",codes:["(shake)"]},punch:{title:"Punch",codes:["(punch)"]},emo:{title:"Emo",codes:["(emo)"]},yes:{title:"Yes",codes:["(y)","(Y)","(ok)"]},no:{title:"No",codes:["(n)","(N)"]},handshake:{title:"Shaking Hands",codes:["(handshake)"]},skype:{title:"Skype",codes:["(skype)","(ss)"]},heart:{title:"Heart",codes:["(h)","<3","(H)","(l)","(L)"]},"broken-heart":{title:"Broken heart",codes:["(u)","(U)"]},mail:{title:"Mail",codes:["(e)","(m)"]},flower:{title:"Flower",codes:["(f)","(F)"]},rain:{title:"Rain",codes:["(rain)","(london)","(st)"]},sun:{title:"Sun",codes:["(sun)"]},time:{title:"Time",codes:["(o)","(O)","(time)"]},music:{title:"Music",codes:["(music)"]},movie:{title:"Movie",codes:["(~)","(film)","(movie)"]},phone:{title:"Phone",codes:["(mp)","(ph)"]},coffee:{title:"Coffee",codes:["(coffee)"]},pizza:{title:"Pizza",codes:["(pizza)","(pi)"]},cash:{title:"Cash",codes:["(cash)","(mo)","($)"]},muscle:{title:"Muscle",codes:["(muscle)","(flex)"]},cake:{title:"Cake",codes:["(^)","(cake)"]},beer:{title:"Beer",codes:["(beer)"]},drink:{title:"Drink",codes:["(d)","(D)"]},dance:{title:"Dance",codes:["(dance)","\\o/","\\:D/","\\:d/"]},ninja:{title:"Ninja",codes:["(ninja)"]},star:{title:"Star",codes:["(*)"]},mooning:{title:"Mooning",codes:["(mooning)"]},finger:{title:"Finger",codes:["(finger)"]},bandit:{title:"Bandit",codes:["(bandit)"]},drunk:{title:"Drunk",codes:["(drunk)"]},smoking:{title:"Smoking",codes:["(smoking)","(smoke)","(ci)"]},toivo:{title:"Toivo",codes:["(toivo)"]},rock:{title:"Rock",codes:["(rock)"]},headbang:{title:"Headbang",codes:["(headbang)","(banghead)"]},bug:{title:"Bug",codes:["(bug)"]},fubar:{title:"Fubar",codes:["(fubar)"]},poolparty:{title:"Poolparty",codes:["(poolparty)"]},swearing:{title:"Swearing",codes:["(swear)"]},tmi:{title:"TMI",codes:["(tmi)"]},heidy:{title:"Heidy",codes:["(heidy)"]},myspace:{title:"MySpace",codes:["(MySpace)"]},malthe:{title:"Malthe",codes:["(malthe)"]},tauri:{title:"Tauri",codes:["(tauri)"]},priidu:{title:"Priidu",codes:["(priidu)"]}};

// Firebase initilisieren
var chats = new Firebase("https://chatappcrossplatform.firebaseio.com/ChatsCrossPlatform");
var users = new Firebase("https://chatappcrossplatform.firebaseio.com/UsersCrossPlatform");

// Variablen für Chat initialisieren
var username, userId, newUser, userRef, avatar = false, lastDate, messagesLoaded, usersLoaded, back = false;

// Framework7 initialisieren
var $$ = Dom7;
var chat = new Framework7({
    modalTitle: 'ChatApp Login',
    animateNavBackIcon: true,
});

// Messages initialisieren
var chatMessages = chat.messages('.messages', {
    autoLayout: true
});

// Views für Framework7 initialisieren
var leftView = chat.addView('.view-left', { dynamicNavbar: true });
var mainView = chat.addView('.view-main', { dynamicNavbar: true });

// Local Storage
var indexLocalStorage = 'chateintraege';
var indexVersion = 'version';
var userName = 'user';

// Chat
var chatFoto = '';
var chatActive = true;
var username = '';
var image = '';


// Geolocation
var lat = 0.0;
var lng = 0.0;

// Colorpicker
var color = '#000000';

// Vibration
var storedData;
var vibration = '';

// Panel schließen, wenn Button "Zahnrad" gedrückt wird
$$('.panel-close').on('click', function (e) {
    chat.closePanel();
});

// Optionen initialisieren, wenn optionen.html geladen wird
chat.onPageInit('optionen', function (page) {
    // Username setzen
    $("#username").attr("value", username);
    // Für die Abfrage der Enter-Taste den Chat auf nicht aktiv setzen
    chatActive = false;
    // Colorpicker initialisiseren
    $('select[name="colorpicker"]').simplecolorpicker({ theme: 'glyphicons' });
    $('select[name="colorpicker"]').simplecolorpicker('selectColor', color);
    $('select[name="colorpicker"]').simplecolorpicker({
        picker: true
    }).on('change', function () {
        color = $('select[name="colorpicker"]').val()
        $(".message-sent .message-text").css('background-color', color);
    });
    // $(".breite").text($(document).width());
});

// Funktion photo() aufrufen, wenn foto.html geladen wird
chat.onPageInit('foto', function (page) {
    photo();
    $$('.sendFoto').on('click', function () {
        neuerEintrag('.fotoNachricht');
        // Wenn Foto gesendet wurde, dann zurück zur Hauptansicht
        if (back) {
            back = false;
            mainView.router.back();
            initializeChat();
        }
    });
});

// Funktion geolocation() aufrufen, wenn map.html geladen wird
chat.onPageInit('map', function (page) {
    geolocation();
    $$('.sendMap').on('click', function () {
        neuerEintrag('.mapNachricht');
        // Wenn Foto gesendet wurde, dann zurück zur Hauptansicht
        if (back) {
            back = false;
            mainView.router.back();
            initializeChat();
        }
    });
});

// Messages initialisieren, wenn optionen.html geschlossen wird
chat.onPageAfterBack('optionen', function (page) {
    // Für die Abfrage der Enter-Taste den Chat auf aktiv setzen
    chatActive = true;
    // Username aus Input-Feld auslesen
    username = $('#username').val();
    // Username in Firebase updaten
    users.child(userId).set({ name: username });
    // Username, Color und Vibration in Local Storage setzen
    localStorage.setItem(userName, username);
    localStorage.setItem("color", color);
    initializeChat();
    storedData = chat.formGetData('optionen');
    vibration = storedData.vibration;
});

users.on("value", function(snapshot) {
    $$('#userList').html("");
    var objs = snapshot.val();
    $.each(objs, function(i, obj) {
        var template = '<li><div class="item-content"><div class="item-inner"><div class="item-title">'+obj.name+'</div></div></div></li>';
        $$('#userList').append(template);
    });
    usersLoaded = true;
});

users.on('child_added', function (snapshot) {
    if (!usersLoaded) return;
    var user = snapshot.val();
    if (user.name === username) return;

    chat.addNotification({
        title:'Neuer User',
        subtitle: user.name + ' ist gerade dem Chat beigetreten!',
        media: '<img width="44" src="img/icon-144.png">',
        hold: 3000,
        closeIcon: false
    });
});

// Datum formatieren
function formatDay(d) {
    var date = new Date(d);
    var wochentag = 'Sontag Montag Dienstag Mittwoch Donnerstag Freitag Samstag'.split(' ')[date.getDay()];
    var tag = date.getDate();
    var monat = 'J&auml;nner Februar M&auml;rz April Mai Juni Juli August September Oktober November Dezember'.split(' ')[date.getMonth()];
    var jahr = date.getFullYear();
    return wochentag + ', ' + tag + '. ' + monat + ' ' + jahr;
}

function formatTime(d) {
    var date = new Date(d);
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    return hours + ':' + mins;
}

function formatDate(d) {
    return formatDay(d) + ', <span>' + formatTime(d) + '</span>';
}

// Nachrichten initialisieren
function stripMessage(messageText) {
    messageText = $.emoticons.replace(messageText);
    if (!(messageText.indexOf('<img') === 0 && messageText.split('<').length === 2 || messageText.indexOf('<span class="emoticon') >= 0)) {
        messageText = messageText.replace(/>/g, '&gt;').replace(/</g, '&lt;');
    }
    messageText.replace(/script/g, 'scr\bipt');
    return messageText;
}

function loadMessages(snapshot) {
    var messages = snapshot.val();
    var html = '', messageId, message; // htmlBeforeMessage, htmlAfterMessage;
    var type = "received";

    var saveUsername = localStorage.getItem(userName);

    // Local Storage löschen und neu erstellen
    localStorage.removeItem(indexLocalStorage);
    initializeStorage();

    username = saveUsername;
    localStorage.setItem(userName, username);
    
 
    // Nachrichten aus Firebase in Chat laden
    for (messageId in messages) {

        message = messages[messageId];

         // Zeit im Chat nur alle 5 Minuten darstellen
        if (message.date && lastDate) {
            if (message.date - lastDate > 1000 * 60 * 5) {
                html += '<div class="messages-date">' + formatDate(message.date) + '</div>';
            }
        }

        // Wenn Username ist gleich dem gespeicherten User dann Nachricht auf "gesendet" setzen
        if (message.name === saveUsername) {
            type = "sent";
        }

        // htmlBeforeMessage = '<div class="message message-' + type + '"><div class="message-name">' + message.name + '</div><div class="message-text">';
        // htmlAfterMessage = '</div>' + (message.avatar ? '<div class="message-avatar" style="background-image:url(' + (message.avatar) + ')"></div>' : '') + '</div>';

        // Foto im Chat darstellen
        if (message.image != "") {
            html += '<div class="message message-' + type + '"><div class="message-name">' + message.name + '</div><div class="message-text">' + "<img src='data:image/jpeg;base64," + message.image + "' class='img-responsive' />" + '</div>' + (message.avatar ? '<div class="message-avatar" style="background-image:url(' + (message.avatar) + ')"></div>' : '') + '</div>';
        }

        // Map im Chat darstellen
        if (message.lat != 0.0 && message.lng != 0.0) {
            var mapLatLng = message.lat.toString() + ',' + message.lng.toString();
            html += '<div class="message message-' + type + '"><div class="message-name">' + message.name + '</div><div class="message-text">' + '<img border="0" src="http://maps.googleapis.com/maps/api/staticmap?center=' + mapLatLng + '&zoom=16&size=250x250&maptype=roadmap&markers=color:red%7C' + mapLatLng + '"/>' + '</div>' + (message.avatar ? '<div class="message-avatar" style="background-image:url(' + (message.avatar) + ')"></div>' : '') + '</div>';
        }

        // var messageText = stripMessage(message.message);
        var messageText = message.message;
        html += '<div class="message message-' + type + '"><div class="message-name">' + message.name + '</div><div class="message-text">' + messageText + '</div>' + (message.avatar ? '<div class="message-avatar" style="background-image:url(' + (message.avatar) + ')"></div>' : '') + '</div>';
        
        if (message.date) lastDate = message.date;

        // Initialwert für Nachricht auf "empfangen" setzen 
        type = "received";

        // Nachricht in Local Storage speichern
        var neuerEintrag = { 'name': message.name, 'message': message.message, 'avatar': message.avatar, 'date': message.date, 'image': message.image, 'lat': message.lat, 'lng': message.lng };
        saveStorage(neuerEintrag);

    }
    $('.messages-content .messages').html(html);

    // Layout im Chat anpassen und ans Ende scrollen
    chatMessages.layout();
    chatMessages.scrollMessages();

    // Farbe richtig setzen
    $(".message-sent .message-text").css('background-color', color);
}

// Nachricht empfangen
function receiveMessage(snapshot) {
    var message = snapshot.val();
    if (message.name === username) return;
    // alert("hier vibrieren");
    if (vibration === "on") {
        // Vibration 1 Sekunde / 1 Sekunde Pause / Vibration 1 Sekunde / 1 Sekunde Pause / Vibration 1 Sekunde -> navigator.vibrate([1000, 1000, 1000, 1000, 1000]);
        // Vibration 1 Sekunde
        navigator.vibrate([1000]);
    }
    var date = new Date();
    var offset = date.getTimezoneOffset() * 60 * 1000;
    // Offset für Greenwich Mean Time (GMT) entfernt!
    date = date.getTime() // + offset;

    var day, time;
    
    if (!lastDate || (lastDate && date - lastDate  > 1000 * 60 * 5)) {
        day = formatDay(date);
        time = formatTime(date);
        lastDate = date;
    }
    chatMessages.addMessage({
        // text: stripMessage(message.message),
        text: message.message,
        type: 'received',
        name: message.name,
        avatar: message.avatar,
        day: day,
        time: time
    });
}

chats.on("child_added", function(snapshot) {
    if (!messagesLoaded) return;
    receiveMessage(snapshot);
});


// Nachrichten senden
$$('.messagebar a.link').on('click', function () {
    neuerEintrag('.mainNachricht');
});

$$('#sendPhoto').on('click', function () {
    chat.prompt('Enter your image URL', function (data) {
        var messageText = '<img src="'+data+'">';
        var date = new Date();
        var offset = date.getTimezoneOffset() * 60 * 1000;
        date = date.getTime() + offset;
        var day, time;
        if (!lastDate || (lastDate && date - lastDate > 1000 * 60 * 5)) {
            day = formatDay(date);
            time = formatTime(date);
            lastDate = date;
        }
        chats.push({name: username, message: messageText, avatar: avatar, date: date});
        chatMessages.addMessage({
            text: messageText,
            type: 'sent',
            name: username,
            avatar: avatar,
            day: day,
            time: time
        });
        lastDate = date;
    });
});

// Map Anzeigen
function geolocation() {
    var text = document.getElementById('map');
    text.textContent = "Standort wird ermittelt ...";
    navigator.geolocation.getCurrentPosition(initialize, fail);
}

function initialize(position) {
    var myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    mapAnzeigen(lat, lng, "map");
}

// Geolocation wird nicht supported
function fail() {
    alert('navigator.geolocation failed, may not be supported');
}

function mapAnzeigen(lat, lng, id) {
    // Code für Anzeige Static Map
    var mapLatLng = lat.toString() + ',' + lng.toString();
    var mapHTML = '<p><img border="0" src="http://maps.googleapis.com/maps/api/staticmap?center=' + mapLatLng + '&zoom=16&size=250x250&maptype=roadmap&markers=color:red%7C' + mapLatLng + '"/></p>'
    document.getElementById(id).innerHTML = mapHTML;
}

// Login - wird für diese Version des Chats nicht verwendet!!!
function login() {
    chat.prompt('Wie ist dein Name?', function (data) {
        username = data || 'Anonym';
        chat.alert('Du bist als ' + username + ' eingelogged.');
        newUser = users.push({name: username});
        userId = newUser.name();
        // Avatar über www.gravatar.com wird vorerst nicht verwendet!!!
/*        if (validateEmail(username)) {
            username = username.toLowerCase();
            avatar = 'http://www.gravatar.com/avatar/' + md5(username);
        }
*/
        chats.on("value", function (snapshot) {
            if (messagesLoaded) return;
            loadMessages(snapshot);
            messagesLoaded = true;
        });

    },
    // Funktionsaufruf wenn "Cancel" gedrückt wird
    login);
}

function storageSupport() {

    // alert("storageSupport wurde aufgerufen");

    // Chat initialisieren
    initializeChat();

    if (!supportsLocalStorage()) {
        alert("Ihr Browser wird leider nicht unterst\u00dctzt!");
        return;
    }

    initializeStorage();
  
}

function initializeStorage() {
    // Einlesen JSON-File wenn noch kein Storage existiert
    if (!localStorage.getItem(indexLocalStorage)) {
        // JSON-File einlesen
        $.getJSON("json/chat.json")
        .done(function (json) {
            if (username === "") {
                username = json.user;
            }
            if (color === "#000000") {
                color = json.color;
            }
            var chat = json.chateintraege;
            // alert("Einlesen JSON - Username: " + username);


            if (!messagesLoaded) {
                loginUser();
            }

            localStorage.setItem(indexVersion, '1.0');
            localStorage.setItem(userName, username);
            localStorage.setItem(indexLocalStorage, JSON.stringify(chat));
        })
        .fail(function (d, textStatus, error) {
            console.error("getJSON failed, status: " + textStatus + ", error: " + error);
            alert("JSON - Neuer Chat konnte nicht geladen werden!");
        });
    }

        // Einlesen JSON-File Neue Einträge inklusive Version
    else {
        $.getJSON("json/chat_neue_eintraege.json")
        .done(function (json) {
            var version = json.version;
            username = json.user;
            var chatNeueEintraege = json.chateintraege;

            // Wenn neue Version von JSON-File, dann ergänze Chat
            if (version != localStorage.getItem(indexVersion)) {
                localStorage.setItem(indexVersion, version);
                localStorage.setItem(userName, username);
                var chat = JSON.parse(localStorage.getItem(indexLocalStorage));
                var chatNeu = $.merge(chat, chatNeueEintraege);
                localStorage.setItem(indexLocalStorage, JSON.stringify(chatNeu));
            }
                // Lokalen Chat einlesen	
            else {
                username = localStorage.getItem(userName, username);
                // alert (username);
                color = localStorage.getItem("color", color);
                var chat = JSON.parse(localStorage.getItem(indexLocalStorage));

                if (!messagesLoaded) {
                    loginUser();
                }
            }
        })
        .fail(function () {
            alert("storage - Neue Eintr\u00e4ge konnten nicht geladen werden!");
        });
    }
}

function loginUser() {

    // User an Chat anmelden 
    newUser = users.push({ name: username });
    userId = newUser.name();
    userRef = new Firebase("https://chatappcrossplatform.firebaseio.com/Users/" + userId);
    // alert(userId);

    // Nachrichten in den Chat laden
    chats.on("value", function (snapshot) {
        messagesLoaded = true;
        loadMessages(snapshot);
    });
}

function initializeChat() {
    lat = 0.0;
    lng = 0.0;
    chatFoto = '';
    image = '';
}

function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    }
    catch (e) {
        return false;
    }
}

function saveStorage(Eintrag) {
    var chat = JSON.parse(localStorage.getItem(indexLocalStorage));

    if (chat === null) {
        chat = new Array();
    }

    chat.push(Eintrag);
    localStorage.setItem(indexLocalStorage, JSON.stringify(chat));

}

// neuen Eintrag erstellen
function neuerEintrag(textBereich) {
    var textarea = $$('.messagebar ' + textBereich);
    var messageText = textarea.val();
    if (messageText.length === 0) return;
    back = true;
    textarea.val('').trigger('change');
    var date = new Date();
    var offset = date.getTimezoneOffset() * 60 * 1000;
    // Offset für Greenwich Mean Time (GMT) entfernt!
    date = date.getTime() // + offset;
    var day, time;
    if (!lastDate || (lastDate && date - lastDate > 1000 * 60 * 5)) {
        day = formatDay(date);
        time = formatTime(date);
        lastDate = date;
    }

    // Foto einbinden, wenn "Send" gedrückt wird 
    if (chatFoto === "") {
        // alert("Es ist kein Photo vorhanden!");
        image = "";
    }
    else {
        // alert("Es ist ein Photo vorhanden!");
        image = chatFoto;
    }

    // neue Nachricht in Firebase speichern 
    chats.push({ name: username, message: messageText, avatar: avatar, date: date, image: image, lat: lat, lng: lng });
    
    // neue Nachricht in Chat hinzufügen
/*
    chatMessages.addMessage({
        // text: stripMessage(messageText),
        text: messageText,
        type: 'sent',
        name: username,
        avatar: avatar,
        day: day,
        time: time
    });
*/
    // neue Nachricht in Local Storage speichern
    var neuerEintrag = { 'name': username, 'message': messageText, 'avatar': avatar, 'date': date, 'image': image, 'lat': lat, 'lng': lng };
    saveStorage(neuerEintrag);
}

function photo() {

    document.getElementById("foto").innerHtml = "";

    navigator.camera.getPicture(function (imageData) {
        // alert('Success ' + imageData);

        // Foto im Chat voranzeigen
        document.getElementById("foto").innerHTML = "<img style='border:1px red solid' src='data:image/jpeg;base64," + imageData + "' />";

        chatFoto = imageData;

    }, function (message) {
        alert('Failed because: ' + message);
    }, {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 200,
        targetHeight: 200,
        saveToPhotoAlbum: false
    }
    );
}

/* Chat wird ohne Login initialisiert */
// login();

// Enter Taste (Ascii 13) abfragen - nicht verwenden, da sonst ungewollte Ergebnisse herauskommen!!!
/*
$(window).keydown(function (event) {
    if (event.which === 13) {
        if (chatActive) {
            // Wenn der Benutzername schon gesetzt ist, handelt es sich
            // um eine Chat-Nachricht.
            neuerEintrag('.mainNachricht');
        } else {
            // Wenn der Benutzername noch nicht gesetzt ist, hat sich
            // der Benutzer gerade angemeldet.
            saveOptionen();
        }
    }
});
*/

$(window).on('beforeunload', function () {
    userRef.remove();
});

// Storage löschen - für Test von Nachladen der JSON-Files "//" in der nächsten Zeile entfernen und für den nächsten Aufruf wieder setzen
// localStorage.removeItem(indexLocalStorage);
// alert("Local Storage wurde gelöscht!");

storageSupport();
// loginUser();