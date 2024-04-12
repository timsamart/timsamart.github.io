import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Science in Technical Physics',
		description: 'The program is designed to bridge the gap between theoretical physics and practical engineering, providing students with a deep understanding of the physical principles that underpin modern technology. Focus areas include applied quantum mechanics, material sciences, and the development of sophisticated measurement and diagnostic tools.',
		location: 'RheinMain, Germany',
		logo: Assets.Unknown,
		name: '',
		organization: 'RheinMain University of Applied Sciences',
		period: { from: new Date(2020, 9), to: new Date() },
		shortDescription: 'Ongoing BSc focused on applying physical principles to technological solutions.',
		slug: 'bs-technical-physics-rheinmain',
		subjects: ['Quantum Mechanics', 'Thermodynamics', 'Electromagnetism']
	},
	{
		degree: 'Master of Arts in Leadership in the Creative Industries',
		description: 'Focused on developing leadership and strategic management skills specifically tailored for the creative sectors, this program emphasized innovative leadership, entrepreneurship, and the management of creative projects and teams. It aimed to equip graduates with the tools to lead in dynamic and diverse cultural sectors.',
		location: 'Darmstadt, Germany',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of Applied Sciences Darmstadt',
		period: { from: new Date(2014, 4), to: new Date(2014, 9) },
		shortDescription: 'Master’s program emphasizing leadership within creative sectors.',
		slug: 'ma-leadership-creative-industries-darmstadt',
		subjects: ['Creative Leadership', 'Project Management', 'Innovative Strategies']
	},
	{
		degree: 'Bachelor of Arts in Digital Media',
		description: 'This program provided a comprehensive understanding of digital content creation, covering a range of media forms such as video, web, and interactive systems. The focus was on design principles, digital media technology, and user experience to prepare graduates for careers in media production and design.',
		location: 'Darmstadt, Germany',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of Applied Sciences Darmstadt',
		period: { from: new Date(2010, 9), to: new Date(2014, 3) },
		shortDescription: 'Intensive course focused on multimedia design and technology.',
		slug: 'ba-digital-media-darmstadt',
		subjects: ['Digital Media Design', 'Multimedia Systems', 'Interaction Design']
	}
];	

export const title = 'Education';
