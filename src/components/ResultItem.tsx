type ResultItemProps = {
	icon: string
	category: string
	score: number
}

export default function ResultItem(props: ResultItemProps) {
	return (
		<div>
			<img
				src={props.icon}
				alt=''
				aria-hidden='true'
			/>
			<p>{props.category}</p>
			<p>
				<span>{props.score}</span>/100
			</p>
		</div>
	)
}
