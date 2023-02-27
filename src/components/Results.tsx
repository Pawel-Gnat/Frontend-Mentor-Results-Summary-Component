import { useEffect, useState } from 'react'
import ResultInfo from './ResultInfo'
import ResultItems from './ResultItems'

type Data = {
	category: string
	score: number
	icon: string
}

const Results = () => {
	const [data, setData] = useState<Data[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('./src/data.json')
				const data: Data[] = await response.json()
				setData(data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

	const calculatedResult = Math.round(data.reduce((acc, item) => acc + item.score, 0) / data.length)

	return (
		<>
			{data.length > 0 && (
				<section className='flex flex-col md:flex-row md:rounded-[3rem] md:shadow-xl'>
					<ResultInfo result={calculatedResult} />
					<ResultItems data={data} />
				</section>
			)}
		</>
	)
}

export default Results
