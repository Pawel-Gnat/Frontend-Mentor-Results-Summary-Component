interface ResultInfoProps {
	result: number
}

const ResultInfo = (props: ResultInfoProps) => {
	return (
		<div className='text-center max-w-2xl px-24 pt-10 pb-16 rounded-b-[3rem] rounded-b-3xl  bg-gradient-to-b from-lightSlateBlueBbackground to-lightRoyalBlueBackground md:w-[37rem] md:pt-14 md:pb-20 md:rounded-[3rem]'>
			<h1 className='text-lightLavender md:text-[2.4rem]'>Your result</h1>
			<div className='flex flex-col items-center justify-center w-1/2 mx-auto my-10 rounded-full bg-gradient-to-b from-persianBlueCircle to-violetBlueCircle aspect-square md:w-5/6 md:my-14'>
				<p className='font-bold text-7xl text-paleBlue md:text-[7rem]'>{props.result}</p>
				<p className='text-lightLavender'>of 100</p>
			</div>
			<strong className='block text-white mb-2 md:text-[2.8rem] md:mb-6'>Great</strong>
			<p className='text-2xl text-lightLavender md:text-[1.8rem]'>
				You scored higher than 65% of the people who have taken these tests.
			</p>
		</div>
	)
}

export default ResultInfo
