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
		<div>
			<h2>Summary</h2>
			<ResultItem {...props.data[0]} />
			<ResultItem {...props.data[1]} />
			<ResultItem {...props.data[2]} />
			<ResultItem {...props.data[3]} />
			<button>Continue</button>
		</div>
	)
}

export default ResultItems
