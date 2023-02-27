import { useEffect, useState } from 'react'

type ResultItemProps = {
	icon: string
	category: string
	score: number
	bgColor: string
	textColor: string
}

export default function ResultItem(props: ResultItemProps) {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(prevCount => (prevCount < props.score ? prevCount + 1 : prevCount))
		}, 50)

		return () => clearInterval(interval)
	}, [])

	return (
		<div
			className={`text-2xl flex flex-row gap-4 p-6 my-6 rounded-2xl ${props.bgColor} bg-opacity-5 md:text-[1.8rem] md:p-8`}>
			<img
				src={props.icon}
				alt=''
				aria-hidden='true'
			/>
			<p className={`font-bold ${props.textColor} grow`}>{props.category}</p>
			<p className='font-bold text-darkGrayBlue text-opacity-50'>
				<span className='text-darkGrayBlue'>{counter} </span>/ 100
			</p>
		</div>
	)
}
