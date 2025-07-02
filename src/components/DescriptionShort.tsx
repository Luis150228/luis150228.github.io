import { RotatingText } from '@/components/animate-ui/text/rotating.tsx';

const DescriptionText = () => {
	return (
		<RotatingText
			className='text-2xl font-semibold'
			text={['Web designer', 'Full Stack Developer', 'Administrative manager', 'Versatil', 'Creativo']}
		/>
	);
};

export default DescriptionText;
