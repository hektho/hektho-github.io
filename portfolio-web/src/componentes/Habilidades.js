import React from 'react'
import CardHabilidades from './CardHabilidades'
import Header from './Header'
import './Habilidades.css';

export default function Habilidades() {

	const stacks = [
		{url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',	name: 'CSS3'},
		{url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 	name: 'JavaScript'},
		{url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
			name: 'HTML5'},
		{url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'ReactJS'},
		{url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', name: 'Jest'},
		{url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', name: 'Redux'},
		{url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'NodeJS'},
		{url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name:'MySQL'}
	]
	return (
		<div className='main-container'>
			<Header />
			<h1 className='stacks-title'>
				Stacks com experiência:
			</h1>
			<section className='habilidades'>
				{stacks.map(( { url, name }) => <CardHabilidades url={ url } name={ name } />)}	
			</section>
		</div>
	)
}