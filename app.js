// let voters = [{ name: "tim", ideology: "Liberal"}, { name: "kim", ideology: "Conservative"}, { name: "jim", ideology: "Neutral"}, { name: "bim", ideology: "Liberal"}, { name: "lim", ideology: "Conservative"}, { name: "pim", ideology: "Neutral"}];
// let democrat_candidates = [{ name: "tim", party: "Democrat", votes: 0}];
// let republican_candidates = [{ name: "jim", party: "Republican", votes: 0}];
// let independent_candidates = [{ name: "kim", party: "Independent", votes: 0}];

let voters = [];
let democrat_candidates = [];
let republican_candidates = [];
let independent_candidates = [];
let finalBattle = [];

class Person{
	constructor(name){
		this.name=name;
	}
};

class Voter extends Person{
	constructor(name, ideology){
		super(name);
			this.ideology = ideology;
	}
	newVoter(){
		voters.push(this)
	}
}

class Candidate extends Person{
	constructor(name, party, votes = 0){
		super(name);
			this.party = party;
			this.votes = votes;
	}
	newCandidate(){
		if (this.party === 'Democrat') {
			democrat_candidates.push(this);
		} else if (this.party === 'Republican') {
			republican_candidates.push(this);
		} else if (this.party === 'Independent') {
			independent_candidates.push(this);
		}
	}
}

$(document).ready(function() {
$('#voter-form form').on('submit', function(event) {
	event.preventDefault()
	voterName = $('#voter-name').val()
	voterIdeology = $('#voter-ideology').val()
	// console.log(voterName)
	// console.log(voterIdeology)
	// console.log(voters)
	let x = new Voter(voterName, voterIdeology)
	x.newVoter();
	$('#voter-list .list-group').append('<li class="list-group-item">' + x.name + ' ' + x.ideology + '</li>')
	}) 

$('#candidate-form form').on('submit', function(event) {
	event.preventDefault()
	candidateName = $('#candidate-name').val()
	candidateParty = $('#candidate-party').val()
	// console.log(candidateName)
	// console.log(candidateParty)
	// console.log(democrat_candidates)
	// console.log(republican_candidates)
	// console.log(independent_candidates)
	let x = new Candidate(candidateName, candidateParty)
	x.newCandidate();
	$('#candidate-list .list-group').append('<li class="list-group-item">' + x.name + ' ' + x.party + '</li>')
	}) 

	$('#vote-btn-div').on('click', function(event){
		vote();
		win();
		alert(win().name);
		// console.log(finalBattle);
		// console.log(win());
	})

})



function vote() {
	let votersVote;
	voters.forEach(function(element) {
		let x = Math.ceil(Math.random() * 5);
		let y = Math.ceil(Math.random() * 4);
		if(element.ideology === 'Liberal') {
			if(x <= 3) {
				votersVote = 'Democrat';}
			else if(x === 4) {
				votersVote = 'Independent';}
			else if(x === 5) {
				votersVote = 'Republican';}
		}
		else if(element.ideology === 'Neutral') {
			if(y <= 2) {
				votersVote = 'Independent';}
			else if(y === 3) {
				votersVote = 'Democrat';}
			else if(y === 4) {
				votersVote = 'Republican';}
		}
		else if(element.ideology === 'Conservative') {
			if(x <= 3) {
				votersVote = 'Republican';}
			else if(x === 4) {
				votersVote = 'Independent';}
			else if(x === 5) {
				votersVote = 'Democrat';}
		}
	
		if(votersVote === 'Democrat') {
			let x = Math.floor(Math.random() * democrat_candidates.length);
			democrat_candidates[x].votes++;
		}
		if(votersVote === 'Independent') {
			let x = Math.floor(Math.random() * independent_candidates.length);
			independent_candidates[x].votes++;
		}
		if(votersVote === 'Republican') {
			let x = Math.floor(Math.random() * republican_candidates.length);
			republican_candidates[x].votes++;
		}
	})
}

function win () {

	finalBattle.push(democrat_candidates.reduce(function(current, acc){
		return wereCorrupt = (current.votes > acc.votes) ? current : acc }))

	finalBattle.push(independent_candidates.reduce(function(current, acc){
		return weCantLead = (current.votes > acc.votes) ? current : acc }))

	finalBattle.push(republican_candidates.reduce(function(current, acc){
		return wereMindelessSheep = (current.votes > acc.votes) ? current : acc }))

	return finalBattle.reduce(function(current, acc){return kingNothing = (current.votes > acc.votes) ? current : acc })
	}


