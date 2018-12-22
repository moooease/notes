
const editorTitle = document.querySelector('.title')
const editorContent = document.querySelector('.content')
const defaultTitle = 'Whats on your mind?'
const defaultContent = ''

editorTitle.innerHTML = localStorage['title'] || defaultTitle
editorContent.innerHTML = localStorage['content'] || defaultContent

let save = () => {
  localStorage['title'] = editorTitle.innerHTML
  localStorage['content'] = editorContent.innerHTML
}

editorTitle.onkeyup = () => save()
editorContent.onkeyup = () => save()


function formatAMPM() {
  var str = "";
  var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
str += 'Its '+hours+':'+minutes+ampm +' on a '+ days[d.getDay()]+'.';
document.getElementById("date").innerHTML = str;
}

setInterval(formatAMPM, 1000);

var input = document.getElementById('myTextInput');
input.focus();
input.select();