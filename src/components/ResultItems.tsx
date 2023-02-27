import ResultItem from './ResultItem'

type Props = {
	data: {
		icon: string
		category: string
		score: number
	}[]
}

const ResultItems = (props: Props) => {
	return (
		<div className='w-full max-w-2xl p-12 md:w-[37rem] md:pt-14 md:pb-20'>
			<h2 className='font-bold md:text-[2.4rem] md:mb-4'>Summary</h2>
			<ResultItem
				{...props.data[0]}
				bgColor={'bg-lightRed'}
				textColor={'text-lightRed'}
			/>
			<ResultItem
				{...props.data[1]}
				bgColor={'bg-orangeyYellow'}
				textColor={'text-orangeyYellow'}
			/>
			<ResultItem
				{...props.data[2]}
				bgColor={'bg-greenTeal'}
				textColor={'text-greenTeal'}
			/>
			<ResultItem
				{...props.data[3]}
				bgColor={'bg-cobaltBlue'}
				textColor={'text-cobaltBlue'}
			/>
			<button className='w-full text-center py-6 mt-2 rounded-[100vh] bg-darkGrayBlue text-white hover:bg-gradient-to-b from-lightSlateBlueBbackground to-lightRoyalBlueBackground md:mt-10'>
				Continue
			</button>
		</div>
	)
}

export default ResultItems
