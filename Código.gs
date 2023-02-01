var token='6133923775:AAEKNCnuTJg80LWhvRyADA4NC4jN8QKy1IA'
var telegramUrl = 'https://api.telegram.org/bot' + token;

var spreadsheetId = '13BMF_f5xO8EuyrxkYARkzMemzuQC_QYQAqKQLDo00fE';

//arreglar token y sendtext


// al parecer doGet sirve para, con HtmlService, printear un texto por pantalla
function doGet(e) {
  return HtmlService.createHtmlOutput("Miguel te quiero");
}


function sendText(id, answer) {
  var url = telegramUrl + '/sendMessage?chat_id=' + id + '&text=' + answer;
  UrlFetchApp.fetch(url);
}



function doPost(e){

  var contents=JSON.parse(e.postData.contents);
  var text=contents.message.text;
  var id=contents.message.chat.id;
  var name =contents.message.chat.first_name;
  var spreadsheet=SpreadsheetApp.openById(spreadsheetId).getSheetByName('mensajes');
  spreadsheet.appendRow([new Date(), id, name, text]);
  //GmailApp.sendEmail('@gmail.com','ROCÍO TE QUIERO',JSON.stringify(name) );


switch (text) {
      case '/start':
        var answer = 'Me has iniciado';
        sendText(id, answer);
        break;
      case '/info':
        var answer = 'Esto es un bot de prueba';
        sendText(id, answer);
        break;

      default :
        var answer ='No te entendí mi loco';
        sendText(id, answer);
        break;
}

}




