import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
        slug: 'generative-ai',
        color: 'purple',
        description: 'Generative AI focuses on creating content autonomously using deep learning techniques, useful in various fields such as design, media, and research.',
        logo: Assets.GenerativeAI, // Assume you have a logo for Generative AI in your assets
        name: 'Generative AI',
        category: 'AI'
    }),
    defineSkill({
        slug: 'problem-solving',
        color: 'blue',
        description: 'Problem-solving involves identifying complexities and devising efficient, effective solutions, crucial in technical and managerial roles.',
        logo: Assets.ProblemSolving, // Assume you have a logo for problem solving in your assets
        name: 'Problem Solving',
        category: 'Core Skill'
    }),
    defineSkill({
        slug: 'strategic-planning',
        color: 'green',
        description: 'Strategic planning is essential for setting long-term business goals and outlining strategies to achieve these objectives effectively.',
        logo: Assets.StrategicPlanning, // Assume you have a logo for strategic planning in your assets
        name: 'Strategic Planning',
        category: 'Management'
    }),
    defineSkill({
        slug: 'cross-functional-team-leadership',
        color: 'red',
        description: 'Leading cross-functional teams involves managing a diverse group of specialists to achieve project goals across different departments.',
        logo: Assets.CrossFunctionalTeamLeadership, // Assume you have a logo for this skill in your assets
        name: 'Cross-functional Team Leadership',
        category: 'Leadership'
    }),
    defineSkill({
        slug: 'design-thinking',
        color: 'orange',
        description: 'Design thinking is an iterative process that seeks to understand the user, challenge assumptions, and redefine problems to identify alternative strategies and solutions.',
        logo: Assets.DesignThinking, // Assume you have a logo for design thinking in your assets
        name: 'Design Thinking',
        category: 'Creative Process'
    }),
    defineSkill({
        slug: 'artificial-intelligence',
        color: 'black',
        description: 'Artificial intelligence involves simulating human intelligence processes by machines, especially computer systems, including learning, reasoning, and self-correction.',
        logo: Assets.ArtificialIntelligence, // Assume you have a logo for AI in your assets
        name: 'Artificial Intelligence',
        category: 'AI'
    }),
    defineSkill({
        slug: 'machine-learning',
        color: 'grey',
        description: 'Machine learning is a type of artificial intelligence (AI) that allows software applications to become more accurate in predicting outcomes without being explicitly programmed.',
        logo: Assets.MachineLearning, // Assume you have a logo for ML in your assets
        name: 'Machine Learning',
        category: 'AI'
    }),
	defineSkill({
        slug: 'programming',
        color: 'light-blue',
        description: 'Programming involves writing, testing, and maintaining the code that allows software applications to function efficiently.',
        logo: Assets.Programming, // Assume you have a logo for programming in your assets
        name: 'Programming',
        category: 'Development'
    }),
    defineSkill({
        slug: 'software-development',
        color: 'navy',
        description: 'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications and frameworks.',
        logo: Assets.SoftwareDevelopment, // Assume you have a logo for software development in your assets
        name: 'Software Development',
        category: 'Development'
    }),
    defineSkill({
        slug: 'computer-vision',
        color: 'violet',
        description: 'Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world using digital images and videos.',
        logo: Assets.ComputerVision, // Assume you have a logo for computer vision in your assets
        name: 'Computer Vision',
        category: 'AI'
    }),
    defineSkill({
        slug: 'project-management',
        color: 'maroon',
        description: 'Project management is the discipline of planning, organizing, securing, managing, leading, and controlling resources to achieve specific goals.',
        logo: Assets.ProjectManagement, // Assume you have a logo for project management in your assets
        name: 'Project Management',
        category: 'Management'
    }),
    defineSkill({
        slug: 'agile-project-management',
        color: 'teal',
        description: 'Agile project management is an iterative approach to delivering a project throughout its life cycle, characterized by the division of tasks into short phases of work and frequent reassessment and adaptation of plans.',
        logo: Assets.AgileProjectManagement, // Assume you have a logo for agile project management in your assets
        name: 'Agile Project Management',
        category: 'Management'
    }),
    defineSkill({
        slug: 'innovation',
        color: 'magenta',
        description: 'Innovation in technology involves making significant changes in the process or creation of new processes, methods, systems, and products to enhance performance.',
        logo: Assets.Innovation, // Assume you have a logo for innovation in your assets
        name: 'Innovation',
        category: 'Strategy'
    }),
    defineSkill({
        slug: 'technical-expertise',
        color: 'dark-green',
        description: 'Technical expertise refers to specialized knowledge, techniques, and skills needed to perform specific tasks. This can include a deep understanding of technical processes, tools, and methods within the field.',
        logo: Assets.TechnicalExpertise, // Assume you have a logo for technical expertise in your assets
        name: 'Technical Expertise',
        category: 'Core Skill'
    }),
    defineSkill({
        slug: 'code-generation',
        color: 'orange',
        description: 'Code generation is the process of generating code by machines that is directly usable as a software component without the need for human intervention, significantly speeding up the development process.',
        logo: Assets.CodeGeneration, // Assume you have a logo for code generation in your assets
        name: 'Code Generation',
        category: 'Development'
    }),
    defineSkill({
        slug: 'research',
        color: 'dark-red',
        description: 'Research skills involve the ability to gather, analyze, and synthesize information related to a specific topic or project, often leading to new insights and developments.',
        logo: Assets.Research, // Assume you have a logo for research in your assets
        name: 'Research',
        category: 'Academic'
    }),
    defineSkill({
        slug: 'process-optimization',
        color: 'yellow-green',
        description: 'Process optimization refers to the discipline of adjusting a process to optimize some specified set of parameters without violating some constraint.',
        logo: Assets.ProcessOptimization, // Assume you have a logo for process optimization in your assets
        name: 'Process Optimization',
        category: 'Management'
    }),
	defineSkill({
        slug: 'web-services',
        color: 'olive',
        description: 'Web services involve standardized ways of integrating web-based applications using the XML, SOAP, WSDL, and UDDI open standards over an Internet protocol backbone.',
        logo: Assets.WebServices, // Assume you have a logo for web services in your assets
        name: 'Web Services',
        category: 'Development'
    }),
    defineSkill({
        slug: 'visionary-mindset',
        color: 'dark-blue',
        description: 'A visionary mindset involves looking beyond the current state, anticipating future possibilities, and embracing innovative changes that shape the strategic direction.',
        logo: Assets.VisionaryMindset, // Assume you have a logo for visionary mindset in your assets
        name: 'Visionary Mindset',
        category: 'Leadership'
    }),
    defineSkill({
        slug: 'empathetic-leadership',
        color: 'deep-purple',
        description: 'Empathetic leadership focuses on understanding, respecting, and being sensitive to the feelings, thoughts, and experiences of others to foster a supportive workplace.',
        logo: Assets.EmpatheticLeadership, // Assume you have a logo for empathetic leadership in your assets
        name: 'Empathetic Leadership',
        category: 'Leadership'
    }),
    defineSkill({
        slug: 'regulatory-compliance',
        color: 'maroon',
        description: 'Regulatory compliance entails adhering to laws, regulations, guidelines, and specifications relevant to business processes.',
        logo: Assets.RegulatoryCompliance, // Assume you have a logo for regulatory compliance in your assets
        name: 'Regulatory Compliance',
        category: 'Compliance'
    }),
    defineSkill({
        slug: 'interdisciplinary-team-management',
        color: 'brown',
        description: 'Managing interdisciplinary teams involves coordinating experts from diverse fields to achieve complex objectives, emphasizing collaboration and innovation.',
        logo: Assets.InterdisciplinaryTeamManagement, // Assume you have a logo for this skill in your assets
        name: 'Interdisciplinary Team Management',
        category: 'Management'
    }),
    defineSkill({
        slug: 'digital-electronics',
        color: 'grey',
        description: 'Digital electronics focus on electronic circuits that operate using digital signals. These skills are essential in developing and troubleshooting hardware that processes digital data.',
        logo: Assets.DigitalElectronics, // Assume you have a logo for digital electronics in your assets
        name: 'Digital Electronics',
        category: 'Engineering'
    }),
    defineSkill({
        slug: 'pattern-recognition',
        color: 'light-green',
        description: 'Pattern recognition involves the classification of data based on statistical information extracted from patterns. It is essential in various applications like speech recognition and image analysis.',
        logo: Assets.PatternRecognition, // Assume you have a logo for pattern recognition in your assets
        name: 'Pattern Recognition',
        category: 'AI'
    }),
    defineSkill({
        slug: 'medical-device-industry',
        color: 'cyan',
        description: 'Knowledge of the medical device industry includes understanding the regulatory, technological, and marketing aspects of developing and selling medical devices.',
        logo: Assets.MedicalDeviceIndustry, // Assume you have a logo for the medical device industry in your assets
        name: 'Medical Device Industry',
        category: 'Industry Knowledge'
    }),
    defineSkill({
        slug: 'medical-device-rd',
        color: 'light-blue',
        description: 'Medical device R&D involves researching and developing new medical technologies and devices, requiring a strong understanding of biomedical engineering, materials science, and regulatory standards.',
        logo: Assets.MedicalDeviceRD, // Assume you have a logo for medical device R&D in your assets
        name: 'Medical Device R&D',
        category: 'Research and Development'
    }),
    defineSkill({
        slug: 'medical-software',
        color: 'pink',
        description: 'Medical software pertains to applications that help manage patient information, treatment planning, and healthcare administration, ensuring compliance with health regulations.',
        logo: Assets.MedicalSoftware, // Assume you have a logo for medical software in your assets
        name: 'Medical Software',
        category: 'Software'
    })
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
