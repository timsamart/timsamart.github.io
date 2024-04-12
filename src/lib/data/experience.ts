import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'head-of-innovation',
		company: 'LIME medical GmbH',
		description: 'Led cross-disciplinary teams to establish AI and data-driven solutions, focusing on strategic planning, regulatory compliance, and agile development processes. Key decision-maker for irreversible decisions in product, data, and technology strategy.',
		contract: ContractType.FullTime,
		type: 'Technology Management',
		location: 'Mainz, Germany',
		period: { from: new Date(2023, 8), to: new Date(2023, 11) },
		skills: getSkills('leadership', 'ai', 'agile', 'regulatory-compliance'),
		name: 'Head of Innovation and Concepts',
		color: 'red',
		links: [],
		logo: Assets.Innovation,
		shortDescription: 'Leading AI and data-driven solutions with a strategic and regulatory focus.'
	},
	{
		slug: 'head-of-technology',
		company: 'LIME medical GmbH',
		description: 'Managed and coached the technology team in the rollout of multiple products. Oversaw company-wide systems transformation and integration, including cloud architecture with Kubernetes and development of medical software according to ISO standards.',
		contract: ContractType.FullTime,
		type: 'Technology Leadership',
		location: 'Mainz, Germany',
		period: { from: new Date(2020, 10), to: new Date(2023, 8) },
		skills: getSkills('team-management', 'cloud-architecture', 'product-development', 'iso-standards'),
		name: 'Head of Technology',
		color: 'blue',
		links: [],
		logo: Assets.InterdisciplinaryTeamManagement,
		shortDescription: 'Managed technology strategies and system integrations across the company.'
	},
	{
		slug: 'software-engineer',
		company: 'LIME medical GmbH',
		description: 'Developed software for medical applications, ensuring compliance with ISO 13485 and 62304 standards. Involved in launching software for a hand therapy robot product, contributing to design, development, and testing phases.',
		contract: ContractType.FullTime,
		type: 'Software Engineering',
		location: 'Mainz, Germany',
		period: { from: new Date(2019, 2), to: new Date(2020, 11) },
		skills: getSkills('c-sharp', 'python', 'net', 'sql', 'software-testing', 'iso-compliance'),
		name: 'Software Engineer',
		color: 'green',
		links: [],
		logo: Assets.SoftwareDevelopment,
		shortDescription: 'Developed and launched compliant medical software products.'
	},
	{
		slug: 'software-developer',
		company: 'm-result GmbH',
		description: 'Engaged in software development focusing on neural networks, fault detection algorithms, and 3D reconstruction using OpenCV and other advanced techniques. Contributed to research and development of innovative solutions for various projects.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Germany',
		period: { from: new Date(2018, 8), to: new Date(2019, 2) },
		skills: getSkills('c-sharp', 'python', '.net', 'sql', 'mongodb', 'opencv'),
		name: 'Software Developer',
		color: 'purple',
		links: [],
		logo: Assets.SoftwareDevelopment,
		shortDescription: 'Developed advanced algorithms and software for diverse applications.'
	}
];

export const title = 'Experience';
