const siteUrl = 'https://araceliponce.github.io/'
const baseUrl = 'crafts/';

const pages = [
  { 'News homepage': 'news' },
  { 'The Marginalian clone': 'marginalian' },
  // { 'Slopes': 'slopes' }
]


console.log(pages[0][0])
if (confirm(`¿Redirigir a ${Object.keys(pages[0])}?`)) {
  window.location.href = siteUrl + baseUrl + Object.values(pages[0]);
  // https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage


}

/* 
Object.values(pages[0])
Array [ "news" ]

Object.keys(pages[0])
Array [ "news homepage" ]

Como son objetos simples (de solo 1 key y 1 value), usamos object.keys para obtener el textcontent y el title o alt text
y object.values para obtener el href
 */


let linksList = document.createElement('ul');

pages.forEach(page => {
  let link = document.createElement('a');
  let linkItem = document.createElement('li');

  link.textContent = Object.keys(page);
  link.href = siteUrl + baseUrl + Object.values(page);

  linkItem.append(link);
  linksList.append(linkItem);

})

document.body.append(linksList)



let embedsList = document.createElement('ul')

pages.forEach(page => {
  let embed = document.createElement('embed');
  let embedItem = document.createElement('li');

  embed.title = Object.keys(page);
  embed.src = siteUrl + baseUrl + Object.values(page);

  embedItem.append(embed);
  embedsList.append(embedItem);

})

document.body.append(embedsList)


