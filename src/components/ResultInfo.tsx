interface ResultInfoProps {
	result: number
}

const ResultInfo = (props: ResultInfoProps) => {
	return (
		<div>
			<h1>Your result</h1>
			<div>
				<p>{props.result}</p>
				<p>of 100</p>
			</div>
			<strong>Great</strong>
			<p>You scored higher than 65% of the people who have taken these tests.</p>
		</div>
	)
}

export default ResultInfo
