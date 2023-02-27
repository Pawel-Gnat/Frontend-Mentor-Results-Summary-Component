import { useEffect, useState } from 'react'
import ResultItem from './ResultItem'

type Props = {
	data: {
		icon: string
		category: string
		score: number
	}[]
	btn: boolean
}

const ResultItems = (props: Props) => {
	const [btnClass, setBtnClass] = useState('')

	useEffect(() => {
		if (props.btn === false) {
			setBtnClass(
				'border-none bg-darkGrayBlue hover:bg-gradient-to-b from-lightSlateBlueBbackground to-lightRoyalBlueBackground text-white'
			)
		}
	}, [props.btn])

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
			<button
				disabled={props.btn}
				className={`w-full text-center py-6 mt-2 border rounded-[100vh] text-lightLavender md:mt-10 ${btnClass}`}>
				Continue
			</button>
		</div>
	)
}

export default ResultItems
