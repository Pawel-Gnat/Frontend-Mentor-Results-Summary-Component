import { useEffect, useState } from 'react'
import BtnContext from '../context/btn-context'
import ResultInfo from './ResultInfo'
import ResultItems from './ResultItems'

type Data = {
	category: string
	score: number
	icon: string
}

const Results = () => {
	const [data, setData] = useState<Data[]>([])
	const [btn, setBtn] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('./data.json')
				const data: Data[] = await response.json()
				setData(data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

	const calculatedResult = Math.round(data.reduce((acc, item) => acc + item.score, 0) / data.length)

	const handleBtn = () => {
		setBtn(false)
	}

	return (
		<>
			{data.length > 0 && (
				<BtnContext.Provider value={{ isDisabled: btn }}>
					<section className='flex flex-col md:flex-row md:rounded-[3rem] md:shadow-2xl'>
						<ResultInfo
							result={calculatedResult}
							onStopCounter={handleBtn}
						/>
						<ResultItems data={data} />
					</section>
				</BtnContext.Provider>
			)}
		</>
	)
}

export default Results
