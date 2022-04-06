const Title = ({ title, children }) => {
	return (
		<div className='section-title text-center mb-95'>
			<h2>{title}</h2>
			{children}
		</div>
	);
};

export default Title;
