import React from "react"
import { Input, Label, TextInputWrapper } from "./TextInput.styles"

type PropsType = {
	onChange: Function
	label: string
	value: string
	placeholder: string
}

export const TextInput: React.FC<PropsType> = ({
	onChange,
	value,
	label,
	placeholder,
}) => {
	return (
		<TextInputWrapper>
			<Label htmlFor="textInput">{label}</Label>
			<Input
				id="textInput"
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					onChange(e.target.value)
				}
			/>
		</TextInputWrapper>
	)
}
