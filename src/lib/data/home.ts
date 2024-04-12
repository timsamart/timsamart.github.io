import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Timotheos';

export const lastName = 'Samartzidis';

export const description =
	'I am passionate about tackling challenging, high-impact projects that advance cutting-edge technology and bring people forward. I envision	leveraging collaborative and assistive AI to address significant challenges	and seize opportunities that shape our century';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/timsamart' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/timosam/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/ti2xmy'
	},
	{
		platform: Platform.Email,
		link: 'timmy@timosam.com'
	},
	{
		platform: Platform.Link,
		link: 'https://timosam.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
