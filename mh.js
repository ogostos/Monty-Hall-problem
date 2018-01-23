function montyhall(times = 10000, doors = 3, prizes = 1, swap = false) {
	if (prizes > doors) return
	let wins = 0
	rnd = () => Math.floor(Math.random() * doors) // random num generator, from 0 to n (excluding)
	function game() {
		let pick = rnd() // initially picked door
		const prize = [] 
		// placing prizes behind the doors
		for(let i = 0; i < prizes; i++) {
			let p = rnd()
			while (prize.includes(p)) p = rnd()
			prize.push(p)
		}
		// swapping option is viable only if we have at least two empty slots
		if (swap && prizes + 1 < doors) { 
			let remove = rnd() // the door which is opened after your first choice and now is out of the game
			while (prize.includes(remove) || remove === pick) remove = rnd() 
			let secondpick = rnd() 
			while (secondpick === remove || secondpick === pick) secondpick = rnd()
			pick = secondpick // you changed your pick to this door
		}
		return prize.includes(pick) // opening the door
	}
	for(let i = 0; i < times; i++) {
		if (game()) wins++
	}
	return ((wins / times) * 100).toFixed(2)
}

console.log(`w/o swapping = ${montyhall()} %`)
console.log(`with swapping = ${montyhall(1000000, 50, 32, true)} %`)
