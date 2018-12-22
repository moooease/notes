

const editorContent = document.querySelector('.content')
editorContent.innerHTML = localStorage['content']
const defaultContent = '  '

let save = () => {
  localStorage['content'] = editorContent.innerHTML || defaultContent
}

editorContent.onkeyup = () => save()



function formatAMPM() {
  var str = "";
  var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
str += 'Its '+hours+':'+minutes+ampm +' on a '+ days[d.getDay()]+'.';
document.getElementById("date").innerHTML = str;
}

setInterval(formatAMPM, 1000);