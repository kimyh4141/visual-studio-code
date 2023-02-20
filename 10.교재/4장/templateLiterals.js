const peoples = [{
	name: 'Alberto',
	age: 27
},{
	name: 'Caroline',
	age: 27
},{
	name: 'Josh',
	age: 31
}];

// people의 name을 추출하여 ul,li 태그를 반환하는 함수를 구현하시오.
// <ul>
//    <li>Alberto</li>
//    <li>Caroline</li>
//    <li>Josh</li>
// </ul>

// 이름만 추출하여 배열로 반환하는 함수
const f = arrs => {
    const result = [];
    arrs.forEach((ele,idx,arr)=>result.push(ele['name']));
    return result;
}

// ['Alberto','Caroline','Josh']
const liTags = f(peoples).map( name=> `<li>${name}</li>`)
console.log(liTags.join(''));
console.log(liTags.join());

const html = `<ul>${liTags.join()}</ul>`;
console.log(html);