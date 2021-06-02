function quicksort(array){
	if(array.length < 2){
		return array
	}else{
		let pivo = array[0]
		let menores = array.slice(1).filter((n) => n <= pivo)
		let maiores = array.slice(1).filter((n) => n > pivo)
		return quicksort(menores).concat([pivo]).concat(quicksort(maiores))
	}
}

console.log(quicksort([10, 5, 2, 3]))