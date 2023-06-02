import React, { useState } from "react"
import { PageWrapper } from "./home.styles"
import { Header, GifViewer, Button } from "../../components"
import { useGif } from "../../data/hooks/useGif"

export const DEFAULT_KEYWORD = "dance"

export const HomePage = () => {
	const [keyWord, setKeyWord] = useState<string>(DEFAULT_KEYWORD)
	const {
		data: gif,
		refetch: fetchNewGif,
		isLoading,
		isFetching,
		isError,
	} = useGif(keyWord)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const buttonTitle: string = isPlaying ? "Change the channel" : "Start"

	const onButtonClick = () => {
		fetchNewGif()
		setKeyWord("")
		if (!isPlaying) {
			setIsPlaying(true)
		}
	}

	return (
		<PageWrapper>
			<Header>React Telly</Header>
			<GifViewer
				gifUrl={gif?.data.images?.downsized_medium.url}
				isError={isError}
				isLoading={isLoading || isFetching}
			/>
			<Button onClick={onButtonClick}>{buttonTitle}</Button>
		</PageWrapper>
	)
}
