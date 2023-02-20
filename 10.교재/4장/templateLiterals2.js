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

// 이름만 추출하여 배열로 반환하는 함수를 구현하시오.
// 반환값 => ['Alberto','Caroline','Josh']
{	// case1) 일반 for문
	for(let i = 0; i<peoples.length; i++) {
		console.log(peoples[i].name);
	}
	
	// function f(arrs) {
	// 	const result = [];
	// 	for(let i = 0; i<arrs.length; i++) {
	// 		// arrs[i]['name']
	// 		// arrs[i].name
	// 		result.push(arrs[i]['name']);
	// 	}
	// 	return result;
	// }
	// const result = f(peopels);
	// console.log(result);
	
}
{	// case2) 일반 for~of문
	for(let value of peoples) {
		console.log(value.name);
	}

	// function f(arrs) {
	// 	const result = [];
	// 	for(let people of peoples) {
	// 		// people.['name']
	// 		// people.name
	// 		result.push(people['name']);
	// 	}
	// 	return result;
	// }
	// const result = f(peoples);
	// console.log(result);
}
{	// case3) 배열의 고차함수 : map,filter,reduce,foreach
	// const person =  ['Alberto','Caroline','Josh'];
	// const peoples = person.map(function(item) {
	// 	return item;
	// }) ;
	// console.log(peoples);

	function f(arrs) {
		// const result = [];
		const output = arrs.map( (ele,idx,arr)=> ele['name'] );
		return output;
	}
	const result = f(peoples);
	console.log(result);
}
{
	function f(arrs) {
		const result = [];
		arrs.forEach((ele,idx,arr)=>result.push(ele['name']));
		return result;
	}
	const result = f(peoples);
	console.log(result);
}
{
	const f = arrs => {
		const result = [];
		arrs.forEach((ele,idx,arr)=>result.push(ele['name']));
		return result;
	}
	const result = f(peoples);
	console.log(result);
}