const xmlStr = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const xmlDom = parser.parseFromString(xmlStr, "text/xml");

const studentObj = {};
let j = 0;

function getStudent(obj) {
  const listNode = obj.querySelector('list');
  for (const studentNode of listNode.querySelectorAll('student')) {
    const nameNode = studentNode.querySelector('name');
    const firstNameNode = nameNode.querySelector('first');
    const secondNameNode = nameNode.querySelector('second');
    const ageNode = studentNode.querySelector('age');
    const profNode = studentNode.querySelector('prof');
    const langAttr = nameNode.getAttribute('lang');
    studentObj[j] = [
      { name: firstNameNode.textContent + " " + secondNameNode.textContent, age: Number(ageNode.textContent), prof: profNode.textContent, lang: langAttr },
    ];
    j++;
  }
  return studentObj;
}

getStudent(xmlDom);

const result = {
  list: [studentObj]
}
console.log("result", result);